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
            {Array.from({ length: 4 }, (_, index) => (
              <img
                key={index}
                src={
                  TimeLineData.purposesection_div1[
                    `purposesectiondiv1_img${index + 1}`
                  ].url
                }
                alt={`startup template ${index + 1}`}
                className="rounded-lg object-cover max-h-60 w-full shadow"
              />
            ))}
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
            {Array.from({ length: 4 }, (_, index) => (
              <img
                key={index}
                src={
                  TimeLineData.purposesection_div2[
                    `purposesectiondiv2_img${index + 1}`
                  ].url
                }
                alt={`feature template ${index + 1}`}
                className="rounded-lg object-cover max-h-60 w-full shadow"
              />
            ))}
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
            {Array.from({ length: 4 }, (_, index) => (
              <img
                key={index}
                src={
                  TimeLineData.purposesection_div3[
                    `purposesectiondiv3_img${index + 1}`
                  ].url
                }
                alt={`changelog template ${index + 1}`}
                className="rounded-lg object-cover max-h-60 w-full shadow"
              />
            ))}
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
