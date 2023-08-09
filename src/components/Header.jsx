import { useState } from "react"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import menu from '../assets/menu.png'
import borrar from '../assets/borrar.png'

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleBurger = () => {
        setNavIsOpen(!navIsOpen)
    }

    return (
        <header className="font-serif flex justify-between sm:justify-around font-bold navbar bg-slate-600">
            <Logo />
            <ul className="hidden sm:flex items-center gap-4 text-xl ">
                <NavLinks />
            </ul>
            <button className="sm:hidden w-8 hover:scale-125 transition-all z-50 duration-500" onClick={handleBurger}>
                <img src={!navIsOpen ? menu : borrar} alt="botón de menú hamburguesa" className="transition-all duration-700" />
            </button>
            {!navIsOpen ? '' :
                <ul className="flex-col h-full backdrop-blur-sm filter fixed right-0 w-1/2 top-0 pt-20 ps-8 gap-4 items-start z-40 text-lg sm:hidden text-white border-s-2">
                    <NavLinks />
                </ul>

            }
        </header>
    )
}