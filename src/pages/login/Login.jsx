import React from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user_photo } = userActions


    const handleSignIn = () => {

        //the simulation
        const user = {
            photo: 'https://randomuser.me/api/portraits/men/42.jpg'
        }
        dispatch(user_photo(user))
        navigate('/')
    }

    return (
        <section className='bg-hero-background3 bg-cover bg-center h-screen flex items-center justify-center'>
            <div className="form-control w-full max-w-xs card glass p-10 gap-5">
                <div>
                    <label className="label">
                        <span className="label-text-alt text-slate-200">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* <label className="label">
                    <span className="label-text">Pass</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                <button
                    className='btn'

                    onClick={handleSignIn}
                >
                    Login
                </button>
            </div>

        </section>
    )
}
