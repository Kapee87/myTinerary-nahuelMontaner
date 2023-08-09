import { Link } from "react-router-dom";
import genericUser from '../assets/usuario.png'

export default function AvatarBtn() {
    return (
        <Link className="avatar hover:cursor-pointer items-center" to={'/login'}>
            <div className="w-12 rounded ">
                <img src={genericUser} alt="imagen de usuari@ genéric@" className="drop-shadow-2xl" />
            </div>
        </Link>
    )
}
