import "../styles/Main.css";
import sloganBackground from "../assets/slogan-background.png";
import apartment from "../datas/logements.json";

function Main() {
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
          <div key={apartment.id} onClick className="apartment-card">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="apartment-card-image"
            />
            <p className="apartment-card-title">{apartment.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
