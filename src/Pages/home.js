import React from "react";
import Navbar from "../components/home/navBar";
import HeroSection from "../components/home/herosection";
import { BentoGridSecondDemo } from "../components/home/benefits";
import { TimelineDemo } from "../components/home/timeline";
import Footer from "../components/home/footer";

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BentoGridSecondDemo />
      <TimelineDemo />
      <Footer />
    </div>
  );
};

export default home;
