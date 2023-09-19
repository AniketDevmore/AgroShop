import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";

export const Account = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserdata] = useState({});
  const headers = {
    token: sessionStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_URL}/user/getUserDataById/${id}`, {
        headers,
      })
      .then((data) => {
        // console.log(data.data.data);
        setUserdata(data.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);

  const logOutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ marginBottom: "0" }}>
      <Header />
      <div id="accountMain">
        <table id="table">
          <tbody>
            <tr className="tableRow">
              <td className="th">Name:</td>
              <td>{userData.firstName + " " + userData.lastName}</td>
            </tr>
            <tr className="tableRow">
              <td className="th">Email:</td>
              <td>{userData.email}</td>
            </tr>
            <tr className="tableRow">
              <td className="th">Orders:</td>
              <td>
                <Link id="orders" to={`/orders/${id}`}>
                  Orders
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="logout btn btn-danger" onClick={logOutHandler}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};
