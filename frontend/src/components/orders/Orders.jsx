import React from "react";
import "./Orders.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Orders = () => {
  return (
    <div>
      <Header />
      <div id="orderMain">
        <h1 id="orderHeading">Order History</h1>
        <table id="orderTable">
          <tbody>
            <tr className="orderTr">
              <td className="orderTd">img</td>
              <td className="orderTd">
                <h6>name</h6>
                <p>size</p>
                <p>quantity</p>
              </td>
              <td className="orderTd">total</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
