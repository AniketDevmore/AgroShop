import React from "react";
import "./Admin.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();
  const adminLogoutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div id="adminMainDiv">
        <ul id="adminUl">
          <li className="adminLi">
            <Link to={"/adminPage/:id/addProduct"} className="link" href="">
              Add Product
            </Link>
          </li>
          <li className="adminLi">
            <Link to={"/adminPage/:id/removeProduct"} className="link" href="">
              Remove Product
            </Link>
          </li>
          <li className="adminLi">
            <Link to={"/adminPage/:id/editProduct"} className="link" href="">
              Edit Product
            </Link>
          </li>
          <li className="adminLi">
            <Link to={"/adminPage/:id/editOrder"} className="link" href="">
              Edit Order
            </Link>
          </li>
          <li className="adminLi">
            <Link to={"/adminPage/:id/cancelOrder"} className="link" href="">
              Cancel Order
            </Link>
          </li>
          <li className="adminLi">
            <button className="btn btn-danger" onClick={adminLogoutHandler}>
              LogOut
            </button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
