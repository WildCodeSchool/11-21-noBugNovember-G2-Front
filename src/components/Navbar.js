import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./styles/Navbar.css";

export default function Navbar(props) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <nav className={`Nav ${active ? "NavOpen" : ""}`}>
        <ion-icon
          onClick={() => setActive(!active)}
          name="chevron-forward-circle-sharp"
          id={active ? "ion-icon-open" : "ion-icon"}
        ></ion-icon>
        <NavLink className="NavLink" to="/">
          <i className="fas fa-home fa-fw fa-2x"></i>
          <p className={`TextMenu ${active ? "" : "TextMenuOpen"}`}>Accueil</p>
        </NavLink>
        <NavLink
          className={`${
            localStorage.getItem("id_user") === null ? "noBookmark" : "NavLink"
          }`}
          to="/bookmark"
        >
          <i className="fas fa-bookmark fa-fw fa-2x"></i>
          <p className={`TextMenu ${active ? "" : "TextMenuOpen"}`}>
            Mes Favoris
          </p>
        </NavLink>
        <NavLink className="NavLink" to="/news-semaine">
          <i className="fas fa-users fa-fw fa-2x"></i>
          <p className={`TextMenu ${active ? "" : "TextMenuOpen"}`}>
            News de la semaine
          </p>
        </NavLink>
        <i
          id="NavDarkMode"
          onClick={props.switchTheme}
          className="far fa-lightbulb fa-fw fa-2x"
        ></i>
      </nav>
    </div>
  );
}
