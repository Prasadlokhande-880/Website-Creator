import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = (props) => {
  props = props.data;
  const Data = props.products_cards;

  const featuresData = [
    {
      iconClass: "fa-solid fa-chart-column",
      bgColor: "bg-purple-200",
      title: Data?.products_card1?.heading1 || "Default Title 1",
      description:
        Data?.products_card1?.productsdetails1 || "Default description 1",
    },
    {
      iconClass: "fa-solid fa-truck-fast",
      bgColor: "bg-teal-200",
      title: Data?.products_card2?.heading2 || "Default Title 2",
      description:
        Data?.products_card2?.productsdetails2 || "Default description 2",
    },
    {
      iconClass: "fa-solid fa-shield",
      bgColor: "bg-yellow-200",
      title: Data?.products_card3?.header3 || "Default Title 3",
      description:
        Data?.products_card3?.productsdetails3 || "Default description 3",
    },
    {
      iconClass: "fa-solid fa-cloud",
      bgColor: "bg-red-200",
      title: Data?.products_card4?.header4 || "Default Title 4",
      description:
        Data?.products_card4?.productsdetails4 || "Default description 4",
    },
    {
      iconClass: "fa-solid fa-pen-nib",
      bgColor: "bg-green-200",
      title: Data?.products_card5?.header5 || "Default Title 5",
      description:
        Data?.products_card5?.productsdetails5 || "Default description 5",
    },
    {
      iconClass: "fa-solid fa-bolt",
      bgColor: "bg-orange-200",
      title: Data?.products_card6?.header6 || "Default Title 6",
      description:
        Data?.products_card6?.productsdetails6 || "Default description 6",
    },
  ];

  return (
    <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {props?.products_heading || "Default Heading"}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            {props?.products_details || "Default details about the products."}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-4 text-center sm:mt-4 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-4">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
