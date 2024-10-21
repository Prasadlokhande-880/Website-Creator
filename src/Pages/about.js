import React from "react";
import HeroSection from "../components/about/heroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import { MasonryGridGallery } from "../components/about/gridGalery";
import MyTeam from "../components/about/myTeam";
import { FeaturesSectionDemo } from "../components/about/features";
import { MovingCards } from "../components/about/movingCards";
import VisionMission from "../components/about/VisionMission";

const about = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MasonryGridGallery />
      {/* <MovingCards /> */}
      <VisionMission />
      <MyTeam />
      <FeaturesSectionDemo />
      <Footer />
    </div>
  );
};

export default about;
