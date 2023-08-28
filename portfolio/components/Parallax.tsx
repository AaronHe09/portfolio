"use client";
import Image from "next/image";
import Intro from "./Intro";
import { useEffect, useState } from "react";

const Parallax = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 740) {
        setScrollY(window.scrollY);
      }
    });
  }, []);

  return (
    <div
      className="relative h-[1080px] w-screen overflow-hidden"
      id="parallax-container"
    >
      <Intro scrollY={scrollY} />

      <Image
        src="/boat.webp"
        alt="boat"
        width={120}
        height={120}
        className="absolute top-[50%] left-[90%] z-10"
        style={{
          position: "absolute",
          left: `${80 + scrollY * -0.015}%`,
          top: `${50 + scrollY * 0.05}%`,
        }}
      />
      <Image
        src="/cloud.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: `${scrollY * -0.07}%` }}
      />
      <Image
        src="/cloud2.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: `${scrollY * -0.05}%` }}
      />
      <Image
        src="/cloud3.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: `${scrollY * -0.05}%` }}
      />
      <Image
        src="/cloud4.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: `${-12 + scrollY * -0.08}%` }}
      />
      <Image
        src="/cloud5.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="z-20"
        style={{ position: "absolute", top: `${scrollY * -0.02}%` }}
      />
      <Image
        src="/sun.webp"
        alt="sun"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: `${scrollY * -0.02}%` }}
      />
      <Image
        src="/deer.svg"
        alt="deer"
        layout="fill"
        objectFit="cover"
        className="z-20 deer"
        style={{ position: "absolute", top: "-10%" }}
      />
      <Image
        src="/underground.webp"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="z-10"
        style={{ position: "absolute", top: "14%" }}
      />
      <Image
        src="/island.webp"
        alt="background"
        layout="fill"
        objectFit="cover"
        style={{ position: "absolute", top: `${scrollY * 0.05}%` }}
      />
    </div>
  );
};

export default Parallax;
