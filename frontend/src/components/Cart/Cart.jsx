import React, { useEffect, useState } from "react";
import "./Cart.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [userData, setUserData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
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
        setUserData(data.data.data.cart);
        // console.log(userHeaderData);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getUserData();

    let total = userData.reduce((sum, ele) => {
      return (sum += ele.quantity * ele.price);
    }, 0);
    setSubtotal(total);
    setTax(total * 0.18);
    setTotal(tax + total);
  }, []);

  const removeFromCart = (data) => {
    // console.log(data);
    axios
      .delete(
        `${import.meta.env.VITE_REACT_APP_URL}/user/deleteFromCart/${id}`,
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
      .catch((err) => alert(err.toString()));
  };
  const addQtyOfProduct = (data) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_URL}/user/addQtyOfProduct/${id}`,
        data,
        {
          headers,
        }
      )
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
      .post(
        `${import.meta.env.VITE_REACT_APP_URL}/user/reduceQtyOfProduct/${id}`,
        data,
        {
          headers,
        }
      )
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  //checkout
  const checkoutHandler = () => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_URL}/user/addToOrder/${id}`,
        userData,
        {
          headers,
        }
      )
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        alert(err.toString());
      });

    alert(`Your order has placed of ₹${total}`);
  };

  return (
    <div>
      <Header />
      {userData.length === 0 ? (
        <h4 style={{ margin: "100px" }}>Your cart is currently empty.</h4>
      ) : (
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
          {/* checkout section */}
          <div className="totalCheckout">
            <h5>Subtotal: ₹{subtotal}</h5>
            <h5>Tax: ₹{tax}</h5>
            <h5>Total: ₹{total}</h5>
            <button className="btn btn-success" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
