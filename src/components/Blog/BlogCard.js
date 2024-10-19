import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, tags, Id }) => {
  return (
    <Link to={`/BlogDetails/${Id}`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2 p-2 border border-gray-300 cursor-pointer">
        <img className="w-[160px] m-auto" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description} {Id}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
