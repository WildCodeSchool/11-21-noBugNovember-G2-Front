import "./styles/Header.css"
import Blacklogo from "../assets/blacklogo.svg"
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

function Header({avatar, setAvatar}) {

	return (
    <header className="Header"> 
        <img id="HeaderLogo" src={Blacklogo} alt="logo"></img>
        <div id="HeaderBorder"></div>
        <div id="HeaderUser">
        <NavLink to="/connect">
        <img id="HeaderUserPicture" src={avatar} alt="logo"></img>
        </NavLink>
        </div>
    </header>
  )
}

export default Header
