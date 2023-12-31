import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";
import Projects from "@/components/Projects";

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
      <section
        id="projects"
        className="flex flex-col justify-center items-center px-4 py-10 mt-10"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center items-center px-4 py-10 mt-10"
      >
        <Contact />
      </section>
      <footer className="flex flex-col justify-center items-center px-4 py-10 mt-10">
        <Footer />
      </footer>
    </>
  );
}
