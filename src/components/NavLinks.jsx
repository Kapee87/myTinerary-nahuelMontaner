import React from 'react'
import AvatarBtn from './AvatarBtn'
import { Link } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/cities">
                <li>Cities</li>
            </Link>
            <AvatarBtn />
        </>
    )
}
