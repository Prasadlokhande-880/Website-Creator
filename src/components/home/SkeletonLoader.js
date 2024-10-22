import React from "react";
import "./Skeleton.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader min-h-screen flex flex-col justify-between">
      {/* Navbar Skeleton */}
      <div className="skeleton-navbar bg-gray-300 h-12 w-full mb-6"></div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col items-center p-4 space-y-4">
        {/* Profile Picture Skeleton */}
        <div className="skeleton-profile bg-gray-300 h-16 w-16 rounded-full mb-4"></div>

        {/* Header Skeleton */}
        <div className="skeleton-header bg-gray-300 h-8 w-1/2 mb-4"></div>

        {/* Button Skeleton */}
        <div className="skeleton-button bg-gray-300 h-10 w-32 rounded-lg mb-6"></div>

        {/* Text Skeleton */}
        <div className="space-y-2 w-3/4">
          <div className="skeleton-text bg-gray-300 h-4 w-full"></div>
          <div className="skeleton-text bg-gray-300 h-4 w-5/6"></div>
          <div className="skeleton-text bg-gray-300 h-4 w-2/3"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="skeleton-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="skeleton-card bg-gray-300 rounded-lg h-48 p-4"
            ></div>
          ))}
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="skeleton-footer bg-gray-300 h-10 w-full mt-10"></div>
    </div>
  );
};

export default SkeletonLoader;
