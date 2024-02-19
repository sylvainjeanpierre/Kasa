import aProposBackground from "../assets/a-propos-background.png";
import "../styles/APropos.css";

function APropos() {
  return (
    <div className="a-propos">
      <img
        src={aProposBackground}
        alt="Arrière plan"
        className="a-propos-background"
      />

      <div className="details-a-propos">
        <details>
          <summary>Fiabilité</summary>
        </details>
        <details>
          <summary>Respect</summary>
        </details>
        <details>
          <summary>Service</summary>
        </details>
        <details>
          <summary>Sécurité</summary>
        </details>
      </div>
    </div>
  );
}

export default APropos;
