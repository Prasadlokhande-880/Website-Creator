// FeatureCard.jsx
import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ iconClass, bgColor, title, description }) => {
  return (
    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
      <div
        className={`w-14 h-14 rounded-full ${bgColor} flex justify-center items-center`}
      >
        <i className={`${iconClass} text-3xl text-gray-900`}></i>
      </div>
      <h3 className="mt-12 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-5 text-base text-gray-600">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
