import "./HeroImgStyles.css";
import React from 'react'

import { Link } from "react-router-dom";
import IntroImg from "../assets/zack.jpg";

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="ZackImg" />
      </div>
      <div className='content'>
        <p>Hello, I AM A STUDENT OF CODING.</p>
        <h1>FullStack Web Developer</h1>
        <div>
        <Link to="/project" className='btn'>
          Projects
        </Link>
        <Link to="/contact" className='btn btn-light'>
          Contact
        </Link>
        </div>
      </div>
    </div>
  )
};

export default HeroImg;