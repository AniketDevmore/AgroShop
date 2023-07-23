import React from "react";
import "./MainPage.css";
import MainPageCarousel from "./carosel/MainPageCarousel";
import Coupans from "./coupans/Coupans";
import Brands from "./brands/Brands";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Category from "./category/Category";

const MainPage = () => {
  return (
    <div id="sidebar">
      <div>
        <Header />
        <Category />
      </div>
      <div>
        <MainPageCarousel />
      </div>
      <div style={{ padding: "15px" }}>
        <h2>Coupons For You</h2>
        <Coupans />
      </div>
      <div style={{ padding: "15px" }}>
        <h2>Brands</h2>
        <Brands />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
