import React from "react";
import "./Footer.css";
import { Link, useParams } from "react-router-dom";
import insta from "../../../public/static/images/Instagram-Icon.png";
import fb from "../../../public/static/images/Facebook_Icon.png";
import youtube from "../../../public/static/images/Youtube-Icon.png";
import twitter from "../../../public/static/images/Twitter-Icon.png";
import linkedin from "../../../public/static/images/LinkedIn-Icon.png";

const Footer = () => {
  const { id } = useParams();
  return (
    <div id="footerMain">
      <div style={{ textAlign: "left", margin: "20px" }}>
        <h3 style={{ display: "inline" }}>FarmCart: </h3>
        <h6 style={{ display: "inline" }}>
          Agri Inputs Marketplace Platform providing Agricultural Products,
          Chemical Pesticides, Organic Insecticides, etc. Our clientele includes
          Farmers, Nurseries, FPOs, NGOs and other Institutional Growers.
        </h6>
      </div>
      <div id="footerSecMain">
        <div className="footerDiv">
          <h5 className="h5">QUICK LINKS</h5>
          <li className="footerLi">
            <Link className="footerLink" to={`/aboutUs/${id}`}>
              About Us
            </Link>
          </li>
          <li className="footerLi">
            <Link className="footerLink" to={`/reachUs/${id}`}>
              Reach Us
            </Link>
          </li>
          <li className="footerLi">
            <Link className="footerLink" to={`/mediaLinks/${id}`}>
              Media Links
            </Link>
          </li>
          <li className="footerLi">
            <Link className="footerLink" to={`/privacyPolicy/${id}`}>
              Privacy Policy
            </Link>
          </li>
        </div>

        <div className="footerDiv">
          <h5 className="h5">CONTACT US</h5>
          <h6>Missed Call To Order: ************</h6>
          <h6>WhatsApp: (+91) **********</h6>
        </div>

        <div className="footerDiv">
          <h5 className="h5">FOLLOW US</h5>

          <a href="#">
            <img className="footerImg" src={insta} alt="instagram" />
          </a>

          <a href="#">
            <img className="footerImg" src={fb} alt="facebook" />
          </a>

          <a href="#">
            <img className="footerImg" src={youtube} alt="youtube" />
          </a>

          <a href="#">
            <img className="footerImg" src={twitter} alt="twitter" />
          </a>

          <a href="#">
            <img className="footerImg" src={linkedin} alt="linkedIn" />
          </a>
        </div>
      </div>
      <div>
        <h5 id="copyright">© 2023 FarmCart.com</h5>
      </div>
    </div>
  );
};

export default Footer;
