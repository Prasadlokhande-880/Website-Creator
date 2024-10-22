import React from "react";

const Author = ({ author, designation }) => {
  return (
    <div className="flex w-full items-center font-sans p-8 md:p-10">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src="http://i.pravatar.cc/300"
        alt={`Avatar of ${author}`}
      />
      <div className="flex-1">
        <p className="text-base font-bold md:text-xl leading-none">
          {author || "Unknown Author"}{" "}
        </p>
        <p className="text-gray-600 text-xs md:text-base">
          {designation || "No Designation"}{" "}
        </p>
      </div>
    </div>
  );
};

export default Author;
