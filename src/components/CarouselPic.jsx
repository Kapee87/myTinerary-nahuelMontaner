import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function CarouselPic({ countries, index }) {
    const i = [0, 1, 2, 3];
    return (
        <>
            {
                i.map((i) => (
                    <Link className='card object-cover overflow-hidden relative' key={i}>
                        <div className=' max-h-60 rounded-lg overflow-hidden m-4'>
                            <img src={countries[index + i].image} alt="Burger" className='h-fit' />
                        </div>
                        <div className='absolute shadow-lg w-full h-16 bg-gray-950 bg-opacity-70 text-center bottom-0 font-serif font-bold rounded-lg'>
                            <h3 className='text-xl text-white'>
                                {countries[index + i].name}
                            </h3>
                            <h5 className='text-xs'>
                                {countries[index + i].country}
                            </h5>
                        </div>
                    </Link>
                ))

            }
        </>
    )
}
