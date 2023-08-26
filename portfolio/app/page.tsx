"use client";

import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center" id="home">
        <Parallax />
      </section>
      <section id="about" className="h-screen"></section>
    </>
  );
}
