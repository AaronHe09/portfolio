"use client";

import About from "@/components/About";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <section id="home">
        <Parallax />
      </section>
      <section
        id="about"
        className="flex flex-col justify-center items-center px-4 py-10"
      >
        <About />
      </section>
    </>
  );
}
