import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description = "", tags = [], Id }) => {
  return (
    <Link to={`/BlogDetails/${Id}`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2 p-2 border border-gray-300 cursor-pointer hover:shadow-xl transition-shadow duration-300">
        {/* Image Section */}
        <img className="w-full h-48 object-cover" src={image} alt={title} />

        {/* Content Section */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description && description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="px-6 pt-4 pb-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-sm">No tags available</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
