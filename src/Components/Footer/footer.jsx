import React from "react";
import "./Footer.css";
import Images from "../../Constants/Images";
const Footer = () => {
  return (
    <div className="app__footer row" id="Footer">
      <div className="footerImageClass col-3">
        <img className="footerImage" src={Images.logo3} alt="" />
      </div>
      <div className="col-5"></div>
      <div className="contactUs col-4">
        <h1>Contact Us</h1>
        <p>P PRASANTH</p>
        <p>6-17, main Street</p>
        <p>Dharmavaram, srikakulam</p>
        <p>A.P - 532408</p>
        <p>Email: email@email.com</p>
      </div>
    </div>
  );
};

export default Footer;
