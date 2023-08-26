"use client";

import About from "@/components/About";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <section id="home">
        <Parallax />
      </section>
      <div className="px-72">
        <section id="about">
          <About />
        </section>
      </div>
    </>
  );
}
