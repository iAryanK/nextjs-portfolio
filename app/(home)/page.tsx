import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import { navItems } from "@/data";
import Image from "next/image";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="fixed top-[50%] -left-[100px] max-sm:hidden z-50 -rotate-90 bg-yellow-400 dark:text-black p-2">
        aryaninmail@gmail.com
      </div>

      <div>
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
