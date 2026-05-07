import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
