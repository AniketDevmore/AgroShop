import React from "react";
import "./Cart.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Cart = () => {
  return (
    <div>
      <Header />
      <div id="cartMain">
        <h1 id="cartHeading">Cart</h1>
        <table id="cartTable">
          <tbody>
            <tr className="cartTr">
              <td className="cartTd">img</td>
              <td className="cartTd">
                <h6>name</h6>
                <p>size</p>
                <p>quantity</p>
              </td>
              <td className="cartTd">total</td>
              <td className="cartTd">
                <button className=" cartRemoveBtn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
