import React, { useEffect, useRef } from "react";
import "./heroSection.css"; // Assuming you have your CSS separately
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";

const HeroSection = (data) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const runTimeOut = useRef(null);
  const runNextAuto = useRef(null);

  useEffect((data) => {
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;

    if (
      !carouselDom ||
      !sliderDom ||
      !thumbnailBorderDom ||
      !nextDom ||
      !prevDom
    ) {
      return; // Early exit if any DOM elements are not available yet
    }

    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (sliderItemsDom.length > 0 && thumbnailItemsDom.length > 0) {
        if (type === "next") {
          sliderDom.appendChild(sliderItemsDom[0]);
          thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
          carouselDom.classList.add("next");
        } else {
          sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
          thumbnailBorderDom.prepend(
            thumbnailItemsDom[thumbnailItemsDom.length - 1]
          );
          carouselDom.classList.add("prev");
        }

        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
          carouselDom.classList.remove("next");
          carouselDom.classList.remove("prev");
        }, timeRunning);

        clearTimeout(runNextAuto.current);
        runNextAuto.current = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      }
    };

    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    nextDom.onclick = handleNextClick;
    prevDom.onclick = handlePrevClick;

    runNextAuto.current = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto.current);
      clearTimeout(runTimeOut.current);
    };
  }, []);

  return (
    <div className="carousel mt-4" ref={carouselRef}>
      {/* Slider List */}
      <div className="list" ref={sliderRef}>
        {[, Img3, Img4, Img2].map((imgSrc, index) => (
          <div className="item" key={index}>
            <img src={imgSrc} alt={`img${index + 1}`} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">{data.data.title}</div>
              <div className="topic">ANIMAL</div>
              <div className="des">{data.data.single_line_textbox}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail List */}
      <div className="thumbnail" ref={thumbnailRef}>
        {[
          { Img: Img2, Description: "land dear" },
          { Img: data.data.img1.url, Description: "mountan dear" },
          { Img: Img3, Description: "elephandr" },
          { Img: Img4, Description: "lapod" },
        ].map((temp, index) => (
          <div className="item" key={index}>
            <img src={temp.Img} alt={`thumbnail${index + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">{temp.Description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrows">
        <button ref={prevRef} id="prev">
          &lt;
        </button>
        <button ref={nextRef} id="next">
          &gt;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default HeroSection;
