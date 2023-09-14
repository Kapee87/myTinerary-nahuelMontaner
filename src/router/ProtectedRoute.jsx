import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageNotFound from '../pages/notFound/PageNotFound';

function ProtectedRoute({ children }) {
    let user = useSelector(store => store.userReducer.user);
    const navigate = useNavigate()

    if (user) return children

    let timerInterval
    Swal.fire({
        title: 'Going back to home',
        html: 'You must be logged in to unlock full features',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        navigate('/')
    })

    return <PageNotFound />
}

export default ProtectedRoute