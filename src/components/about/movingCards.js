import React from "react";
import { InfiniteMovingCards } from "./design/infinite-moving-cards";
import Heading from "../home/design/heading";

export function MovingCards({ data }) {
  // Extract feedback from props
  const testimonials = [
    ...Object.values(data.feedback_down).map((feedback) => ({
      quote:
        feedback.feedbackdetails1 ||
        feedback.feedbackdetails2 ||
        feedback.feedbackdetails3 ||
        feedback.feedbackdetails4,
      name:
        feedback.name1 || feedback.name2 || feedback.name3 || feedback.name4,
      title:
        feedback.position1 ||
        feedback.position2 ||
        feedback.position3 ||
        feedback.position4,
    })),
    ...Object.values(data.feedbackupper).map((feedback) => ({
      quote:
        feedback.feedback_details1 ||
        feedback.feedback_details2 ||
        feedback.feedback_details3 ||
        feedback.feedback_details4,
      name:
        feedback.name_1 ||
        feedback.name_2 ||
        feedback.name_3 ||
        feedback.name_4,
      title:
        feedback.position_1 ||
        feedback.position_2 ||
        feedback.position_3 ||
        feedback.position_4,
    })),
  ];

  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-12">
      <Heading
        whiteHeading="Chat Smarter, Not Harder"
        orangeHeading="with Brainwave"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
