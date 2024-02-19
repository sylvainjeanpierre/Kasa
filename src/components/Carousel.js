import "../styles/Carousel.css";
import React, { useState } from "react";
import prevArrow from "../assets/prev-arrow.png";
import nextArrow from "../assets/next-arrow.png";

function Carousel(props) {
  const pictures = props.pictures;
  const nbPictures = pictures.length;
  const title = props.title;

  const [id, setId] = useState(0);

  function pictureSelector() {
    if (id === nbPictures - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  }

  function pictureSelectorReverse() {
    if (id === 0) {
      setId(nbPictures - 1);
    } else {
      setId(id - 1);
    }
  }

  return (
    <div className="carousel">
      <img key={id} src={pictures[id]} alt={title} className="picture" />
      <img
        src={prevArrow}
        alt="Bouton précédent"
        className="btn-prev"
        onClick={pictureSelectorReverse}
      />
      <p className="img-indicator">{`${id + 1}/${nbPictures}`}</p>
      <img
        src={nextArrow}
        alt="Bouton suivant"
        className="btn-next"
        onClick={pictureSelector}
      />
    </div>
  );
}

export default Carousel;
