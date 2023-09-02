import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AvatarBtn() {
    const profile = useSelector(store => store.userReducer.photo)
    return (
        <Link className="avatar hover:cursor-pointer items-center" to={'/login'}>
            <div className="w-12 rounded ">
                <img src={profile} alt="imagen de usuari@ genéric@" className="drop-shadow-2xl" />
            </div>
        </Link>
    )
}
