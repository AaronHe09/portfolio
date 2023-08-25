import { VT323 } from "next/font/google";
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1
        className={`${vt323.className} text-center text-9xl text-shadow text-[var(--gold)] dark-shadow`}
      >
        Hi, I'm Aaron
        <span className="text-4xl block mt-3">
          Interactive Front-End Developer
        </span>
      </h1>
    </section>
  );
}
