import React from "react";
import "./AboutUs.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Brands from "../MainPage/brands/Brands";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div id="aboutMain">
        <h5 id="title">WHO WE ARE</h5>
        <div id="aboutSub">
          <h6 id="moto">"Let's Grow Together"</h6>
          <p id="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolorum illo molestiae odio facilis maxime! Iusto veritatis ducimus
            ipsa corrupti expedita labore blanditiis. Ex officiis iste, hic quos
            maiores omnis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi nobis molestiae a, recusandae deleniti inventore
            aspernatur laudantium cumque sunt ut perferendis nihil omnis iure
            debitis molestias illo impedit aliquam! Rerum!
          </p>

          <h4>Leadership Team</h4>
          <div className="founderDiv">
            <li className="founderLi">
              <img
                className="aboutImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Co-Founder & CEO</figcaption>
            </li>
            <li className="founderLi">
              <img
                className="aboutImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">
                Co-Founder & Director
              </figcaption>
            </li>
            <li className="founderLi">
              <img
                className="aboutImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Co-Founder & VP</figcaption>
            </li>
            <li className="founderLi">
              <img
                className="aboutImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Technology Leader</figcaption>
            </li>
          </div>

          <h4>Advisers & Directors</h4>
          <div className="founderDiv">
            <li className="founderLi">
              <img
                className="adImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Director</figcaption>
            </li>
            <li className="founderLi">
              <img
                className="adImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Director</figcaption>
            </li>
            <li className="founderLi">
              <img
                className="adImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Adviser</figcaption>
            </li>
            <li className="founderLi">
              <img
                className="adImg"
                src="https://brandmark.io/intro/info.png"
                alt="img"
              />
              <h6>NAME NAME</h6>
              <figcaption className="aboutFigCap">Adviser</figcaption>
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
