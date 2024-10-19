import React from "react";
import Card from "./BlogCard";
import Img1 from "../../assets/background.jpg";
import Heading from "../home/design/heading";

const App = () => {
  const cardData = [
    {
      image: Img1,
      title: "The Coldest Sunset",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.`,
      tags: ["photography", "travel", "winter"],
      Id: 1,
    },
    {
      image: Img1,
      title: "The Coldest Sunset",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.`,
      tags: ["photography", "travel", "winter"],
      Id: 1,
    },
    {
      image: Img1,
      title: "The Coldest Sunset",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.`,
      tags: ["photography", "travel", "winter"],
      Id: 1,
    },
  ];

  return (
    <div className="mt-4 p-2">
      <Heading
        whiteHeading="Chat Smarter, Not Harder"
        orangeHeading="with Brainwave"
      />
      <div className="m-4 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tags={card.tags}
            Id={card.Id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
