import React from "react";
import imgDisco from "../assets/croix_rouge.png";
import "./styles/ProfileModal.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileModal() {
  const disconnect = () => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <>
      <div className="bodyProfileModal">
        <NavLink to="/connect">
          <button>Profile</button>
        </NavLink>
        <NavLink to="/connect">
          <button>Paramétre</button>
        </NavLink>
        <button onClick={disconnect}>Déconnexion</button>
      </div>
    </>
  );
}
