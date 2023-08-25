import Image from "next/image";
import Intro from "./Intro";

const Parallax = () => {
  return (
    <section
      className="relative h-screen w-screen overflow-hidden"
      id="parallax-container"
    >
      <Intro />

      <Image
        src="/boat.webp"
        alt="boat"
        width={120}
        height={120}
        className="absolute top-[58%] left-[90%]"
      />
      <Image
        src="/cloud.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <Image
        src="/cloud2.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <Image
        src="/cloud3.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <Image
        src="/cloud4.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <Image
        src="/cloud5.webp"
        alt="cloud"
        layout="fill"
        objectFit="cover"
        className="absolute z-10"
      />
      <Image
        src="/sun.webp"
        alt="sun"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <Image
        src="/deer.svg"
        alt="deer"
        layout="fill"
        objectFit="cover"
        className="z-10 absolute"
      />
      <Image
        src="/background.webp"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
    </section>
  );
};

export default Parallax;
