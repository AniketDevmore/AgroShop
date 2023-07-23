import React from "react";
import "./Brands.css";

const Brands = () => {
  return (
    <div id="mainBrand">
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../images/Syngenta.png"
          alt="syngenta"
        />
      </li>
      <li className="brandLi">
        <img className="brandImg" src="../../../images/Bayer.png" alt="bayer" />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../images/Multiplex.png"
          alt="KAK"
        />
      </li>
      <li className="brandLi">
        <img
          className="brandImg"
          src="../../../images/Dhanuka.png"
          alt="dhanuka"
        />
      </li>
      <li className="brandLi">
        <img className="brandImg" src="../../../images/Tata.png" alt="tata" />
      </li>
    </div>
  );
};

export default Brands;
