import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/bookmark'>Favoris</NavLink>
                <NavLink to='/team'>Ma promo</NavLink>
            </nav>
        </div>
    )
}
