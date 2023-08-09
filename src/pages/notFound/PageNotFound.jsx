import React from 'react'
import errorBg from '../../assets/404.jpg'

export default function PageNotFound() {

    return (
        <div className="min-h-screen items-end flex justify-center ">
            <img src={errorBg} alt="error 404: not found" className='min-h-screen object-cover absolute' />
            <a href='/#/' className='btn mb-4 hover:shadow-xl hover:shadow-indigo-600 hover:text-white z-10'>Back to Home</a>
        </div>
    )
}
