import React, { useEffect, useRef } from "react";
import "./heroSection.css";

const HeroSection = ({ data }) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const runTimeOut = useRef(null);
  const runNextAuto = useRef(null);

  useEffect(() => {
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
      return;
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

  if (!data || !data.herocards) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel mt-4" ref={carouselRef}>
      {/* Slider List */}
      <div className="list" ref={sliderRef}>
        {[
          data.herocards.herosection_img1?.url,
          data.herocards.herosection_img2?.url,
          data.herocards.herosection_img3?.url,
          data.herocards.herosection_img4?.url,
        ].map(
          (imgSrc, index) =>
            imgSrc && (
              <div className="item" key={index}>
                <img src={imgSrc} alt={`img${index + 1}`} />
                <div className="content">
                  <div className="title">{data.herosection}</div>
                  <div className="topic">{data.herosectionheading2}</div>
                  <div className="des">{data.detailsherossection}</div>
                  <div className="buttons">
                    <button>SEE MORE</button>
                    <button>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {/* Thumbnail List */}
      <div className="thumbnail" ref={thumbnailRef}>
        {[
          {
            Img: data.herocards.herosection_img1?.url,
            Description: data.herocards.heroimgheader1,
          },
          {
            Img: data.herocards.herosection_img2?.url,
            Description: data.herocards.heroimgheader2,
          },
          {
            Img: data.herocards.herosection_img3?.url,
            Description: data.herocards.heroimgheader3,
          },
          {
            Img: data.herocards.herosection_img4?.url,
            Description: data.herocards.heroimgheader4,
          },
        ].map(
          (temp, index) =>
            temp.Img && (
              <div className="item" key={index}>
                <img src={temp.Img} alt={`thumbnail${index + 1}`} />
                <div className="content">
                  <div className="title">Name Slider</div>
                  <div className="description">{temp.Description}</div>
                </div>
              </div>
            )
        )}
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
    </div>
  );
};

export default HeroSection;
