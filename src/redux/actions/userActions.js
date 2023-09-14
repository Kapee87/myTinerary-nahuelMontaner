import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2';


const user_signup = createAsyncThunk('user_signup', async (obj) => {

    try {
        const { data } = await axios.post('https://mytinerary-api.onrender.com/api//auth/signup', obj)

        Swal.fire({
            icon: 'success',
            text: `Congrats! you are registered.`,
            timer: 3000
        })
        return {
            user: obj
        }

    } catch (error) {
        return Swal.fire({
            icon: 'error',
            text: error.response.data.message
        })
    }
})

const user_login = createAsyncThunk('user_login', async (obj) => {
    const body = obj.data ? obj.data : obj
    try {

        const { data } = await axios.post('https://mytinerary-api.onrender.com/api/auth/signin', body)
        /* const { data } = await axios.post('http://localhost:8000/api/auth/signin', body) */

        Swal.fire({
            imageUrl: data.response.user.image,
            text: `Welcome, ${data.response.user.name}`,
            timer: 3000
        })
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            text: error.response.data.message,
            icon: 'error'
        })
        return {
            user: null
        }
    }
})
const user_login_google = createAsyncThunk('user_login_google', async (obj) => {

    const body = obj.data ? obj.data : obj
    if (body) {
        Swal.fire({
            imageUrl: body.user.image,
            text: `Welcome, ${body.user.name}`,
            timer: 3000
        })
        localStorage.setItem('token', body.token)
        localStorage.setItem('user', JSON.stringify(body.user))
        return {
            user: body.user,
            token: body.token
        }
    }
    Swal.fire({
        text: 'Something went wrong, try again later',
        icon: 'error'
    })
    return {
        user: null
    }
})

const user_token = createAsyncThunk('user_token', async () => {
    const url = `https://mytinerary-api.onrender.com/api/auth/token`
    const token = localStorage.getItem('token')

    if (token) {
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }
        try {
            const { data } = await axios.post(url, null, configs)
            return {
                user: data.user
            }
        } catch (error) {
            console.log(error)

        }
    }
    return {
        user: null,
        token: null
    }
})

export const resetUser = createAsyncThunk('resetUser', async (obj) => {
    const token = localStorage.getItem('token')
    const configs = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        const { data } = await axios.post('https://mytinerary-api.onrender.com/api/auth/signout', obj.data.email, configs)
            .then(res => {
                localStorage.clear()
                return {
                    user: null,
                    token: null
                }
            })
    } catch (error) {
        console.log(error)
    }

});



const userActions = { resetUser, user_login, user_login_google, user_token, user_signup }
export default userActions