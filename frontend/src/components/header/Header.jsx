import React from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const profileData = useSelector((state) => state.counter.profile);
  let { id } = useParams("id");
  return (
    <div>
      <header>
        <marquee id="marquee">Free Delivery on Orders Above Rs. 999/-</marquee>
      </header>
      <nav id="nav">
        <ul id="navUl">
          <div id="logo">
            <Link id="logoLink" to={`/mainPage/${id}`}>
              FarmCart
            </Link>
          </div>
          <div id="mainNav">
            <li id="navLi">
              <Link className="navLink" to={`/wishlist/${id}`}>
                <i className="fa-solid fa-heart"></i> Wishlist
              </Link>
            </li>
            <li id="navLi">
              <Link className="navLink" to={`/account/${id}`}>
                <i className="fa-solid fa-user"></i> Login
              </Link>
            </li>
            <li>
              <Link className="navLink" to={`/cart/${id}`}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span id="cartIteams">{10}</span> Cart
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
