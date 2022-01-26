import "./styles/Header.css";
import Lightlogo from "../assets/lightlogo.svg";
import Blacklogo from "../assets/blacklogo.svg";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import BurgerMenu from "./BurgerMenu";

function Header(props) {
  const [active, setActive] = useState(false);

  return (
    <header className="Header">
      <img
        id="HeaderLogo"
        src={props.theme === "light" ? Blacklogo : Lightlogo}
        alt="logo"
      ></img>
      <div id="HeaderBorder"></div>
      <div className="wrapperUser">
        <div id="HeaderUser" onClick={() => setActive(!active)}>
          <img id="HeaderUserPicture" src={props.avatar} alt="logo"></img>
        </div>
        <ProfileModal active={active} setActive={setActive} />
      </div>
      <BurgerMenu
        open={props.open}
        disconnect={props.disconnect}
        switchTheme={props.switchTheme}
      />
    </header>
  );
}

export default Header;
