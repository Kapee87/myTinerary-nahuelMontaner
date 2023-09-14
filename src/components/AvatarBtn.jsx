import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genericAvatar } from '../assets/genericAvatar.js'
import { resetUser } from "../redux/actions/userActions";

export default function AvatarBtn() {
    const dispatch = useDispatch()
    const store = useSelector(store => store.userReducer)
    const { user } = store
    const navigate = useNavigate()
    const handleLogout = () => {
        //simulation
        dispatch(resetUser({ data: user }))
        navigate('/')
    }

    return (
        <div className="dropdown dropdown-hover  avatar flex items-center gap-3">
            <div className="w-12 rounded-3xl hover:cursor-pointer items-center hover:drop-shadow-ligthModeShadow" tabIndex={0} >
                <img src={user ? user.image : genericAvatar} alt="imagen de usuari@ genéric@" className="drop-shadow-2xl" />
            </div>
            <ul tabIndex={0} className="dropdown-content top-10 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {!user ?
                    <li className={user ? 'disabled' : ''}>
                        <Link to={'/login'} >
                            Sign up / Sign in
                        </Link>
                    </li>
                    :

                    <li className={!user ? 'disabled' : ''} onClick={handleLogout}><a>Sign out</a></li>
                }
            </ul>
        </div>
    )
}
