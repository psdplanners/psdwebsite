import React, { useState } from "react";
import Images from "../../Constants/Images";
import "./overLay.css";

export default function OverLay() {
  const [overLayClass, setOverLayClass] = useState(
    "offcanvas offcanvas-end"
  );
  const [tabIndex, setTabIndex] = useState(-1);
  function hideOverLay() {
    // setTimeout(() => {
    //   setOverLayClass("offcanvas offcanvas-end hidden");
    // }, 10);
    setOverLayClass("offcanvas offcanvas-end hidden");
    // setTabIndex(1)
  }
  return (
    <div
      className={overLayClass}
      tabIndex={tabIndex}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <img
          className="overLayLogo"
          src={Images.logo3}
          target="#Top"
          alt=""
          srcset=""
        />
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => {
            hideOverLay();
          }}
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <h4
                target="#About"
                onClick={() => {
                  hideOverLay();
                }}
                className="overLayText"
              >
                About
              </h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <h4
                target="#Footer"
                onClick={() => {
                  hideOverLay();
                }}
                className="overLayText"
              >
                Contact
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
