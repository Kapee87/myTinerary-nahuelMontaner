import { Link } from "react-router-dom";

export default function AvatarBtn() {
    return (
        <Link className="avatar hover:cursor-pointer items-center" to={'/login'}>
            <div className="w-12 rounded ">
                <img src="usuario.png" alt="imagen de usuari@ genéric@" className="drop-shadow-2xl" />
            </div>
        </Link>
    )
}
