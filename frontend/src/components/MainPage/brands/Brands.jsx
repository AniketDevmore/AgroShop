import React from "react";
import "./Brands.css";

const Brands = () => {
  return (
    <div id="mainBrand">
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../public/static/images/Syngenta.png"
          alt="syngenta"
        />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../public/static/images/Bayer.png"
          alt="bayer"
        />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../public/static/images/Multiplex.png"
          alt="KAK"
        />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../public/static/images/Dhanuka.png"
          alt="dhanuka"
        />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../public/static/images/Tata.png"
          alt="tata"
        />
      </li>
    </div>
  );
};

export default Brands;
