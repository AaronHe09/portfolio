import React from "react";
import Image from "next/image";

const images = ["question", "sword"];

const Project = () => {
  return (
    <>
      {images.map((image) => {
        return (
          <article className="basis-full md:basis-1/2 mb-10">
            <div className=" max-w-[300px] h-[450px] bg-white m-auto relative">
              <div className="h-1/2 relative">
                <Image
                  src={`/${image}-background.webp`}
                  alt="background"
                  fill={true}
                  objectFit="cover"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-black border-2 p-3 rotate-45 bg-white">
                <Image
                  src={`/${image}.webp`}
                  alt={`/${image} project`}
                  width={40}
                  height={40}
                  className=" -rotate-45"
                />
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Project;
