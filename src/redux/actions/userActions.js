import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const user_photo = createAction('user_photo',
    (obj) => {
        return {
            payload: {
                photo: obj.photo
            }
        }
    })
const get_user = createAsyncThunk('get_user', async (obj) => {
    try {
        const response = await axios.get(`https://mytinerary-api.onrender.com/api/users/${obj.id}`)
        return {
            user: response.data.user
        }
    } catch (error) {
        console.log(error, obj);
        return {
            user: {
                name: 'John Doe',
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAACSCAMAAABMm3W0AAAAP1BMVEWZmZny8vL4+Pj19fWUlJSRkZGOjo6pqanFxcXs7Ozk5OScnJyfn5/v7++srKylpaW6urrQ0NDb29u0tLT+/v5rbLZ4AAADjElEQVR4nO2a23LjIAyGMQIMxNjGzvs/6zpJM9ttHevkNjM7/Be5yIW/kRCSEJjuHTKN2qiN2qj/GxV+nQpQUs45FbC/RgVb18EFH/xljJ3lGs2lwuMnOm+ecmFcmFwO1ULKafu1i3Hms5wbauE4mk4FqP1ghmlO0Ztv8kNkBBeVui3kh4HOu+/Q2/+mkv1MpNo87LP+5S5EN5OoABFn3rlzIZlLoUIZd1ZyHztkirkEKuQXK7mrQPEyToUc6MwbtuJYgq0TC7p5eUHXFqXavd2JqKiphc3cIhnzMUaFyoikpwLmYoxqVwHVVQSLUa8CqDGrkpp42+ZDF+SrCBUWfgRvCklHJSbgL/LIlsWoswRqXDzeOxh1FVHNqqJ2o4w66qi9jNrrqJe3UGVQ06tiuIi267s8rIwmWQw73c6BWZSbtFlCloeVGbGzoprjkK+i9VWUJkZlfRV1MC5qqUWwd0JSUmWN0xX5KE7N7CjWd6Y2Rm7vT2j+sf06Ob6DB3Qsc0yVHDeMmVZlDLO9+1BA2vBjahpkVF2lK2KqKg8LPayz1QqbNV1namXlVVlfocr6JmV9TTKq9nQlW9jh+KsoVeRiNysrnZWYii3rD01D1DOYxIfq66ukl3BZO/m5zy55BwA3oYNEwvQy8bw84aYSp9L0IuDWK2EOT6Ja+iQGHavRqZwRMe5eKpVRZ5HCyqKSh12e5GAqtRBdjA0QWdTuSnMxVs2ZVFhILvZn3iLdsJRukbZtGFTSlkX6UT61I5xjCamQS8WNdYTrIy4V0Fm8P//+lZAV3U9Ql7fYinaLgQxlRBPatgX0ek5ARY886LxHQkXvHdAuWEDFbwCoqZ9DJXRs2O0cn2opBx7kJCegEgos3cXUVxq04w41/dOoFk1MTx+f10vYbqaeYn2EczpTsAvhDcxTbqI8DsHPdGllvtKYO+XpCjbnsq8bnEfflB1RwaZoJAMnZ+Lx067X1I05i5g3+cucDuJqnwr2mmIfpMy7vX6s3atT5Q51M3KZjXdGeDP4FxymuJQ98FcqQKm9EYzdX4DdZVy+x7T5F2nzZuVJxKf8ENMXgz9RwUKdVGv5Svd3knaPCpDlIUsAXz4b/EHdzBxPW8wXXLPm52a6UeFaohHdeDIVhvqILHPL7uOPrOaenJ/z5mjT1em3kA+u6xcw09kbBZcXPq5pampqampqampqampqampq0usPO4Iv7yczC+gAAAAASUVORK5CYII='
            }
        }
    }
})

const userActions = { user_photo, get_user }
export default userActions