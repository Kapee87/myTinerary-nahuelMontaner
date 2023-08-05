import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <section className="flex items-center gap-5">
            <Link to={'/'}>
                <img src="/myLogo1.png" alt="Logo del sitio" className="w-28 sm:w-36 rounded-2xl" />
            </Link>
        </section>
    )
}
