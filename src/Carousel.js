import React from "react";
import Mensajes from "./Mensajes";
import one from "./1.jpeg"
import two from "./2.jpeg"
import three from "./3.jpeg"
import four from "./4.jpeg"
import Gift from "./Gift";


const Carousel = () => {
  return (
    <div className="d-flex container-fluid msg_holder p-0 bg-text1">
      <div
        id="carouselExampleInterval "
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item text-center active" data-bs-interval="3000">
          <span className="text-white gx-0">
            <Mensajes />
            </span>
          </div>
          <div className="carousel-item text-center" data-bs-interval="2000">
            <img
              src={one}
              className="d-block carousel_img"
              alt="Jose y Marta"
            />
          </div>
          <div className="carousel-item text-center" data-bs-interval="2000">
            <img
              src={two}
              className="d-block carousel_img "
              alt="Jose y Marta"
            />
          </div>
          <div className="carousel-item text-center" data-bs-interval="2000">
            <img
              src={three}
              className="d-block carousel_img"
              alt="Jose y Marta"
            />
          </div>
          <div className="carousel-item text-center" data-bs-interval="2000">
            <img
              src={four}
              className="d-block carousel_img"
              alt="Jose y Marta"
            />
          </div>
          <div className="carousel-item text-center" data-bs-interval="20000">
            <Gift/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
