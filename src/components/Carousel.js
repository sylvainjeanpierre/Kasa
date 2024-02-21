import "../styles/Carousel.scss";
import React, { useState, useEffect } from "react";
import prevArrow from "../assets/prev-arrow.png";
import nextArrow from "../assets/next-arrow.png";

// image preload for lazy loading
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      console.log("PRELOAD");

      if (isCancelled) {
        return;
      }

      const imagesPromiseList = [];
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
}

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

  const { imagesPreloaded } = useImagePreloader(pictures);

  if (!imagesPreloaded) {
    console.log("Not finish to load images");
  } else {
    console.log("All images are loaded");
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
