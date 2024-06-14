import React from "react";
import Divider from "./shared/Divider";
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
import { getQuotation } from "@/lib/actions/quote.action";

const Skills = async () => {
  const quote = await getQuotation();

  return (
    <section className="max-w-7xl mx-auto sm:px-10 px-5 pt-10 max-md:mx-10 mb-14">
      <h2 className="heading">My Best Skills</h2>

      <div className="my-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-4xl md:text-5xl">
              Frontend
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-3xl m-auto gap-4">
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
            <AccordionTrigger className="text-4xl md:text-5xl">
              Backend
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-3xl m-auto gap-4">
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
            <AccordionTrigger className="text-4xl md:text-5xl">
              Languages
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-3xl m-auto gap-4">
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
            <AccordionTrigger className="text-4xl md:text-5xl">
              Others
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center items-center max-w-3xl m-auto gap-4">
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

      <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto text-center mb-5">
        &quot;{quote.quote}&quot; -{" "}
        <i className="text-xl sm:text-2xl font-extralight">{quote.author}</i>
      </p>
      <div className="w-[20%] h-[1px] border border-gray-400 mx-auto mb-10"></div>

      <Divider />
    </section>
  );
};

export default Skills;
