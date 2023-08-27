import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJquery,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoFigma,
} from "react-icons/bi";
import { SiExpress, SiFramer, SiWebpack, SiEslint } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNpm } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";

const icons = [
  { icon: BiLogoJavascript, title: "JavaScript" },
  { icon: BiLogoHtml5, title: "HTML5" },
  { icon: BiLogoCss3, title: "CSS3" },
  { icon: BiLogoReact, title: "React" },
  { icon: BiLogoNodejs, title: "Node.js" },
  { icon: SiExpress, title: "Express" },
  { icon: BiLogoJquery, title: "jQuery" },
  { icon: BiLogoTailwindCss, title: "Tailwind" },
  { icon: BiLogoTypescript, title: "TypeScript" },
  { icon: BiLogoPostgresql, title: "PostgreSQL" },
  { icon: SiFramer, title: "Framer" },
  { icon: SiWebpack, title: "Webpack" },
  { icon: TbBrandNextjs, title: "Next.js" },
  { icon: BiLogoFigma, title: "Figma" },
  { icon: SiEslint, title: "ESLint" },
  { icon: DiNpm, title: "npm" },
  { icon: BsGit, title: "Git" },
  { icon: TbBrandVscode, title: "Vs-code" },
];

export const Carousel = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        500: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
        900: {
          slidesPerView: 8,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      observer={true}
    >
      {icons.map((icon) => {
        return (
          <SwiperSlide className="w-52">
            <icon.icon
              style={{ color: "#F4CE67", width: "100%", height: "auto" }}
            />
            <h3 className="text-center text-white text-lg">{icon.title}</h3>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
