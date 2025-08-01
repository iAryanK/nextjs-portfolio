import { HeroImagesSlider } from "@/components/HeroImageSlider";
import Projects from "@/components/Projects";
import { importantLinks } from "@/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Aryan",
  description:
    "Creating amazing real life projects have always been an inseparable part of my thills. Get to know about my interesting open source projects with live links, github repository, etc.",
  openGraph: {
    title: "Projects | Aryan",
    description:
      "Creating amazing real life projects have always been an inseparable part of my thills. Get to know about my interesting open source projects with live links, github repository, etc.",
    images: [
      {
        url: `${importantLinks.portfolioWebsite}/opengraph-image.png`,
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="pt-20 scroll-pt-24 bg-white dark:bg-black">
      <HeroImagesSlider />
      <Projects heading="All Projects" />
    </div>
  );
};

export default Page;
