import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <div className="products">
        <li className="proList">
          <img src="../../../images/insecticide.png" alt="insceticide" />
          <h3>Insecticide</h3>
        </li>
        <li className="proList">
          <img src="../../../images/fungicide.png" alt="fungicide" />
          <h3>Fungicide</h3>
        </li>
        <li className="proList">
          <img src="../../../images/pgr.png" alt="pgr" />
          <h3>PGR</h3>
        </li>
        <li className="proList">
          <img src="../../../images/herbicide.png" alt="herbicide" />
          <h3>Herbicide</h3>
        </li>
      </div>
    </div>
  );
};

export default Category;
