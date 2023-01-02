import "./FooterStyles.css";

import React from 'react'

import {
    FaHome,
    FaPhone,
    FaLinkedin,
    FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                    <div>
                        <p>Houston</p>
                        <p>Texas</p>
                    </div>
                </div>
                <div className="phone" >
                    <h4>
                        <FaPhone
                        size={20}
                        style={{ color: "white", marginRight: "2rem" }}
                        />
                        832-887-5207
                    </h4>
                </div>
                
            </div>
            <div className="right">
            <h4>About the Developer</h4>
            <p>
            This is Robert Barnes. I enjoy building projects and editing videos in my spare time!
            </p>
            <div className="social">
            <FaMailBulk
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;