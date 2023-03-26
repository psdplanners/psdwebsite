import React from "react";
import Images from "../../Constants/Images";
import "./splash.css";
export default function SplashScreen() {
  return (
    <div className="splash">
        <img className="logoImage" src={Images.logo3} alt="PSD" srcset="" />
    </div>
  );
}
