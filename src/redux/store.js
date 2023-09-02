import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"
import cityReducer from "./reducers/cityReducer"
import itineraryReducer from "./reducers/itineraryReducer"


export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer
    }
})