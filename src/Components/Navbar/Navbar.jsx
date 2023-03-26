import React, { useState } from "react";
import Images from "../../Constants/Images";
import OverLay from "../overLay/overLay";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="Top">
      <nav className="navbar bg-body-tertiary">
        <div className="logo-space">
          <img className="navLogo" src={Images.logo3} alt="" srcset="" />
        </div>
        <button
          className="navbar-toggler nav-toggle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <OverLay></OverLay>
      </nav>
    </div>
  );
};

export default Navbar;
