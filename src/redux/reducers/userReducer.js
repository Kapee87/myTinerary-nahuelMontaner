import { createReducer } from '@reduxjs/toolkit'
import userActions from '../actions/userActions'
import { genericAvatar } from '../../assets/genericAvatar'

const { user_photo, get_user } = userActions

const initialState = {
    photo: genericAvatar,
    user: {}
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(get_user.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
)

export default userReducer