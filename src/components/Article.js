import "../styles/Article.css";
import apartments from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Rating from "./Rating";

function Article() {
  const currentApartmentId = useParams().id;

  const apartment = apartments.filter(function (apartment) {
    return apartment.id === currentApartmentId;
  })[0];

  return (
    <article>
      {apartment.pictures.length > 1 ? (
        <Carousel pictures={apartment.pictures} title={apartment.title} />
      ) : (
        <img
          src={apartment.pictures}
          alt={apartment.title}
          className="single-picture"
        />
      )}

      <div className="apartement-infos">
        <div className="title-and-location">
          <h1 className="title">{apartment.title}</h1>
          <p className="location">{apartment.location}</p>
        </div>

        <div className="host">
          <p className="host-name">{apartment.host.name}</p>
          <img
            src={apartment.host.picture}
            alt={apartment.host.name}
            className="host-image"
          />
        </div>

        <div className="tags-section">
          {apartment.tags.map((tag) => (
            <p className="tag">{tag}</p>
          ))}
        </div>

        <div className="rating-section">
          <Rating rate={apartment.rating} />
        </div>

        <div className="description-section">
          <details className="details-article">
            <summary>Description</summary>
            <p className="description">{apartment.description}</p>
          </details>
        </div>

        <div className="equipements-section">
          <details className="details-article">
            <summary>Equipements</summary>
            {apartment.equipments.map((equipement) => (
              <p className="equipement">{equipement}</p>
            ))}
          </details>
        </div>
      </div>
    </article>
  );
}

export default Article;
