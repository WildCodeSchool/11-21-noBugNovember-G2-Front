import "./styles/Header.css"
import Blacklogo from "../assets/blacklogo.svg"
import {useState, useEffect} from 'react'

function Header({avatar, setAvatar}) {

	return (
    <header className="Header"> 
        <img id="HeaderLogo" src={Blacklogo} alt="logo"></img>
        <div id="HeaderBorder"></div>
        <div id="HeaderUser">
            <img id="HeaderUserPicture" src={avatar} alt="logo"></img>
        </div>
    </header>
);}

export default Header