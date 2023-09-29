import React from "react";
import "./Coupans.css";

const Coupans = () => {
  return (
    <div id="main">
      <li className="cupLi">
        <img
          className="coupan"
          src="../../../public/static/images/coupan1.png"
          alt="coupan1"
        />
      </li>
      <li className="cupLi">
        <img
          className="coupan"
          src="../../../public/static/images/coupan2.png"
          alt="coupan2"
        />
      </li>

      <li className="cupLi">
        <img
          className="coupan"
          src="../../../public/static/images/coupan3.png"
          alt="coupan3"
        />
      </li>
    </div>
  );
};

export default Coupans;
