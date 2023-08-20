import React from 'react'
import CityCard from '../../components/CityCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import lupita from '../../assets/lupita.png'


export default function Cities() {
    const [cities, setCities] = useState()
    useEffect(() => {
        try {
            axios.get('https://mytinerary-api.onrender.com/api/cities')
                .then(res => {
                    setCities(res.data.cities)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleChange = async (e) => {
        try {
            await axios.get(`https://mytinerary-api.onrender.com/api/cities?city=${e.target.value}`)
                .then(res => setCities(res.data.cities))
        } catch (error) {
            console.log(error);
            setCities([])
        }
    }


    return (
        <section className='py-5 flex flex-col flex-wrap gap-5 justify-center backdrop-brightness-50 bg-black'>
            <div className='bg-hero-background bg-cover bg-no-repeat bg-fixed w-full h-full fixed top-0'></div>
            <div className='order-0 p-4 rounded-xl backdrop-blur-lg backdrop-brightness-75 hover:backdrop-brightness-50 w-2/5 min-w-fit self-center'>
                <form action="" className='flex flex-col lg:flex-row gap-5 items-center justify-center'>
                    <legend>Search:</legend>
                    <input type="text" className='rounded-lg p-1' onChange={handleChange} />
                    <button className='bg-white rounded-xl p-3'>
                        <img src={lupita} alt="botón de lupa para buscar cities" className='h-7 w-7 shadow-2xl' />
                    </button>
                </form>
            </div>
            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    cities?.length > 0
                        ? cities?.map((city) => (
                            <CityCard key={city._id} cityArray={city} />
                        )
                        )
                        :
                        <p className='card w-3/5 h-80 text-emerald-600'>
                            Not found
                        </p>
                }
            </div>
        </section>
    )
}
