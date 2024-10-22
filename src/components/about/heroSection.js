import React from "react";
import "./heroSection.css";
import Img1 from "../../assets/images/dragon_1.jpg";
import Img2 from "../../assets/images/dragon_2.jpg";
import Img3 from "../../assets/images/dragon_3.jpg";
import Img4 from "../../assets/images/dragon_4.jpg";
import Img5 from "../../assets/images/dragon_5.jpg";
import Img6 from "../../assets/images/dragon_6.jpg";
import Img7 from "../../assets/images/dragon_7.jpg";
import Img8 from "../../assets/images/dragon_8.jpg";
import Img9 from "../../assets/images/dragon_9.jpg";
import Img10 from "../../assets/images/dragon_10.jpg";

const HeroSection = (props) => {
  const {
    hero_heading,
    hero_section_multiline_heading,
    hero_section_images,
    hero_section_background_images,
  } = props.data;

  // Fallback images in case props are null
  const images = [
    hero_section_images?.hero_section_image_1?.url || Img1,
    hero_section_images?.hero_section_image_2?.url || Img2,
    hero_section_images?.hero_section_image_3?.url || Img3,
    hero_section_images?.hero_section_image_4?.url || Img4,
    hero_section_images?.hero_section_image_5?.url || Img5,
    hero_section_images?.hero_section_image_6?.url || Img6,
    hero_section_images?.hero_section_image_7?.url || Img7,
    hero_section_images?.hero_section_image_8?.url || Img8,
    hero_section_images?.hero_section_image_9?.url || Img9,
    hero_section_images?.hero_section_image_10?.url || Img10,
  ];

  return (
    <div className="banner mt-6">
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((img, index) => (
          <div className="item" key={index} style={{ "--position": index + 1 }}>
            <img src={img} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <h1 data-content={hero_heading || "CSS ONLY"}>
          {hero_heading || "CSS ONLY"}
        </h1>
        <p>Subscribe to the channel to watch many interesting videos</p>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default HeroSection;
