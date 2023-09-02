import React, { useRef } from 'react'
import CityCard from '../../components/CityCard'
import { useEffect } from 'react'
import lupita from '../../assets/lupita.png'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../../redux/actions/cityActions'



export default function Cities() {
    // const [cities, setCities] = useState([])

    const cities = useSelector((store) => store.cityReducer.cities)

    const dispatch = useDispatch()

    const searchQuery = useRef('')

    useEffect(() => {
        dispatch(cityActions.get_cities())
    }, [])

    const handleChange = () => {

        if (searchQuery.current.value === '') {
            try {
                dispatch(cityActions.get_cities())
            } catch (error) {
                console.log(error);
            }
        }
    }
    const handleSearch = () => {
        dispatch(cityActions.filter_cities({
            city: searchQuery.current.value
        }))
    }


    return (
        <section className='py-5 flex flex-col flex-wrap gap-5 justify-center backdrop-brightness-50 bg-black'>
            <div className='bg-hero-background bg-cover bg-no-repeat bg-fixed w-full h-full fixed top-0'></div>
            <div className='order-0 p-4 rounded-xl backdrop-blur-lg backdrop-brightness-75 hover:backdrop-brightness-50 w-2/5 min-w-fit self-center'>
                <form action="" className='flex flex-col lg:flex-row gap-5 items-center justify-center'>
                    <legend>Search:</legend>
                    <input type="text" className='rounded-lg p-1' ref={searchQuery} onChange={handleChange} />
                    <button className='bg-white rounded-xl p-3' onClick={handleSearch}>
                        <img src={lupita} alt="botón de lupa para buscar cities" className='h-7 w-7 shadow-2xl' />
                    </button>
                </form>
            </div>
            <div className='flex flex-wrap gap-5 justify-center bg-blue-600'>
                {
                    cities?.length > 0
                        ? cities?.map((city) => (
                            <CityCard key={city._id} cityArray={city} />
                        )
                        )
                        :
                        <p className='card w-3/5 h-80 text-3xl text-emerald-600 font-bold backdrop-brightness-50 justify-center items-center'>
                            City Not found
                        </p>
                }
            </div>
        </section>
    )
}
