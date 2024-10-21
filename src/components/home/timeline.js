import React from "react";
import { Timeline } from "./design/timeline-UI";

export function TimelineDemo(props) {
  const TimeLineData = props.props;

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {TimeLineData.purposesection_div1.purposesection_details1}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeLineData.purposesection_div1.purposesectiondiv1_img1.url}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div1.purposesectiondiv1_img2.url}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div1.purposesectiondiv1_img3.url}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div1.purposesectiondiv1_img4.url}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {TimeLineData.purposesection_div2.purposesection_details}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeLineData.purposesection_div2.purposesectiondiv2_img1.url}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div2.purposesectiondiv2_img2.url}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div2.purposesectiondiv2_img3.url}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div2.purposesectiondiv2_img4.url}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {TimeLineData.purposesection_div3.purposesectiondetails2}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeLineData.purposesection_div3.purposesectiondiv3_img1.url}
              alt="dragon_4"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div3.purposesectiondiv3_img2.url}
              alt="dragon_9"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div3.purposesectiondiv3_img3.url}
              alt="img3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={TimeLineData.purposesection_div3.purposesectiondiv3_img4.url}
              alt="img2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={data}
        heading1={TimeLineData.purposesection_heading}
        heading2={TimeLineData.purposesection_heading2}
      />
    </div>
  );
}
