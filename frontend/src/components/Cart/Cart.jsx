import React, { useEffect, useState } from "react";
import "./Cart.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [userData, setUserData] = useState([]);
  let { id } = useParams("id");

  const getUserData = () => {
    axios
      .get(`http://localhost:8090/user/getUserDataById/${id}`)
      .then((data) => {
        setUserData(data.data.data.cart);
        // console.log(userHeaderData);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getUserData();
  }, [userData]);

  const removeFromCart = (data) => {
    // console.log(data);
    axios
      .delete(`http://localhost:8090/user/deleteFromCart/${id}`, {
        data: { id: data },
      })
      .then((result) => {
        if (result.data.status === "Failed") {
          alert(result.data.message);
        } else {
          alert(result.data.status);
        }
        // console.log(result.data);
      })
      .catch((err) => alert(err.toString()));
  };
  const addQtyOfProduct = (data) => {
    axios
      .post(`http://localhost:8090/user/addQtyOfProduct/${id}`, data)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const reduceQtyOfProduct = (data) => {
    // console.log(data);
    axios
      .post(`http://localhost:8090/user/reduceQtyOfProduct/${id}`, data)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <div>
      <Header />
      <div id="cartMain">
        <h1 id="cartHeading">Cart</h1>
        <table id="cartTable">
          {userData.map((ele, i) => (
            <tbody key={i}>
              <tr className="cartTr">
                <td className="cartTd">
                  <img src={ele.img} alt={ele.id} />
                </td>
                <td className="cartTd">
                  <h4>{ele.id}</h4>
                  <h6>
                    {ele.pack} {ele.unit}
                  </h6>
                  <h5>
                    <button
                      onClick={() => addQtyOfProduct(ele)}
                      className="addQtyBtn"
                    >
                      +
                    </button>
                    {ele.quantity}{" "}
                    <button
                      onClick={() => reduceQtyOfProduct(ele)}
                      className="removeQtyBtn"
                    >
                      -
                    </button>
                  </h5>
                </td>
                <td className="cartTd">
                  <h4>₹ {ele.price * ele.quantity}</h4>
                </td>
                <td className="cartTd">
                  <button
                    onClick={() => removeFromCart(ele)}
                    className=" cartRemoveBtn"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
