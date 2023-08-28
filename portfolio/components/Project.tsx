import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { staggerText } from "@/app/variants/variants";
import uuid from "uuid-random";

const images = [
  {
    image: "question",
    title: "Rizz-O-Meter",
    live: "https://rizz-o-meter.vercel.app/",
    github: "https://github.com/AaronHe09/rizz-o-meter",
    desc: "The Rizz-o-Meter website offers a lighthearted and whimsical experience. Respond to 10 playful and random questions, earning points along the way to attain a personalized rank. This entertaining project provides a fun diversion, allowing users to engage in an amusing and carefree activity.",
    lang: ["NextJs", "Tailwind", "Postgres", "Vercel"],
  },
  {
    image: "sword",
    title: "Unveiling Ancient Military Might",
    live: "https://unveiling-ancient-military-might.aaronhe.online/",
    github: "https://github.com/AaronHe09/Unveiling-Ancient-Military-Might",
    desc: "Unveiling Ancient Military Might is a website that draws inspiration from Total War: Rome 2, offering insights into the military histories and tactics of ancient civilizations. Through concise historical accounts, users can explore the composition of these civilizations' armies, accompanied by brief summaries of key military units.",
    lang: ["React", "Express", "Postgres"],
  },
];

const Project = () => {
  const gitHubLink = (github: string) => {
    return (
      <div className=" hover:scale-105 duration-150">
        <a href={github} target="_blank">
          <FaGithub style={{ width: "30px", height: "auto", color: "white" }} />
        </a>
      </div>
    );
  };

  const liveLink = (live: string) => {
    return (
      <div className=" hover:scale-105 duration-150">
        <a href={live} target="_blank">
          <HiOutlineExternalLink
            style={{ width: "30px", height: "auto", color: "white" }}
          />
        </a>
      </div>
    );
  };

  const mapLang = (lang: string[]) => {
    return (
      <>
        {lang.map((lan) => {
          return (
            <span
              className="text-xl text-black bg-[var(--gold)] rounded-md px-2"
              key={uuid()}
            >
              {lan}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <>
      {images.map((img) => {
        const { image, title, live, github, desc, lang } = img;
        return (
          <article
            className=" basis-full md:basis-[calc(50%_-_40px)] flex flex-col items-center card-gradient rounded-lg"
            key={uuid()}
          >
            <motion.div
              className="h-[300px] w-full relative rounded-lg overflow-hidden group"
              variants={staggerText}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <Image
                src={`/${image}-background.webp`}
                alt="background"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-75 group-hover:scale-100 group-hover:bg-white/30 cursor-pointer"></div>
            </motion.div>
            <motion.div
              className="w-full border-b-2"
              variants={staggerText}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl text-white text-center">{title}</h3>
              <div className="flex gap-5">
                <div className="py-5 basis-2/3 flex flex-wrap gap-4">
                  {mapLang(lang)}
                </div>
                <div className="py-5 basis-1/3 flex gap-5">
                  {gitHubLink(github)}
                  {liveLink(live)}
                </div>
              </div>
            </motion.div>
            <motion.div className="mt-5">
              <p className="text-xl text-white">{desc}</p>
            </motion.div>
          </article>
        );
      })}
    </>
  );
};

export default Project;
