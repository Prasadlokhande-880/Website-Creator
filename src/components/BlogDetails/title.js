import React from "react";
import { Timestamp } from "firebase/firestore"; // Import Timestamp if using Firebase

const Title = ({ title, time }) => {
  const formatDate = (time) => {
    // If time is a Firestore Timestamp, convert it to a JavaScript Date
    if (time instanceof Timestamp) {
      return time.toDate().toLocaleDateString();
    }

    // If it's already a string or Date, format it directly
    const date = new Date(time);
    return isNaN(date) ? "Invalid Date" : date.toLocaleDateString();
  };

  return (
    <div className="text-center pt-4 md:pt-8">
      <p className="text-sm md:text-base text-green-500 font-bold">
        {formatDate(time)} <span className="text-gray-900">/</span> GETTING
        STARTED
      </p>
      <h1 className="font-bold break-normal text-3xl md:text-5xl">{title}</h1>
    </div>
  );
};

export default Title;
