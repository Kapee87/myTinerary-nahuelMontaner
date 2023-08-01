import { useState } from "react"

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleBurger = () => {
        setNavIsOpen(!navIsOpen)
    }

    return (
        <header className="font-serif flex justify-between sm:justify-around font-bold md:px-6">
            <section className="flex items-center gap-5">
                <img src="/viajar.png" alt="Logo del sitio" className="w-10 sm:w-14" />
                <h2 className=" sm:text-3xl">myTinerary</h2>
            </section>
            <ul className="hidden sm:flex items-center gap-4 text-xl ">
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>Cities</li>
                </a>
                <button className="bg-indigo-500 p-2 px-6 text-lg rounded-xl text-white flex items-center gap-2 hover:bg-indigo-400 transition-colors">
                    <img src="usuario.png" alt="imagen de usuario genéric@" className="w-6" />
                    Login
                </button>
            </ul>
            <button className="sm:hidden w-8 hover:scale-125 transition-all z-10 duration-500" onClick={handleBurger}>
                <img src={!navIsOpen ? '/menu.png' : 'borrar.png'} alt="botón de menú hamburguesa" className="transition-all duration-700" />
            </button>
            {!navIsOpen ? '' :
                <ul className="flex-col h-full backdrop-blur-sm filter fixed right-0 w-1/2 top-0 pt-20 transition-all justify-center items-center">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#" >
                        <li>Cities</li>
                    </a>
                    <button className="bg-indigo-500 p-2 px-6 text-lg rounded-xl text-white items-center gap-2 hover:bg-indigo-400 transition-colors w-50">
                        <li>
                            <img src="usuario.png" alt="imagen de usuario genéric@" className="w-6" />
                            <span>Login</span>
                        </li>
                    </button>
                </ul>
            }
        </header>
    )
}