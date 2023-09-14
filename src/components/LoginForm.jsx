import React, { useEffect, useState } from 'react';
import userImg from '../assets/usuario.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Swal from 'sweetalert2';
import GoogleSignIn from './googleSignIn';


export default function LoginForm({ setIsNew }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const store = useSelector(store => store.userReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user_login, resetUser } = userActions

    useEffect(() => {
        if (store.user)
            return navigate('/')
    }, [store])

    const handleSignIn = async (e) => {
        e.preventDefault()
        if (Object.values(formData).includes('')) return Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'There is some empty field.'
        })
        dispatch(user_login({
            data: formData
        }))
    }
    const handleSignOut = () => {
        dispatch(resetUser({
            data: store
        }))
        setFormData({
            email: '',
            password: ''
        })
    }

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className={`h-screen flex items-center justify-center skew-x-2 `}>
                {
                    store.user
                        ?
                        //lo dejo por si llega a fallar el efecto con el navigate al logearse
                        <form action="" className="w-full m-3 md:w-1/3 bg-white rounded-lg items-center mt-5" onSubmit={handleSignIn}>
                            <div className="flex font-bold justify-center mt-6 items-center gap-3">
                                <img src={store?.user.image} alt="" className="h-24 w-24 rounded-full" />
                                <h3>{store.user.email} </h3>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="w-full mt-6 py-2 rounded bg-purple-500 text-gray-100 focus:outline-none">
                                Sign out
                            </button>
                        </form>
                        :
                        <form action="" className="w-full md:w-1/3 bg-white rounded-lg items-center" onSubmit={handleSignIn}>
                            <div className="flex font-bold justify-center mt-6">
                                <img src={userImg} alt="" className="h-24 w-24" />
                            </div>
                            <h2 className="text-3xl text-center text-gray-700 mb-4">Welcome Back!</h2>
                            <div className="px-12 pb-10">
                                <div className="w-full mb-2">
                                    <div className="flex justify-center">
                                        <input type="text" placeholder="Username"
                                            className="px-8 w-full border rounded py-2 text-gray-70 0 focus:outline-none items-center" name='email' onChange={handleInput} />
                                    </div>
                                </div>
                                <div className="w-full mb-2">
                                    <div className="flex justify-center">
                                        <input type="password" placeholder="Password"
                                            className="px-8 w-full border rounded py-2 text-gray-70 focus:outline-none" name='password' onChange={handleInput} />
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className="w-full mt-6 py-2 rounded bg-purple-500 text-gray-100 focus:outline-none">
                                    Sign in
                                </button>
                                <GoogleSignIn />

                                <button
                                    type='button'
                                    className='card w-full mt-5 p-3 text-white bg-gradient-to-r from-sky-500 to-indigo-500'
                                    onClick={() => setIsNew(true)}>
                                    <p className='text-start w-full'>New here?, go to create an account</p>
                                </button>
                            </div>
                        </form>
                }
            </div>
        </>
    );
}