import "../styles/Article.scss";
import apartments from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Rating from "./Rating";
import PageError from "./PageError";

function Article() {
  const currentApartmentId = useParams().id;

  const apartment = apartments.filter(function (apartment) {
    return apartment.id === currentApartmentId;
  })[0];

  if (apartment !== undefined) {
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
              <p key={tag} className="tag">
                {tag}
              </p>
            ))}
          </div>

          <div className="rating-section">
            <Rating rate={apartment.rating} />
          </div>

          <input id="description__input" type="checkbox" />
          <label htmlFor="description__input"> Description</label>
          <p className="description__details">{apartment.description}</p>

          <input id="equipements__input" type="checkbox" />
          <label htmlFor="equipements__input"> Equipement</label>
          <div className="equipements__details">
            {apartment.equipments.map((equipement) => (
              <p className="equipements__detail" key={equipement}>
                {equipement}
              </p>
            ))}
          </div>
        </div>
      </article>
    );
  } else {
    return <PageError codeError="404" />;
  }
}

export default Article;
