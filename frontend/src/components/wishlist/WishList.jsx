import React, { useEffect, useState } from "react";
import "./WishList.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const WishList = () => {
  let [userData, setUserData] = useState([]);
  let { id } = useParams("id");
  const headers = {
    token: sessionStorage.getItem("token"),
  };

  const getUserData = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_URL}/user/getUserDataById/${id}`, {
        headers,
      })
      .then((data) => {
        setUserData(data.data.data.wishlist);
        // console.log(userData);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const addToCartHandler = (data) => {
    // console.log(data);
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_URL}/user/addToCart/${id}`,
        data,
        { headers }
      )
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

  const removeFromWishlist = (data) => {
    axios
      .delete(
        `${import.meta.env.VITE_REACT_APP_URL}/user/deleteFromWishlist/${id}`,
        {
          data: { id: data },
          headers: headers,
        }
      )
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
      {userData.length === 0 ? (
        <h4 style={{ margin: "100px" }}>Your wishlist is currently empty.</h4>
      ) : (
        <div id="wishMain">
          <h2 id="wishListHeading">Wishlist</h2>
          <div id="wishList">
            {userData.map((ele, i) => (
              <div key={i} id="wishListInner">
                <img id="wishImg" src={ele.img} alt={ele.id} />
                <h6 id="wishName">{ele.id}</h6>
                <h6 id="wishQty">
                  {ele.pack} {ele.unit}
                </h6>
                <h6 id="wishPrice">₹{ele.price}</h6>
                <button onClick={() => addToCartHandler(ele)}>
                  Add To Cart
                </button>
                <button onClick={() => removeFromWishlist(ele)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default WishList;
