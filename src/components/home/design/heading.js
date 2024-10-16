import React from "react";

const Heading = ({ whiteHeading, orangeHeading }) => {
  const headingStyle = {
    textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
  };

  return (
    <h1
      className="text-center font-bold text-gray-700 m-2
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                 leading-tight sm:leading-snug md:leading-normal lg:leading-tight"
      style={headingStyle}
    >
      {whiteHeading}
      <div className="text-[#f1683a]">{orangeHeading}</div>
    </h1>
  );
};

export default Heading;
