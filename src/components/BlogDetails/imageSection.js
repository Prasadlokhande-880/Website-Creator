import React from "react";

const ImageSection = () => {
  return (
    <div
      className="container max-h-56 mx-auto bg-white bg-cover mt-8 rounded"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/004/968/002/non_2x/cute-abstract-modern-background-free-vector.jpg')",
        height: "75vh",
        overflow: "visible", // Ensure overflow is not hidden
      }}
    ></div>
  );
};

export default ImageSection;
