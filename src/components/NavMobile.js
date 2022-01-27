import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./styles/Navbar.css";

const Ul = styled.ul`
  list-style: none;
  display: none;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0 5px 25px rgb(0 0 0 / 10%);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(20px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    top: 91px;
    left: 0;
    height: 90vh;
    width: 100vw;
    padding-top: 3.5rem;
    z-index: 20000;

    @-moz-document url-prefix() {
      background-color: var(--gradientColor);
    }

    li {
      color: white;
    }
  }
`;
const NavMobile = (props) => {
  return (
    <div>
      <nav>
        <Ul open={props.open}>
          <NavLink
            className="NavLink"
            to="/"
            onClick={() => props.setOpen(!props.open)}
          >
            <i className="fas fa-home fa-fw fa-2x"></i>
            <p className="TextMenu">Accueil</p>
          </NavLink>
          <NavLink
            onClick={() => props.setOpen(!props.open)}
            className={`${
              localStorage.getItem("id_user") === null
                ? "noBookmark"
                : "NavLink"
            }`}
            to="/bookmark"
          >
            <i className="fas fa-bookmark fa-fw fa-2x"></i>
            <p className="TextMenu">Mes Favoris</p>
          </NavLink>
          <NavLink
            onClick={() => props.setOpen(!props.open)}
            className="NavLink"
            to="/news-semaine"
          >
            <i className="fas fa-users fa-fw fa-2x"></i>
            <p className="TextMenu">News de la semaine</p>
          </NavLink>
          <i
            id="NavDarkMode"
            onClick={props.switchTheme}
            className="far fa-lightbulb fa-fw fa-2x"
          ></i>
        </Ul>
      </nav>
    </div>
  );
};

export default NavMobile;
