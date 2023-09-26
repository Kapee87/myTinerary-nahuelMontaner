import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'
import apiUrl from '../api.js'

function GoogleSignIn() {
    const googleBtn = useRef()


    const dispatch = useDispatch()
    const { user_login_google } = userActions

    const handleCredentialResponse = async (response) => {
        // console.info('JWT google: ' + response.credential);
        const data = {
            token_id: response.credential
        }
        // const userResponse = await axios.post('http://localhost:8000/api/auth/google', data)
        const userResponse = await axios.post(`${apiUrl}auth/google`, data)

        dispatch(user_login_google(userResponse.data.response))
    }


    useEffect(() => {

        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "617300972916-luso4e9ellh77op5d6kdvckh0mebjct0.apps.googleusercontent.com",
                //import.meta.env.VITE_CLIENT_ID
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleBtn.current,
                {
                    type: "standard",
                    shape: "rectangular",
                    theme: "filled_blue",
                    size: "medium",
                }
            );

        }
    }, [])

    return (
        <>
            <div className='m-3' ref={googleBtn}></div>

        </>

    )
}

export default GoogleSignIn