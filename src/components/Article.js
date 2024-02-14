import "../styles/Article.css";
import apartments from "../datas/logements.json";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Article() {
  const currentApartmentId = useParams().id;

  const apartment = apartments.filter(function (apartment) {
    return apartment.id === currentApartmentId;
  })[0];

  return (
    <article>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={apartment.cover} />
        </div>
      </Carousel>
      <h1>{apartment.title}</h1>
    </article>
  );
}

export default Article;
