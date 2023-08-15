import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [productData, setProductData] = useState([]);

  const { pro } = useParams("pro");

  const getProductData = () => {
    axios
      .get(`http://localhost:8090/user/getProductData/${pro}`)
      .then((data) => {
        setProductData(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div>
      <Header />
      <div>
        {productData.map((ele, i) => (
          <div key={i} className="singleProMain">
            <div className="singleProImg">
              <img src={ele.img[0]} alt={ele.id} />
            </div>
            <div className="singleProPrice">
              <div>
                <h1>{ele.id}</h1>
                <h5>
                  Price: ₹ {ele.details[0]["1"]}{" "}
                  <span>₹ {ele.details[1]["1"]}</span>
                </h5>
                <h6>
                  Packing: {ele.details[2][1]} {ele.unit}
                </h6>
              </div>
              {/* Object.keys(ele.details["1"]).length */}

              {/* price section */}
              <div className="singleProPriceBox">
                {ele.details[2][1] ? (
                  <div>
                    <h4>
                      {ele.details[2][1]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][1]}</h4>
                  </div>
                ) : (
                  <></>
                )}

                {ele.details[2][2] ? (
                  <div>
                    <h4>
                      {ele.details[2][2]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][2]}</h4>
                  </div>
                ) : (
                  <></>
                )}

                {ele.details[2][3] ? (
                  <div>
                    <h4>
                      {ele.details[2][3]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][3]}</h4>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="singleProBtn">
                <button>Add To Cart</button>
                <button>Add To Wishlist</button>
              </div>
            </div>

            <div className="singleProDescrip">
              <h3>Description</h3>
              <p>{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
