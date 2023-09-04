import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Itineraries from '../../components/Itineraries';
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../../redux/actions/cityActions';

function DetailsPage() {
    const { id } = useParams()
    // const [detail, setDetail] = useState()

    const detail = useSelector((store) => store.cityReducer.city)
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(true)
    const [scrollDown, setScrollDown] = useState(false)


    useEffect(() => {
        setIsloading(true)
        dispatch(cityActions.get_city_by_id({ id: id }))
        setIsloading(false)
        scroll(0, 0)
        console.log(detail.itineraries);
    }, [])

    const handleArrowClick = () => {
        if (!scrollDown) {
            scroll(0, 690)
            setScrollDown(true)
        }
        else {
            scroll(0, 0)
            setScrollDown(false)
        }
    }
    window.addEventListener('scroll', () => {
        if (scrollY > 500) {
            setScrollDown(true)
        } else {
            setScrollDown(false)
        }
    })


    return (
        <>
            <Link to='/cities' >
                <button className="absolute right-5 text-4xl top-[12vh] md:top-[20vh] z-10 hue-rotate-180">↩️</button>
            </Link>
            {
                isLoading
                    ?
                    <section className='w-full h-screen flex justify-center items-center'>
                        <span className="loading loading-dots loading-lg"></span>
                    </section>
                    : (
                        detail ?
                            <div className="hero min-h-screen" style={{ backgroundImage: `url(${detail.image})` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h4>{detail.country}</h4>
                                        <h1 className="mb-5 text-5xl font-bold">{detail.city} </h1>
                                        <p className="mb-5">{detail.detail}</p>
                                        <button className="btn btn-primary" onClick={handleArrowClick}>
                                            <p>Itineraries</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            <p>hubo un problema</p>
                    )
            }
            {
                scrollDown
                    ? <div className={`animate-bounce fixed md:bottom-1 md:right-[46vw] bottom-3 right-1 z-50 ${!scrollDown ? '' : '[&>svg]:rotate-180'}`} onClick={handleArrowClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-24 h-12  stroke-stone-700 animate-pulse cursor-pointer"

                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-24 h-12 -mt-10 stroke-stone-700 animate-pulse cursor-pointer"

                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    : ''
            }
            {
                detail?.itineraries?.length == 0
                    ? <p className='flex justify-center items-center w-full min-h-screen bg-primary '>
                        <span className='card py-10 px-3 bg-slate-800 drop-shadow-shadowDos text-center cursor-not-allowed'>
                            Doesn't have any itineraries yet, would you create one? 😁
                            <br />
                            <b className='text-slate-600'>(coming soon function)</b>
                        </span>
                    </p>
                    : detail?.itineraries?.map((it, index) => (
                        <Itineraries key={it} itinerary={it} index={index} />
                    ))
            }

            {/* <UnderConstruction /> */}
        </>
    )
}

export default DetailsPage