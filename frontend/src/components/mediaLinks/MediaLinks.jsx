import React from "react";
import "./MediaLinks.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MediaLinks = () => {
  return (
    <div>
      <Header />
      <h5 id="mediaHeader">Media Links</h5>
      <div id="mediaDiv">
        <h6>Recent Media Coverage:</h6>

        <div>
          <p className="mediaTxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            exercitationem deserunt distinctio saepe nisi ipsa officia quam
            enim, eligendi pariatur architecto, animi quibusdam, iusto omnis
            corporis dignissimos natus ullam! Excepturi.
          </p>
          <a className="mediaLink" href="#">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </div>

        <div>
          <p className="mediaTxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            exercitationem deserunt distinctio saepe nisi ipsa officia quam
            enim, eligendi pariatur architecto, animi quibusdam, iusto omnis
            corporis dignissimos natus ullam! Excepturi.
          </p>
          <a className="mediaLink" href="#">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </div>

        <div>
          <p className="mediaTxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            exercitationem deserunt distinctio saepe nisi ipsa officia quam
            enim, eligendi pariatur architecto, animi quibusdam, iusto omnis
            corporis dignissimos natus ullam! Excepturi.
          </p>
          <a className="mediaLink" href="#">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaLinks;
