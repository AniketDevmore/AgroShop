import React from "react";
import "./ReachUs.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const ReachUs = () => {
  return (
    <div>
      <Header />
      <div id="reachHeadDiv">
        <h5 id="reachHead">Get in touch</h5>
        <p id="reachHeadpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          voluptatibus aperiam adipisci! Labore inventore adipisci ipsum natus
          perferendis deserunt, ad, rerum beatae doloremque atque iste quidem
          fugit dolorem officiis eligendi.
        </p>
      </div>
      <div id="form">
        <h5 id="formTitle">Contact us</h5>
        <div className="formDiv">
          <label className="formLabel" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="formInput"
            name="name"
            type="text"
            autoComplete="on"
            required
          />
        </div>
        <div className="formDiv">
          <label className="formLabel" htmlFor="email">
            Eamil
          </label>
          <br />
          <input
            className="formInput"
            name="email"
            type="email"
            autoComplete="on"
            required
          />
        </div>
        <div className="formDiv">
          <label className="formLabel" htmlFor="name">
            Message
          </label>
          <br />
          <textarea
            className="formInput"
            name="message"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <button className="formBtn btn btn-dark">Send</button>
      </div>
      <Footer />
    </div>
  );
};

export default ReachUs;
