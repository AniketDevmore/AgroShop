import React from "react";

const MainPageCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="4000"
            style={{ height: "400px", maxWidth: "100%", margin: " auto" }}
          >
            <img
              style={{ height: "100%", maxWidth: "100%", margin: "5px auto" }}
              src="../../../images/carosel1.jpg"
              className="d-block w-100"
              alt="carosel1"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            style={{ height: "400px", maxWidth: "100%", margin: " auto" }}
          >
            <img
              style={{ height: "100%", maxWidth: "100%", margin: "5px auto" }}
              src="../../../images/carosel2.jpg"
              className="d-block w-100"
              alt="carosel2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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
  );
};

export default MainPageCarousel;
