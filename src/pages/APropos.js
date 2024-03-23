import aProposBackground from "../assets/a-propos-background.png";
import "../styles/APropos.scss";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function APropos() {
  return (
    <div id="a-propos">
      <Banner image={aProposBackground} />

      <Collapse title="Fiabilité" content="Zone de texte" />

      <Collapse title="Respect" content="Zone de texte" />

      <Collapse title="Service" content="Zone de texte" />

      <Collapse title="Sécurité" content="Zone de texte" />

    </div>
  );
}

export default APropos;
