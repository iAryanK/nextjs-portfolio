import { HeroImagesSlider } from "@/components/HeroImageSlider";
import Projects from "@/components/Projects";
import React from "react";

const Page = () => {
  return (
    <div className="mt-20 scroll-mt-24">
      <HeroImagesSlider />
      <Projects heading="All Projects" />
    </div>
  );
};

export default Page;
