import React from "react";
import HeroSection from "../Hero/HeroSection";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Services from "../Service/Service";
import Navbar from "../Hero/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
