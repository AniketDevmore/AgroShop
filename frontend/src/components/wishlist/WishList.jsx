import React from "react";
import "./WishList.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const WishList = () => {
  return (
    <div>
      <Header />
      <div id="wishMain">
        <h2 id="wishListHeading">Wishlist</h2>
        <div id="wishList">
          <div id="wishListInner">
            <img id="wishImg" />
            <h6 id="wishName">name</h6>
            <p id="wishQty">qty</p>
            <p id="wishPrice">price</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
