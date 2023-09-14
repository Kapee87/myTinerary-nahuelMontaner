import React, { useState } from 'react'

import LoginForm from '../../components/LoginForm'
import SignUp from '../../components/SignUp'


export default function Login() {
    const [isNew, setIsNew] = useState(false)


    return (
        // <section className='bg-hero-background3 bg-cover bg-center h-screen flex items-center justify-center'>
        //     <div className="form-control w-full max-w-xs card glass p-10 gap-5">
        //         <div>
        //             <label className="label">
        //                 <span className="label-text-alt text-slate-200">What is your name?</span>
        //             </label>
        //             <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        //         </div>
        //         {/* <label className="label">
        //             <span className="label-text">Pass</span>
        //         </label>
        //         <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
        //         <button
        //             className='btn'

        //             onClick={handleSignIn}
        //         >
        //             Login
        //         </button>
        //     </div>

        // </section>
        <div className='min-h-screen h-screen bg-form-pic bg-cover bg-center'>
            {
                isNew
                    ? <SignUp setIsNew={setIsNew} isNew={isNew} />
                    : <LoginForm setIsNew={setIsNew} isNew={isNew} />
            }

        </div>
    )
}
