import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero() {
    return (
        <main className='hero min-h-screen bg-hero-background'>
            <div className="card lg:card-side h-3/6  backdrop-blur-sm shadow-xl sm:flex-row p-4 bg-slate-950 bg-opacity-50">
                <figure><img src="https://w0.peakpx.com/wallpaper/879/731/HD-wallpaper-cat-abej-beach-beograd-drink-summer-vacation-zedgeld17.jpg" alt="decoration" className='w-72 rounded-xl' /></figure>
                <div className="flex flex-col items-center h-full justify-center font-bold text-slate-300 gap-5 text-center">
                    <h2 className="w-3/5 text-xl">Find your perfect trip designed by insiders who know and love their cities</h2>
                    <div className="flex items-center gap-5 justify-end">
                        <p className='text-2xl text-white'>Go to find your destination!</p>
                        <Link >
                            <img src="/myIco1.png" alt="animated button" className='h-1/3 animate-pulse' />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}