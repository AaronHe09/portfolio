import { easeOut } from "framer-motion";

export const glow = {
  hidden: { opacity: 0, width: 0, boxShadow: "0" },
  show: {
    opacity: 1,
    width: "100%",
    boxShadow: [
      "0",
      "0",
      "0",
      "0 0 5px #b19953, 0 0 10px #b19953, 0 0 20px #b19953, 0 0 50px #b19953",
    ],
    transition: {
      ease: easeOut,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const staggerText = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 8, stiffness: 100 },
  },
};
