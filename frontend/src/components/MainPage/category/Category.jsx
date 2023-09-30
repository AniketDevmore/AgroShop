import React, { useState } from "react";
import "./Category.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import insceticide from "../../../../public/static/images/insecticide.png";
import fungicide from "../../../../public/static/images/fungicide.png";
import pgr from "../../../../public/static/images/pgr.png";
import herbicide from "../../../../public/static/images/herbicide.png";

const Category = () => {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const clickHandle = (data) => {
    navigate(`/product/${id}/${data}`);
  };
  return (
    <div>
      <div className="products">
        <li onClick={() => clickHandle("Insecticide")} className="proList">
          <img src={insceticide} alt="insceticide" />
          <h3>Insecticide</h3>
        </li>
        <li onClick={() => clickHandle("Fungicide")} className="proList">
          <img src={fungicide} alt="fungicide" />
          <h3>Fungicide</h3>
        </li>
        <li onClick={() => clickHandle("PGR")} className="proList">
          <img src={pgr} alt="pgr" />
          <h3>PGR</h3>
        </li>
        <li onClick={() => clickHandle("Herbicide")} className="proList">
          <img src={herbicide} alt="herbicide" />
          <h3>Herbicide</h3>
        </li>
      </div>
    </div>
  );
};

export default Category;
