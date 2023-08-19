import React, { useEffect, useState } from 'react'
import UnderConstruction from '../../components/UnderConstruction'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Details() {
    const { id } = useParams()
    const [detail, setDetail] = useState()
    const [isLoading, setIsloading] = useState(true)
    const [scrollDown, setScrollDown] = useState(false)

    useEffect(() => {
        setIsloading(true)
        axios.get(`https://mytinerary-api.onrender.com/api/cities/${id}`)
            .then((res) => { setDetail(res.data.cities) })
            .then(() => {
                setIsloading(false)
            })

    }, [])

    const handleArrowClick = () => {
        if (!scrollDown) {
            scroll(0, 700)
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
                <button className="btn bg-slate-600 absolute right-5 text-[.85em] top-[20vh]">Volver a cities</button>
            </Link>
            {
                isLoading
                    ?
                    <section className='w-full h-screen flex justify-center items-center'>
                        <span className="loading loading-dots loading-lg"></span>
                    </section>
                    : (
                        detail ?
                            <section className='bg-hero-background2 w-full h-screen bg-fixed bg-cover flex justify-center items-center'>
                                <div className={`card md:card-side w-[80vw] max-w-[37rem] h-[60vh] glass h-min-16 duration-1000`}>

                                    <figure className='w-full h-full overflow-hidden'>
                                        <img src={detail.image} alt={detail.detail} className='w-full h-full transition-all duration-1000' loading='lazy' />
                                    </figure>
                                    <div className='bg-slate-600 rounded-b-lg text-center p-3 flex flex-col justify-stretch gap-3 items-center z-50 px-5'>
                                        <div className='flex items-center gap-5 mt-3 justify-around w-full'>
                                            <h3 className="text-sm lg:text-lg stat-value text-white">{detail.city}</h3>
                                            <p className='text-xs stat-title'>{detail.country}</p>
                                        </div>
                                        <p className='text-xs text-slate-200'>{detail.detail} </p>
                                        {/* <p className={`absolute top-0 left-0 p-5 text-gray-100 backdrop-blur-2xl rounded-2xl h-full w-full font-serif ${isHover ? 'flex' : 'hidden'}`}>{detail}</p> */}
                                    </div>
                                </div >
                            </section>
                            :
                            <p>hubo un problema</p>
                    )
            }
            <div className={`animate-bounce fixed bottom-5 right-8  ${!scrollDown ? '' : '[&>svg]:rotate-180'}`} onClick={handleArrowClick}>
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

            <UnderConstruction />
        </>
    )
}

export default Details