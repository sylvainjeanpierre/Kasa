import "../styles/PageError.scss";
import { NavLink } from "react-router-dom";

function PageError(props) {
  return (
    <div className="page-error">
      <p className="code-error">{props.codeError}</p>
      {props.codeError === "404" ? (
        <p className="comment">Oups ! La page que vous demandez n'existe pas</p>
      ) : null}
      <NavLink to="/" className="home-btn">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default PageError;
