import { createReducer } from '@reduxjs/toolkit'
import userActions from '../actions/userActions'

const { resetUser, user_login, user_login_google, user_token, user_signup } = userActions

const initialState = {
    user: null,
    token: null,
    error: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_signup.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_login_google.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(resetUser.fulfilled, (state, action) => { //esto sería el sign out
            return { ...initialState };
        })
        .addCase(user_token.fulfilled, (state, action) => {
            if (!action.payload.user) { return }
            return {
                ...state,
                user: action.payload.user
            }
        })
)

export default userReducer