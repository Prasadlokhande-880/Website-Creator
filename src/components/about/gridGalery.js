import Heading from "../home/design/heading";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { DirectionAwareHover } from "./design/direction-aware-hover";

export function MasonryGridGallery(props) {
  props = props.data;

  return (
    <div className="my-8">
      <Heading
        whiteHeading={props.products}
        orangeHeading={props.products_section_heading_2}
      />
      <div className="container mx-auto px-5 lg:px-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card1.file?.url ||
                  "defaultImage1.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card1
                      .products_section_image_1_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card2.products_section_image_2
                    ?.url || "defaultImage2.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card2
                      .products_section_image_2_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
            <div className="w-full p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card3.products_section_image_3
                    ?.url || "defaultImage3.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card3
                      .products_section_image_3_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card4.products_section_image_4
                    ?.url || "defaultImage4.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card4
                      .products_section_image_4_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card5.products_section_image_5
                    ?.url || "defaultImage5.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card5
                      .products_section_image_5_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  props.products_images.products_card6.products_section_image_6
                    ?.url || "defaultImage6.jpg"
                }
              >
                <p>
                  {
                    props.products_images.products_card6
                      .products_section_image_6_description
                  }
                </p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
