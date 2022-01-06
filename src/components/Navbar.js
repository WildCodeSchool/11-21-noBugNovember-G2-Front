import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

export default function Navbar() {
  const [active, setActive] = React.useState(false)
  return (
    <nav className={`Nav ${active ? 'NavOpen' : ''}`}>
      <ion-icon
        onClick={() => setActive(!active)}
        name='chevron-forward-circle-sharp'
        id={active ? 'ion-icon-open' : 'ion-icon'}
      ></ion-icon>
      <NavLink className='NavLink' to='/'>
        <i className='fas fa-home fa-fw fa-2x'></i>
        <p className={`TextMenu ${active ? '' : 'TextMenuOpen'}`}>Accueil</p>
      </NavLink>
      <NavLink className='NavLink' to='/bookmark'>
        <i className='fas fa-bookmark fa-fw fa-2x'></i>
        <p className={`TextMenu ${active ? '' : 'TextMenuOpen'}`}>
          Mes Favoris
        </p>
      </NavLink>
      <NavLink className='NavLink' to='/team'>
        <i className='fas fa-users fa-fw fa-2x'></i>
        <p className={`TextMenu ${active ? '' : 'TextMenuOpen'}`}>Ma Promo</p>
      </NavLink>
      <i id='NavDarkMode' className='far fa-lightbulb fa-fw fa-2x'></i>
    </nav>
  )
}
