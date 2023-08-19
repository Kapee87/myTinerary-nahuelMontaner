import React from 'react'
import { Link } from 'react-router-dom'

// const { country, city, image, detail, price } = {
//     "country": "Australia",
//     "city": "Sydney",
//     "image": "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-twilight_255553-3062.jpg?size=626&ext=jpg&ga=GA1.2.627092359.1692183177&semt=country_rows_v2",
//     "detail": "Sydney is the state capital of New South Wales and the most populous city in Australia.",
//     "price": 1800
// }

function CityCard({ cityArray }) {
    const { city, country, detail, image, _id } = cityArray
    return (
        <Link
            to={`/cities/${_id}`}
            before={detail.slice(0, 105) + '...'}
            className={`card w-[60vw] max-w-[17rem] glass h-min-16 after:rounded-2xl hover:after:content-[attr(before)] after:text-sm after:h-full after:w-full after:text-slate-200 after:font-serif after:absolute after:transition-all after:flex after:justify-center after:items-center after:p-4 hover:after:backdrop-blur-sm duration-1000 group`}  >
            <figure className='w-full h-full overflow-hidden'><img src={image} alt={detail} className='w-full h-full group-hover:scale-125 transition-all duration-1000' loading='lazy' /></figure>
            <div className='bg-slate-600 rounded-b-lg text-center p-3 flex justify-between items-center z-50 px-5'>
                <h3 className="text-sm stat-value">{city}</h3>
                <p className='text-xs stat-title'>{country}</p>
                {/* <p className={`absolute top-0 left-0 p-5 text-gray-100 backdrop-blur-2xl rounded-2xl h-full w-full font-serif ${isHover ? 'flex' : 'hidden'}`}>{detail}</p> */}
            </div>
        </Link >
    )
}

export default CityCard