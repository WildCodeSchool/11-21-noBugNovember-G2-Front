import React from "react";
import imgDisco from "../assets/croix_rouge.png";
import "./styles/ProfileModal.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BuildIcon from "@mui/icons-material/Build";

export default function ProfileModal({ active, setActive }) {
  const disconnect = () => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <>
      <div
        className={`tricheCarre ${
          active ? "tricheCarreHidden" : "tricheCarre"
        }`}
      >
        <div className="petitcarre"></div>
      </div>
      <div
        className={`bodyProfileModal ${active ? "bodyProfileModalHidden" : ""}`}
      >
        <NavLink to="/connect">
          <div className="wrapDisconnect wrapOptionMenuProfile">
            <button className="buttonOptionMenuProfile">
              <AccountCircleIcon color="disabled" />
              <label>Profile</label>
            </button>
          </div>
        </NavLink>
        <NavLink to="/connect">
          <div className="wrapDisconnect wrapOptionMenuProfile">
            <button className="buttonOptionMenuProfile">
              <BuildIcon color="disabled" />
              <label>Paramétres</label>
            </button>
          </div>
        </NavLink>
        <div className="wrapDisconnect wrapOptionMenuProfile">
          <button className="buttonOptionMenuProfile" onClick={disconnect}>
            <LogoutIcon color="disabled" />
            <label>Déconnexion</label>
          </button>
        </div>
      </div>
    </>
  );
}
