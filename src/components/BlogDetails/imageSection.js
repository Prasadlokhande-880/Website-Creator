import React from "react";

const ImageSection = ({ imageUrl }) => {
  return (
    <div
      className="container max-h-56 mx-auto bg-white bg-cover mt-8 rounded"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "75vh",
        overflow: "visible", // Ensure overflow is not hidden
      }}
    ></div>
  );
};

export default ImageSection;
