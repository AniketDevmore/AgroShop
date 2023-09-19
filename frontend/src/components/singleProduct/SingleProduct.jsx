import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [productData, setProductData] = useState([]);
  const [packPrice, setPackPrice] = useState({
    pack: "",
    price: 0,
    original: 0,
    unit: "",
  });

  const { pro } = useParams("pro");
  const { id } = useParams("id");
  const headers = {
    token: sessionStorage.getItem("token"),
  };

  const getProductData = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_URL}/user/getProductData/${pro}`, { headers })
      .then((data) => {
        setProductData(data.data.data);
        // console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  const pricePackHandler = (pack, price, original, unit) => {
    // console.log(pack, price, original);
    setPackPrice({ pack: pack, price: price, original: original, unit: unit });
  };

  // add to cart button function
  const addToCartHandler = (data) => {
    // console.log(data);

    let newData = {};
    newData.id = data.id;
    newData.catogary = data.catogary;
    newData.quantity = 1;
    newData.img = data.img[0];
    newData.pack = packPrice.pack;
    newData.price = packPrice.price;
    newData.unit = packPrice.unit;
    // console.log(newData);

    axios
      .post(`${import.meta.env.VITE_REACT_APP_URL}/user/addToCart/${id}`, newData, { headers })
      .then((result) => {
        if (result.data.status === "Failed") {
          alert(result.data.message);
        } else {
          alert(result.data.status);
        }
        // console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  // add to wishlist handler
  const addToWishHandler = (data) => {
    // console.log(data);

    let newData = {};
    newData.id = data.id;
    newData.catogary = data.catogary;
    newData.quantity = 1;
    newData.img = data.img[0];
    newData.pack = packPrice.pack;
    newData.price = packPrice.price;
    newData.unit = packPrice.unit;

    // console.log(newData);

    axios
      .post(`${import.meta.env.VITE_REACT_APP_URL}/user/addToWishlist/${id}`, newData, {
        headers,
      })
      .then((result) => {
        if (result.data.status === "Failed") {
          alert(result.data.message);
        } else {
          alert(result.data.status);
        }
        // console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

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
                  Price: ₹{" "}
                  {packPrice.price > 0 ? packPrice.price : ele.details[0][1]}{" "}
                  <span>
                    ₹{" "}
                    {packPrice.original > 0
                      ? packPrice.original
                      : ele.details[1][1]}
                  </span>
                </h5>
                <h6>
                  Packing:{" "}
                  {packPrice.pack > 0 ? packPrice.pack : ele.details[2][1]}{" "}
                  {ele.unit}
                </h6>
              </div>
              {/* Object.keys(ele.details["1"]).length */}

              {/* price section */}
              <div className="singleProPriceBox">
                {ele.details[2][1] ? (
                  <div
                    style={
                      packPrice.price === ele.details[0][1]
                        ? { border: "3px solid rgb(32, 107, 44)" }
                        : {}
                    }
                    onClick={() =>
                      pricePackHandler(
                        ele.details[2][1],
                        ele.details[0][1],
                        ele.details[1][1],
                        ele.unit
                      )
                    }
                  >
                    <h4>
                      {ele.details[2][1]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][1]}</h4>
                  </div>
                ) : (
                  <></>
                )}

                {ele.details[2][2] ? (
                  <div
                    style={
                      packPrice.price === ele.details[0][2]
                        ? { border: "3px solid rgb(32, 107, 44)" }
                        : {}
                    }
                    onClick={() =>
                      pricePackHandler(
                        ele.details[2][2],
                        ele.details[0][2],
                        ele.details[1][2],
                        ele.unit
                      )
                    }
                  >
                    <h4>
                      {ele.details[2][2]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][2]}</h4>
                  </div>
                ) : (
                  <></>
                )}

                {ele.details[2][3] ? (
                  <div
                    style={
                      packPrice.price === ele.details[0][3]
                        ? { border: "3px solid rgb(32, 107, 44)" }
                        : {}
                    }
                    onClick={() =>
                      pricePackHandler(
                        ele.details[2][3],
                        ele.details[0][3],
                        ele.details[1][3],
                        ele.unit
                      )
                    }
                  >
                    <h4>
                      {ele.details[2][3]} {ele.unit}
                    </h4>
                    <h4>₹{ele.details[0][3]}</h4>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {packPrice.price > 0 ? (
                <div className="singleProBtn">
                  <button onClick={() => addToCartHandler(ele)}>
                    Add To Cart
                  </button>
                  <button onClick={() => addToWishHandler(ele)}>
                    Add To Wishlist
                  </button>
                </div>
              ) : (
                <p>Please Seletct Above Packing Size.</p>
              )}
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
