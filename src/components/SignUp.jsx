import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function SignUp({ setIsNew }) {
    const [countries, setCountries] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        image: '',
        country: ''

    })
    const { user } = useSelector(store => store.userReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all?fields=name')
            .then(res => {
                setCountries(res.data.map(country => country.name.common))
            })

    }, [])

    const handleSignUp = (e) => {
        e.preventDefault()
        if (Object.values(formData).includes('')) return Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'There is an empty field.'
        })
        dispatch(userActions.user_signup(formData))
            .then(() => {
                if (user) return navigate('/')
            })
    }
    const handleInput = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="h-screen flex items-center justify-center -skew-x-2 ">
            <form action="" className="w-full md:w-1/3 bg-white rounded-lg items-center pt-5" onSubmit={handleSignUp}>
                <h2 className="text-3xl text-center text-gray-700 mb-4">Sign up</h2>
                <div className="px-12 pb-10">
                    <div className="w-full mb-2">
                        <div className="flex justify-center">
                            <input type="text" placeholder="Name"
                                className="px-8 w-full border rounded py-2 text-gray-70 0 focus:outline-none items-center" name='name' onChange={handleInput} />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex justify-center">
                            <input type="text" placeholder="Lastname"
                                className="px-8 w-full border rounded py-2 text-gray-70 0 focus:outline-none items-center" name='lastname' onChange={handleInput} />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex justify-center">
                            <input type="text" placeholder="Email"
                                className="px-8 w-full border rounded py-2 text-gray-70 0 focus:outline-none items-center" name='email' onChange={handleInput} />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex justify-center">
                            <input type="password" placeholder="Password"
                                className="px-8 w-full border rounded py-2 text-gray-70 focus:outline-none" name='password' onChange={handleInput} />
                        </div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="flex justify-center">
                            <input type="text" placeholder="Image url"
                                className="px-8 w-full border rounded py-2 text-gray-70 0 focus:outline-none items-center" name='image' onChange={handleInput} />
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <select
                            className="select select-bordered bg-zinc-700"
                            onChange={handleInput}
                            name='country'
                            defaultValue="" >
                            <option name='country' disabled value="" >Select a Country</option>
                            {
                                countries?.sort().map(country => (
                                    <option key={country}>{country}</option>
                                ))
                            }

                        </select>
                    </div>
                    <button
                        type='submit'
                        className="w-full mt-6 py-2 rounded bg-purple-500 text-gray-100 focus:outline-none">
                        Sign up
                    </button>
                    <button
                        type='button'
                        className='card w-full mt-5 p-3 text-white bg-gradient-to-r from-sky-500 to-indigo-500 flex text-end'
                        onClick={() => setIsNew(false)}>
                        <p className='w-full '>
                            Already have an account?
                            <b className='block'>Sign in</b>
                        </p>
                    </button>
                </div>
            </form >
        </div >
    )
}

export default SignUp