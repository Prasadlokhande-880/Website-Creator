import Heading from "../home/design/heading";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { DirectionAwareHover } from "./design/direction-aware-hover";

export function MasonryGridGallery() {
  return (
    <div className="my-8">
      <Heading
        whiteHeading="Chat Smarter, Not Harder"
        orangeHeading="with Brainwave"
      />
      <div className="container mx-auto px-5 lg:px-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
            <div className="w-full p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <DirectionAwareHover
                imageUrl={
                  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                }
              >
                <p>qdcmml wqdklqw klkqw</p>
                <p>qwdwqdwqdwqdwqd</p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
