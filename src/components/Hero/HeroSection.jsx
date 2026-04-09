import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="flex-1 text-white flex items-center justify-center">
        <Content />
      </div>    
    </div>
  );
};

export default HeroSection;
