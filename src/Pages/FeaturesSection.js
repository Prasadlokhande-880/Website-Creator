import React from "react";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import HeroSection from "../components/FeaturesSection/HeroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";

const Features = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Features;
