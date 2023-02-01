import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React2 from "../assets/8ff141f6_1.png";
// import React1 from "../assets/react2.webp";



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who is this Developer?</h1>
            <p>
                I am a Full Stack Web Developer. I create web applications that capture my clients true intentions and aspirations
            </p>
            <Link to="/contact">
              <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
          {/* <div className="img-container">
            <img src={React1} className="img" alt="true" />
          </div> */}
          <div className="img-stack-bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
  );
};

export default AboutContent;