import aProposBackground from "../assets/a-propos-background.png";
import "../styles/APropos.scss";

function APropos() {
  return (
    <div className="a-propos">
      <img
        src={aProposBackground}
        alt="Arrière plan"
        className="a-propos__background"
      />

      <input
        className="a-propos__input"
        id="fiabilite__input"
        type="checkbox"
      />
      <label htmlFor="fiabilite__input"> Fiabilité</label>
      <p id="fiabilite__details">Zone de texte</p>

      <input className="a-propos__input" id="respect__input" type="checkbox" />
      <label htmlFor="respect__input"> Respect</label>
      <p id="respect__details">Zone de texte</p>

      <input className="a-propos__input" id="service__input" type="checkbox" />
      <label htmlFor="service__input"> Service</label>
      <p id="service__details">Zone de texte</p>

      <input className="a-propos__input" id="securite__input" type="checkbox" />
      <label htmlFor="securite__input"> Sécurité</label>
      <p id="securite__details">Zone de texte</p>
    </div>
  );
}

export default APropos;
