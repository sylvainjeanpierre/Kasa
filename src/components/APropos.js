import aProposBackground from "../assets/a-propos-background.png";
import "../styles/APropos.css";

function APropos() {
  return (
    <div>
      <img
        src={aProposBackground}
        alt="Arrière plan"
        className="a-propos-background"
      />
      <details className="details-a-propos">
        <summary>Fiabilité</summary>
      </details>
      <details className="details-a-propos">
        <summary>Respect</summary>
      </details>
      <details className="details-a-propos">
        <summary>Service</summary>
      </details>
      <details className="details-a-propos">
        <summary>Sécurité</summary>
      </details>
    </div>
  );
}

export default APropos;
