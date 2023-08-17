import React from 'react'
import CityCard from '../../components/CityCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import lupita from '../../assets/lupita.png'

export default function Cities() {
    const [cities, setCities] = useState()
    useEffect(() => {
        axios.get('https://mytinerary-api.onrender.com/api/cities')
            .then(res => {
                setCities(res.data.cities)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <section className='py-5 flex flex-wrap gap-5 justify-center backdrop-brightness-50 bg-black'>
            <div className='bg-hero-background bg-cover bg-no-repeat bg-fixed w-full h-full fixed top-0'></div>
            <div className='order-0 p-4 rounded-xl backdrop-blur-lg backdrop-brightness-75 hover:backdrop-brightness-50'>
                <form action="" className='flex gap-5 items-center'>
                    <legend>Search:</legend>
                    <input type="text" className='rounded-lg p-1' />
                    <button className='bg-white rounded-xl p-3'>
                        <img src={lupita} alt="botón de lupa para buscar cities" className='h-7 w-7 shadow-2xl' />
                    </button>
                </form>
            </div>
            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    cities?.map((city, index) => (
                        <CityCard key={city._id} cityArray={city} />
                    )
                    )
                }
            </div>
        </section>
    )
}
