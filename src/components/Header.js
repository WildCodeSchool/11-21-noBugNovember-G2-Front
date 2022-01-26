import "./styles/Header.css"
import BurgerMenu from "./BurgerMenu";
import Blacklogo from "../assets/blacklogo.svg"
import Lightlogo from "../assets/lightlogo.svg"
import { NavLink } from 'react-router-dom'


function Header(props) {

	return (
    <header className="Header"> 
        <img id="HeaderLogo" src={props.theme === 'light' ? Blacklogo : Lightlogo } alt="logo"></img>
        <div id="HeaderBorder"></div>
        <div id="HeaderUser">
        <NavLink to="/connect">
        <img id="HeaderUserPicture" src={props.avatar} alt="logo"></img>
        </NavLink>
        </div>
        <BurgerMenu open={props.open} disconnect={props.disconnect} switchTheme={props.switchTheme}/>
    </header>
  )
}

export default Header