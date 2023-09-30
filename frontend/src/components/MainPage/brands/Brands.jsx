import React from "react";
import "./Brands.css";
import syngenta from "../../../../public/static/images/Syngenta.png";
import bayer from "../../../../public/static/images/Bayer.png";
import multiplex from "../../../../public/static/images/Multiplex.png";
import dhanuka from "../../../../public/static/images/Dhanuka.png";
import tata from "../../../../public/static/images/Tata.png";

const Brands = () => {
  return (
    <div id="mainBrand">
      <li className="brandLi">
        <img className="brandImg" src={syngenta} alt="syngenta" />
      </li>
      <li className="brandLi">
        <img className="brandImg" src={bayer} alt="bayer" />
      </li>
      <li className="brandLi">
        <img className="brandImg" src={multiplex} alt="KAK" />
      </li>
      <li className="brandLi">
        <img className="brandImg" src={dhanuka} alt="dhanuka" />
      </li>
      <li className="brandLi">
        <img className="brandImg" src={tata} alt="tata" />
      </li>
    </div>
  );
};

export default Brands;
