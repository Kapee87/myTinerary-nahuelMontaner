import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'

function GoogleSignIn() {
    const googleBtnXl = useRef()
    const googleBtnMd = useRef()
    const googleBtnXs = useRef()
    const dispatch = useDispatch()
    const { user_login_google } = userActions

    const handleCredentialResponse = async (response) => {
        // console.info('JWT google: ' + response.credential);
        const data = {
            token_id: response.credential
        }
        // const userResponse = await axios.post('http://localhost:8000/api/auth/google', data)
        const userResponse = await axios.post('https://mytinerary-api.onrender.com/api/auth/google', data)

        dispatch(user_login_google(userResponse.data.response))
    }

    useEffect(() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: "617300972916-luso4e9ellh77op5d6kdvckh0mebjct0.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleBtnXl.current,
                {
                    theme: "filled_black",
                    size: "large",
                    type: "standard",
                    shape: "pill"
                },
                googleBtnMd.current,
                {
                    theme: "filled_black",
                    size: "medium",
                    type: "standard",
                    shape: "pill"
                },
                googleBtnXs.current,
                {
                    theme: "filled_black",
                    size: "small",
                    type: "standard",
                    shape: "pill"
                }

            );
        }
    }, [])

    return (
        <div className='m-5 flex flex-col'>
            <div className='m-3 hidden lg:flex' ref={googleBtnXl}></div>
            <div className='m-3 hidden md:flex lg:hidden ' ref={googleBtnMd}></div>
            <div className='m-3 md:hidden' ref={googleBtnXs}></div>
        </div>
    )
}

export default GoogleSignIn