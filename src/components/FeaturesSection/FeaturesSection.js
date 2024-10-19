// FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    iconClass: "fa-solid fa-chart-column",
    bgColor: "bg-purple-200",
    title: "Advanced Analytics",
    description:
      "Track and analyze your data with powerful analytics tools. Gain valuable insights for better decision-making.",
  },
  {
    iconClass: "fa-solid fa-truck-fast",
    bgColor: "bg-teal-200",
    title: "Fast Integration",
    description:
      "Seamlessly integrate with your existing tools and systems for a smooth workflow experience.",
  },
  {
    iconClass: "fa-solid fa-shield",
    bgColor: "bg-yellow-200",
    title: "Security First",
    description:
      "Ensure the safety of your data with top-notch security features. Your privacy is our priority.",
  },
  {
    iconClass: "fa-solid fa-cloud",
    bgColor: "bg-red-200",
    title: "Cloud Integration",
    description:
      "Access your data from anywhere with seamless cloud integration. Work without boundaries.",
  },
  {
    iconClass: "fa-solid fa-pen-nib",
    bgColor: "bg-green-200",
    title: "Task Management",
    description:
      "Organize your workflow with efficient task management features. Stay on top of your projects effortlessly.",
  },
  {
    iconClass: "fa-solid fa-bolt",
    bgColor: "bg-orange-200",
    title: "Performance Metrics",
    description:
      "Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Boost Your Productivity
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
