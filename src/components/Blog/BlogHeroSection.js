import React from "react";
import Heading from "../home/design/heading";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-screen overflow-hidden mt-16 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center h-full flex flex-col justify-center">
        {/* Title and description */}
        <Heading
          whiteHeading="Chat Smarter, Not Harder"
          orangeHeading="with Brainwave"
        />
        {/* Create an account button */}
        <Link
          to={"/blog/createblog"}
          className="mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-orange-600 shadow-xs hover:bg-orange-700 transition-all duration-500"
        >
          Create Blog
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Image */}
        <div className="flex justify-center mt-6">
          <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image"
            className="rounded-t-3xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
