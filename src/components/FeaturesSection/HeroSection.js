import React from "react";

function HeroSection({ heroHeader, heroDetails, demoLink }) {
  return (
    <div className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://eu-images.contentstack.com/v3/assets/blt88808989a78f6c74/blt5c56b116a85e40bf/670784541225fe5420cccf08/ss-grandcanyon.webp?auto=webp&format=pjpg"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{heroHeader}</h1>
        <p className="text-lg text-gray-300 mb-8">{heroDetails}</p>
        {demoLink && (
          <a
            href={demoLink.href}
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {demoLink.title}
          </a>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
