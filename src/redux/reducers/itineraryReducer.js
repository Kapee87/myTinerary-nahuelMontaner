import { createReducer } from "@reduxjs/toolkit";
import itineraryActions from "../actions/itineraryActions";
const { get_itineraries, get_itinerary_by_id } = itineraryActions

const initialState = {
    itineraries: [],
    itinerary: []
}

const itineraryReducer = createReducer(initialState, (builder) => builder
    .addCase(get_itineraries.fulfilled,
        (state, action) => {
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
    .addCase(get_itinerary_by_id.fulfilled,
        (state, action) => {
            return {
                ...state,
                itinerary: action.payload.itinerary
            }
        })
)

export default itineraryReducer