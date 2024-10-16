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

const App = () => {
  return (
    <div className="banner mt-6">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={Img1} alt="Dragon 1" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={Img2} alt="Dragon 2" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={Img3} alt="Dragon 3" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={Img4} alt="Dragon 4" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={Img5} alt="Dragon 5" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={Img6} alt="Dragon 6" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={Img7} alt="Dragon 7" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={Img8} alt="Dragon 8" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={Img9} alt="Dragon 9" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={Img10} alt="Dragon 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>LUN DEV</h2>
          <p>
            <b>Web Design</b>
          </p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default App;
