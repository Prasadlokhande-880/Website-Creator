import React from "react";
import { BentoGrid, BentoGridItem } from "./design/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Heading from "./design/heading";
import Img1 from "../../assets/images/dragon_1.jpg";
import Img2 from "../../assets/images/dragon_2.jpg";
import Img3 from "../../assets/images/dragon_3.jpg";
import Img4 from "../../assets/images/dragon_4.jpg";

export function BentoGridSecondDemo() {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="overflow-hidden">
        {" "}
        {/* Added overflow-hidden here */}
        <Heading
          whiteHeading="Chat Smarter, Not Harder"
          orangeHeading="with Brainwave"
        />
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-4 mb-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className}  overflow-hidden`}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

// Update the Skeleton component to accept Img1 as a prop
const Skeleton = ({ imgSrc }) => (
  <div className="overflow-hidden">
    {" "}
    {/* Added overflow-hidden here for the image container */}
    <img
      src={imgSrc}
      alt="Skeleton"
      className="object-cover w-full h-full"
    />{" "}
    {/* Added styling for image cover */}
  </div>
);

// Update the items array to pass the image source correctly
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton imgSrc={Img1} />, // Pass Img1 as prop
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton imgSrc={Img2} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton imgSrc={Img3} />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton imgSrc={Img4} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
