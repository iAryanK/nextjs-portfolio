import { HeroImagesSlider } from "@/components/HeroImageSlider";
import Projects from "@/components/Projects";
import React from "react";

const Page = () => {
  return (
    <div className="pt-20 scroll-pt-24 bg-white dark:bg-black">
      <HeroImagesSlider />
      <Projects heading="All Projects" />
    </div>
  );
};

export default Page;
