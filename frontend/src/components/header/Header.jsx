import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
  let [userHeaderData, setUserHeaderData] = useState({});
  let { id } = useParams("id");

  const getUserData = () => {
    axios
      .get(`http://localhost:8090/user/getUserDataById/${id}`)
      .then((data) => {
        setUserHeaderData(data.data.data);
        // console.log(userHeaderData);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getUserData();
  }, [userHeaderData]);
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
                <span id="cartIteams">
                  {userHeaderData.cart == undefined
                    ? 0
                    : userHeaderData.cart.length}
                </span>{" "}
                Cart
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
