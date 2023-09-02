import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const get_cities = createAsyncThunk('get_cities',
    async () => {
        try {
            const response = await axios.get('https://mytinerary-api.onrender.com/api/cities')
            // console.log(response.data.cities);
            return {
                cities: response.data.cities
            }
        } catch (error) {
            console.log(error);
        }

    })

const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
    try {
        const response = await axios.get(`https://mytinerary-api.onrender.com/api/cities?city=${obj.city.trim()}`)
        // console.log(response.data.cities);
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
        return {
            cities: []
        }
    }
})

const get_city_by_id = createAsyncThunk('get_city_by_id', async (obj) => {
    // console.log(obj);
    try {
        const response = await axios.get(`https://mytinerary-api.onrender.com/api/cities/${obj.id}`)
        // console.log(response.data);
        return {
            city: response.data.Cities
        }
    } catch (error) {
        console.log(error);
        return {
            city: {}
        }
    }

})

const update_itinerary = createAsyncThunk('update_itinerary', async (obj) => {
    try {
        const response = await axios.put(`https://mytinerary-api.onrender.com/api/itineraries/${obj._id}`, {
            likes: obj.likes
        })
        return {
            itinerary: response.data.updateItineraryArray
        }
    } catch (error) {
        console.log(error);
    }
})



const cityActions = { get_cities, filter_cities, get_city_by_id, update_itinerary }
export default cityActions
