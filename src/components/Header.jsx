import { useState } from "react"
import AvatarBtn from "./AvatarBtn"

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleBurger = () => {
        setNavIsOpen(!navIsOpen)
    }

    return (
        <header className="font-serif flex justify-between sm:justify-around font-bold navbar bg-slate-600">
            <section className="flex items-center gap-5">
                <img src="/myLogo1.png" alt="Logo del sitio" className="w-28 sm:w-36 rounded-2xl" />
            </section>
            <ul className="hidden sm:flex items-center gap-4 text-xl ">
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>Cities</li>
                </a>
                <AvatarBtn />
            </ul>
            <button className="sm:hidden w-8 hover:scale-125 transition-all z-50 duration-500" onClick={handleBurger}>
                <img src={!navIsOpen ? '/menu.png' : 'borrar.png'} alt="botón de menú hamburguesa" className="transition-all duration-700" />
            </button>
            {!navIsOpen ? '' :
                <ul className="flex-col h-full backdrop-blur-sm filter fixed right-0 w-1/2 top-0 pt-20 ps-8 gap-4 transition-all items-start z-40 text-lg sm:hidden ">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#" >
                        <li>Cities</li>
                    </a>
                    <AvatarBtn />
                </ul>
            }
        </header>
    )
}