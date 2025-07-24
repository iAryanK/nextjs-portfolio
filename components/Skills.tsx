"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "./ui/progress";
import {
  FrontendSkills,
  backendSkills,
  OtherSkills,
  languageSkills,
} from "@/data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          markers: false,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      tl.from(skillsRef.current, {
        opacity: 0,
        duration: 1,
      });

      tl.from("h2", {
        y: 50,
        scale: 0,
        opacity: 0,
        duration: 0.5,
      });

      tl.from(".gbody", {
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
    },
    { scope: skillsRef }
  );

  return (
    <section
      ref={skillsRef}
      className="max-w-7xl mx-auto sm:px-10 px-5 pt-10 max-md:mx-10 mb-14 skillRef"
    >
      <h2 className="heading">My Best Skills</h2>

      <div className="my-10 gbody">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl md:text-4xl">
              Frontend
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-4xl m-auto gap-4">
              {FrontendSkills.map(({ id, img, skill, value }) => (
                <div
                  key={id}
                  className="w-full flex flex-row items-center justify-between py-2"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={img}
                      alt="icon"
                      width="48"
                      height={48}
                      className="pr-2"
                    />
                    <div className="text-2xl uppercase tracking-widest max-md:hidden">
                      {skill}
                    </div>
                  </div>
                  <Progress
                    value={value}
                    textContent={skill}
                    className="w-[60%] max-md:w-[90%] max-md:mx-auto"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-3xl md:text-4xl">
              Backend
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-4xl m-auto gap-4">
              {backendSkills.map(({ id, img, skill, value }) => (
                <div
                  key={id}
                  className="w-full flex flex-row items-center justify-between py-2"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={img}
                      alt="icon"
                      width="48"
                      height={48}
                      className="pr-2"
                    />
                    <div className="text-2xl uppercase tracking-widest max-md:hidden">
                      {skill}
                    </div>
                  </div>
                  <Progress
                    value={value}
                    textContent={skill}
                    className="w-[60%] max-md:w-[90%] max-md:mx-auto"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-3xl md:text-4xl">
              Languages
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-4xl m-auto gap-4">
              {languageSkills.map(({ id, img, skill, value }) => (
                <div
                  key={id}
                  className="w-full flex flex-row items-center justify-between py-2"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={img}
                      alt="icon"
                      width="48"
                      height={48}
                      className="pr-2"
                    />
                    <div className="text-2xl uppercase tracking-widest max-md:hidden">
                      {skill}
                    </div>
                  </div>
                  <Progress
                    value={value}
                    textContent={skill}
                    className="w-[60%] max-md:w-[90%] max-md:mx-auto"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-3xl md:text-4xl">
              Others
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-4xl m-auto gap-4">
              {OtherSkills.map(({ id, img, skill, value }) => (
                <div
                  key={id}
                  className="w-full flex flex-row items-center justify-between py-2"
                >
                  <div className="flex items-center justify-center gap-4 ">
                    <Image
                      src={img}
                      alt="icon"
                      width="48"
                      height={48}
                      className="pr-2"
                    />
                    <div className="text-2xl uppercase tracking-widest max-md:hidden">
                      {skill}
                    </div>
                  </div>
                  <Progress
                    value={value}
                    textContent={skill}
                    className="w-[60%] max-md:w-[90%] max-md:mx-auto"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Skills;
