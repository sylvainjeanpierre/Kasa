import "../styles/Header.css";
import logoKasa from "../assets/logo-kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logoKasa} alt="Logo de Kasa" className="logo-kasa" />
      <nav className="navBar">
        <NavLink className="nav-button" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav-button" to="/a-propos">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
