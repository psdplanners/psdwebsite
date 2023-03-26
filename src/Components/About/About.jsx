import React, { Fragment } from "react";
import Images from "../../Constants/Images";
import "./About.css";
const About = () => {
  const content =
    "PSD & Planners is a professional and experienced \
  structural consultancy firm that specializes in providing high-quality \
  services in the fields of structural and architectural design. \
  With a team of skilled and knowledgeable professionals, the \
  company is committed to delivering innovative solutions tailored \
  to the specific needs of their clients. In addition to their\
  design services, PSD & Planners also offers civil construction\
  services for both residential and commercial projects. Their\
  expertise and attention to detail ensure that all projects are\
  completed to the highest standards of quality and safety.";
  return (
    <Fragment>
      <div className="aboutUs" id="About">
        <div className="card">
          <img src={Images.apartment2} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <img src={Images.line} className="card-img-top" alt="..."></img>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
