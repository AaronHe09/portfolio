import React from "react";
import Image from "next/image";

const images = ["question", "sword"];

const Project = () => {
  return (
    <>
      {images.map((image) => {
        return (
          <article className="basis-full md:basis-1/2 mb-10">
            <div className=" max-w-[300px] h-[400px] w-full bg-white m-auto">
              <Image
                src={`/${image}.webp`}
                alt={`/${image} project`}
                width={50}
                height={50}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Project;
