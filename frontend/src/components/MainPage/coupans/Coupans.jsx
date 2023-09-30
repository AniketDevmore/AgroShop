import React from "react";
import "./Coupans.css";
import coupan1 from "../../../../public/static/images/coupan1.png";
import coupan2 from "../../../../public/static/images/coupan2.png";
import coupan3 from "../../../../public/static/images/coupan3.png";

const Coupans = () => {
  return (
    <div id="main">
      <li className="cupLi">
        <img className="coupan" src={coupan1} alt="coupan1" />
      </li>
      <li className="cupLi">
        <img className="coupan" src={coupan2} alt="coupan2" />
      </li>

      <li className="cupLi">
        <img className="coupan" src={coupan3} alt="coupan3" />
      </li>
    </div>
  );
};

export default Coupans;
