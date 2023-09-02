import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";
const { get_cities, filter_cities, get_city_by_id, update_itinerary } = cityActions

const initialState = {
    cities: [],
    city: {}
}

const cityReducer = createReducer(initialState, (builder) => builder
    .addCase(get_cities.fulfilled,
        (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
    .addCase(filter_cities.fulfilled, (state, action) => {

        return {
            ...state,
            cities: action.payload.cities
        }
    })
    .addCase(get_city_by_id.fulfilled,
        (state, action) => {
            return {
                ...state,
                city: action.payload.city
            }
        }
    )
    .addCase(update_itinerary.fulfilled,
        (state, action) => {
            /* const newItinerary = state.city.itineraries.filter(it => it._id = action.payload.itinerary._id)
            newItinerary.likes = action.payload.itinerary.likes
            const newCity = state.city
            console.log(newItinerary.likes); */
            return {
                ...state
            }
        }
    )
)

export default cityReducer