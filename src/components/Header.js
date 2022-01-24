import "./styles/Header.css";
import Lightlogo from "../assets/lightlogo.svg";
import Blacklogo from "../assets/blacklogo.svg";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileModal from "./ProfileModal";

function Header({ avatar, setAvatar, theme }) {
  const [active, setActive] = useState(false);

  return (
    <header className="Header">
      <img
        id="HeaderLogo"
        src={theme === "light" ? Blacklogo : Lightlogo}
        alt="logo"
      ></img>
      <div id="HeaderBorder"></div>
      <div className="wrapperUser">
        <div id="HeaderUser" onClick={() => setActive(!active)}>
          <img id="HeaderUserPicture" src={avatar} alt="logo"></img>
        </div>
        <ProfileModal active={active} setActive={setActive} />
      </div>
    </header>
  );
}

export default Header;
