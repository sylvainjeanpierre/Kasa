import { Link } from "react-router-dom";
import "../styles/Home.css";
import sloganBackground from "../assets/slogan-background.png";
import apartment from "../datas/logements.json";

function Home() {
  return (
    <main>
      <div className="slogan-container">
        <img
          src={sloganBackground}
          alt="Arrière plan du slogan"
          className="slogan-background"
        />
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </div>
      <section className="gallery">
        {apartment.map((apartment) => (
          <Link to={apartment.id} key={apartment.id} className="apartment-card">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="apartment-card-image"
            />
            <p className="apartment-card-title">{apartment.title}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
