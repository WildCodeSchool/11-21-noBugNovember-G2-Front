import React from "react";
import "./styles/ProfileModal.css";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BuildIcon from "@mui/icons-material/Build";

export default function ProfileModal({ active, setActive }) {
  const disconnect = () => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  /*   window.addEventListener("click", function (e) {
    if (document.getElementById("wrapperModalID").contains(e.target)) {
      console.log("Clicked in");
    } else {
      console.log("Clicked out");
    }
  }); */

  return (
    <>
      <div id="wrapperModalID" className="wrapperModal">
        <div
          className={`bodyProfileModal ${
            active ? "" : "bodyProfileModalHidden"
          }`}
        >
          <NavLink to="/connect">
            <div className="wrapDisconnect wrapOptionMenuProfile">
              <button
                className="buttonOptionMenuProfile"
                onClick={() => setActive(!active)}
              >
                <AccountCircleIcon color="disabled" />
                <label>Profil</label>
              </button>
            </div>
          </NavLink>
          <div className="wrapDisconnect wrapOptionMenuProfile">
            <button
              className="buttonOptionMenuProfile"
              onClick={() => setActive(!active)}
              onClick={disconnect}
            >
              <LogoutIcon color="disabled" />
              <label>Déconnexion</label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
