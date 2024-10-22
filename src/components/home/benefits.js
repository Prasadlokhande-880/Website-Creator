import React from "react";
import { BentoGrid, BentoGridItem } from "./design/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Heading from "./design/heading";

// Skeleton component to display images
const Skeleton = ({ imgSrc }) => (
  <div className="overflow-hidden">
    <img src={imgSrc} alt="Skeleton" className="object-cover w-full h-full" />
  </div>
);

export function BentoGridSecondDemo({ data }) {
  // Extract highlights data from the provided JSON structure
  const highlightsSection = data;
  const items = [
    {
      title:
        highlightsSection?.highlights_section1?.highlightssection_heading1 ||
        "No Title",
      description:
        highlightsSection?.highlights_section1?.highlightssection_detal1 ||
        "No Description",
      header: (
        <Skeleton
          imgSrc={
            highlightsSection?.highlights_section1?.highlightssection_img1?.url
          }
        />
      ),
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title:
        highlightsSection?.highlights_section2?.highlightssection_heading2 ||
        "No Title",
      description:
        highlightsSection?.highlights_section2?.highlightssection_detal2 ||
        "No Description",
      header: (
        <Skeleton
          imgSrc={
            highlightsSection?.highlights_section2?.highlightssection_img2?.url
          }
        />
      ),
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title:
        highlightsSection?.highlights_section3?.highlightssection_heading3 ||
        "No Title",
      description:
        highlightsSection?.highlights_section3?.highlightssection_detal3 ||
        "No Description",
      header: (
        <Skeleton
          imgSrc={
            highlightsSection?.highlights_section3?.highlightssection_img3?.url
          }
        />
      ),
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title:
        highlightsSection?.highlights_section4?.highlightssection_heading4 ||
        "No Title",
      description:
        highlightsSection?.highlights_section4?.highlightssection_detal4 ||
        "No Description",
      header: (
        <Skeleton
          imgSrc={
            highlightsSection?.highlights_section4?.highlightssection_img4?.url
          }
        />
      ),
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="overflow-hidden">
        <Heading
          whiteHeading={highlightsSection?.highlights_heading || "No Heading"}
          orangeHeading={
            highlightsSection?.highlights_heading2 || "No Subheading"
          }
        />
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-4 mb-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} overflow-hidden`}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
