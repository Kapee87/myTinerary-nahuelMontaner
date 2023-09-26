import React, { useEffect, useState } from 'react'
import dolarin from '../assets/mileidolar.png'
import img3 from '../assets/construction.jpg'
import { genericAvatar } from '../assets/genericAvatar';
import { useDispatch } from 'react-redux';



function Itineraries({ itinerary }) {
    const dispatch = useDispatch()
    const [billetes, setBilletes] = useState([])

    useEffect(() => {
        //calculador de rango para renderizar los billetes
        let price = itinerary.price;
        let numBilletes
        price < 100 ? numBilletes = 1 : price > 100 &
            price < 400 ? numBilletes = 2 : price > 400 &
                price < 800 ? numBilletes = 3 : price > 800 &
                    price < 1200 ? numBilletes = 4 : numBilletes = 5
        setBilletes(Array(numBilletes).fill(dolarin));

    }, [])

    const handleLike = () => {
        /*  const updateItinerary = {
             ...itinerary,
             likes: itinerary.likes + 1
         }
         dispatch(cityActions.update_itinerary(updateItinerary))
         */

        alert('coming soon function')
    }
    return (
        <section>
            <div className="hero min-h-screen bg-base-200 md:p-10">
                {
                    !itinerary ? <p>No existen itineraries</p>
                        :
                        <div className="card bg-base-100 shadow-xl md:w-[60vw] sm:p-10 md:min-w-fit">
                            <div className='flex flex-col md:flex-row'>
                                <div className="avatar flex flex-col pt-5 items-center">
                                    {
                                        itinerary.user !== null ? <>
                                            <div className="avatar">
                                                <div className="w-24 rounded-full">
                                                    <img src={itinerary?.user?.image} />
                                                </div>
                                            </div>
                                            <p className='text-white z-50'>
                                                {
                                                    itinerary.user?.name
                                                }
                                            </p>
                                        </>
                                            : <>
                                                <div className="avatar">
                                                    <div className="w-24 rounded-full">
                                                        <img src={genericAvatar} />
                                                    </div>
                                                </div>
                                                <p className='text-white z-50'>
                                                    Jonh Wick
                                                </p>

                                            </>
                                    }
                                </div>
                                <div className="card-body">
                                    <span>Price: </span>
                                    <div className='flex flex-wrap gap-1 [&>img]:h-6'>
                                        {
                                            billetes?.map((billete, index) => (
                                                <img src={billete} alt='imagen para representar el precio del itinerario' key={index} />
                                            ))
                                        }
                                    </div>
                                    <h2 className="card-title">Duration: {itinerary?.duration} </h2>
                                    <div>
                                        <h1 className="text-5xl font-bold">{itinerary?.name} </h1>
                                        <p className="py-6"></p>
                                    </div>
                                    <div className='card gap-2 md:card-side items-center'>
                                        {
                                            itinerary?.hashtags?.map((hash, index) => {
                                                let badgeClass
                                                switch (index) {
                                                    case 0:
                                                        badgeClass = 'badge badge-outline self-center'
                                                        break
                                                    case 1:
                                                        badgeClass = 'badge badge-primary badge-outline self-center'
                                                        break
                                                    case 2:
                                                        badgeClass = 'badge badge-secondary badge-outline self-center'
                                                        break
                                                    default:
                                                        badgeClass = 'badge badge-accent badge-outline self-center'
                                                        break
                                                }
                                                return (
                                                    <div
                                                        className={badgeClass}
                                                        key={hash}
                                                    >{hash ?? hash} </div>
                                                )
                                            })
                                        }
                                        {/* <div className="badge badge-outline">hash1</div>
                                        <div className="badge badge-primary badge-outline">hash2</div>
                                        <div className="badge badge-secondary badge-outline">hash3</div>
                                        <div className="badge badge-accent badge-outline">hash4</div> */}
                                        <div className='px-5 cursor-pointer flex' onClick={handleLike}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                            <span>{itinerary?.likes || 0} </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='card-actions'>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium flex items-center ">
                                        Activities
                                        <span className="badge ms-4 p-4">
                                            Ver más
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                            </svg>
                                        </span>

                                    </div>

                                    <div className="collapse-content">

                                        {/* <div className="w-full carousel carousel-center rounded-box">
                                    <div className="carousel-item w-1/3" id='item1'>
                                        <img src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
                                    </div>
                                    <div className="carousel-item w-1/3" id='item2'>
                                        <img src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
                                    </div>
                                    <div className="carousel-item w-1/3" id='item3'>
                                        <img src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
                                    </div>
                                    <div className="carousel-item w-1/3" id='item4'>
                                        <img src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
                                    </div>
                                    <div className="carousel-item w-1/3" id='item5'>
                                        <img src={img3} className="w-full" alt="Tailwind CSS Carousel component" />
                                    </div>
                                </div> */}
                                        <div className="carousel w-full">
                                            <div id="item1" className="carousel-item w-full">
                                                <img src={img3} className="w-full" />
                                            </div>
                                            <div id="item2" className="carousel-item w-full">
                                                <img src={img3} className="w-full" />
                                            </div>
                                            <div id="item3" className="carousel-item w-full">
                                                <img src={img3} className="w-full" />
                                            </div>
                                            <div id="item4" className="carousel-item w-full">
                                                <img src={img3} className="w-full" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-full py-2 gap-2">
                                            {/* <a href="#item1" className="btn btn-xs">1</a>
                                            <a href="#item2" className="btn btn-xs">2</a>
                                            <a href="#item3" className="btn btn-xs">3</a>
                                            <a href="#item4" className="btn btn-xs">4</a> */}
                                            {/* <a href="#item1" className="btn btn-xs">1</a>
                                            <a href="#item2" className="btn btn-xs">2</a>
                                            <a href="#item3" className="btn btn-xs">3</a>
                                            <a href="#item4" className="btn btn-xs">4</a> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>

        </section>
    )
}

export default Itineraries