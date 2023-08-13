import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AllProducts = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const { type } = useParams("type");
  const getProduct = () => {
    axios
      .get(`http://localhost:8090/user/getProduct/${type}`)
      .then((data) => {
        setProductList(data.data.data);
        // console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewProductDetail = (ele) => {
    console.log(ele);
    navigate(`/product-information/${ele.id}`);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Header />
      <div className="allProductOuter">
        {productList.map((ele, i) => (
          <div key={i}>
            <div>
              <img src={ele.img[0]} alt={ele.catogary} />
            </div>
            <h4>{ele.product}</h4>
            <h6>
              ₹{ele.price["100"]} <span>original</span>
            </h6>
            <p>100 ml</p>

            <button onClick={() => viewProductDetail(ele)}>View Product</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
