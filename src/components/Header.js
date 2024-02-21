import "../styles/Header.scss";
import logoKasa from "../assets/logo-kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logoKasa} alt="Logo de Kasa" className="logo-kasa" />
      </NavLink>
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
