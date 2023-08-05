import React, { useEffect, useState } from 'react'
import countries from '../mocksDB/countries.json'
import CarouselPic from './CarouselPic'

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < 8) {
        setIndex(index + 4)
      } else {
        setIndex(0)
      }

    }, 6000)
    return () => {
      clearInterval(timer)
    }
  }, [index])

  const handleNext = () => {
    if (index >= 0 && index < 8) {
      setIndex(index + 4)
    } else {
      setIndex(0)
    }
  }
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 4)
    } else {
      setIndex(8)
    }
  }
  return (
    <>
      <div className='h-16 bg-black w-full flex items-center justify-center'>
        <h2 className='font-mono font-bold text-4xl drop-shadow-md shadow-lg'>
          Popular MyTineraries
        </h2>
      </div>
      <div className="carousel p-0 min-h-screen w-full items-center justify-center overflow-hidde bg-avionBg bg-cover">

        <div className="grid w-3/4 grid-cols-1 sm:grid-cols-2 transition gap-4">
          <CarouselPic countries={countries} index={index} />
        </div>
        <div className='absolute flex justify-between w-full'>
          <button className="btn btn-circle" onClick={handlePrev} >❮</button>
          <button className={`btn btn-circle ${index > 7 ? 'disabled' : ''}`} onClick={handleNext}>❯</button>
        </div>
      </div>
    </>
  )
}
