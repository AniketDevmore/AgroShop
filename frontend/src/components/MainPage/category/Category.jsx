import React, { useState } from "react";
import "./Category.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
          <img src="../../../images/insecticide.png" alt="insceticide" />
          <h3>Insecticide</h3>
        </li>
        <li onClick={() => clickHandle("Fungicide")} className="proList">
          <img src="../../../images/fungicide.png" alt="fungicide" />
          <h3>Fungicide</h3>
        </li>
        <li onClick={() => clickHandle("PGR")} className="proList">
          <img src="../../../images/pgr.png" alt="pgr" />
          <h3>PGR</h3>
        </li>
        <li onClick={() => clickHandle("Herbicide")} className="proList">
          <img src="../../../images/herbicide.png" alt="herbicide" />
          <h3>Herbicide</h3>
        </li>
      </div>
    </div>
  );
};

export default Category;
