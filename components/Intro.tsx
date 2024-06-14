import React from "react";
import { ShimmerButton } from "./aceternity/StyledButton";
import { ChevronRight } from "lucide-react";
import Divider from "./shared/Divider";
import { SparklesCore } from "./aceternity/Sparkles";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="pt-10 mb-14 h-auto relative w-screen mx-auto">
      <div className="!w-screen absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={1.6}
          particleDensity={100}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      <h2 className="heading">Who Am I ?</h2>
      <div className="mt-20 max-w-7xl mx-auto sm:px-10 px-5">
        <div className="max-sm:ml-3 font-semibold text-3xl lg:text-5xl">
          Hello! I am Aryan,
        </div>
        <div className="lg:text-justify text-start text-2xl lg:text-4xl my-5 max-sm:ml-3">
          <p className="leading-snug max-sm:font-light max-sm:text-justify">
            A Computer Science Undergraduate, currently pursuing the degree of
            Bachelor of Technology. I am in third year of my four years course
            duration. <br /> My hobbies and interests include Programming,
            learning new Technologies and working on them. Aspiring to become a
            &apos;Software Development Engineer&apos;...
          </p>
        </div>
        <Link href="/about">
          <ShimmerButton
            title="Read More.."
            position="right"
            icon={<ChevronRight className="ml-3" />}
            otherClasses="max-sm:w-full mt-5 mb-10"
          />
        </Link>
      </div>

      <Divider />
    </section>
  );
};

export default Intro;
