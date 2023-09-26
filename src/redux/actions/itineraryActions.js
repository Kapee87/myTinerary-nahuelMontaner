import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const get_itineraries = createAsyncThunk('get_itineraries',
    async () => {
        try {
            const response = await axios.get('https://mytinerary-api.onrender.com/api/itineraries')
            return {
                itineraries: response.data.itineraries
            }
        } catch (error) {
            console.log(error);
        }
    }
)
const get_itinerary_by_id = createAsyncThunk('get_itinerary_by_id',
    async (obj) => {
        console.log(obj);
        try {
            // const response = await axios.get(`https://mytinerary-api.onrender.com/api/itineraries/${obj}`)
            const response = await axios.get(`http://localhost:8000/api/itineraries/${obj}`)
            console.log(response);
            return {
                itinerary: response.data.itinerary
            }
        } catch (error) {
            console.log(error);
        }
    }
)


const itineraryActions = { get_itineraries, get_itinerary_by_id }
export default itineraryActions