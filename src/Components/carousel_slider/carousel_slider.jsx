import React from "react";
import Images from "../../Constants/Images";
import "./carousel.css";

const CarouselSlider = () => {
  return (
    <div>
      <div className="car-container">
        <div
          id="carouselExampleRide"
          className="carousel slide carousel-fade"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Images.image1} className="carous-image" alt="Logo" />
            </div>
            <div className="carousel-item">
              <img src={Images.image2} className="carous-image" alt="Logo" />
            </div>
            <div className="carousel-item">
              <img
                src={Images.apartment1}
                className="carous-image"
                alt="Logo"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Images.apartment3}
                className="carous-image"
                alt="Logo"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Images.discussion}
                className="carous-image"
                alt="Logo"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CarouselSlider;
