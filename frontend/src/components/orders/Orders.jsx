import React, { useEffect, useState } from "react";
import "./Orders.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Orders = () => {
  const [order, setOrder] = useState([]);
  let { id } = useParams("id");
  const headers = {
    token: sessionStorage.getItem("token"),
  };

  const getOrder = () => {
    axios
      .get(`http://localhost:8090/user/getOrders/${id}`, { headers })
      .then((data) => {
        // console.log(data.data.orders);
        setOrder(data.data.orders);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getOrder();
  }, [order]);
  return (
    <div>
      <Header />
      <div id="orderMain">
        <h1 id="orderHeading">Order History</h1>
        <table id="orderTable">
          <tbody>
            {order.map((ele, i) => (
              <tr className="orderTr" key={i}>
                <td className="orderImg">
                  <img src={ele.img} alt={ele.img} />
                </td>
                <td className="orderTd">
                  <h4>{ele.id}</h4>
                  <p>
                    {ele.pack} {ele.unit}
                  </p>
                  <p>{ele.quantity} unit</p>
                </td>
                <td className="orderTd">
                  <h5>
                    {" "}
                    ₹{" "}
                    {ele.price * ele.quantity * 0.18 + ele.price * ele.quantity}
                  </h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
