import { Link } from "react-router-dom";
import myLogo from '../assets/myLogo1.png'

export default function Logo() {
    return (
        <section className="flex items-center gap-5">
            <Link to={'/'}>
                <img src={myLogo} alt="Logo del sitio" className="w-28 sm:w-36 rounded-2xl" />
            </Link>
        </section>
    )
}
