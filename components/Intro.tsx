"use client";

import React, { useRef } from "react";
import { ShimmerButton } from "./aceternity/StyledButton";
import { ChevronRight } from "lucide-react";
import Divider from "./shared/Divider";
import { SparklesCore } from "./aceternity/Sparkles";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          markers: false,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      tl.from(introRef.current, {
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
    { scope: introRef }
  );

  return (
    <section
      ref={introRef}
      className="pt-10 mb-14 h-auto relative w-screen mx-auto"
    >
      <div className="!w-screen absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={1.6}
          particleDensity={20}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      <h2 className="heading">Who Am I ?</h2>
      <div className="mt-20 max-w-7xl mx-auto sm:px-10 xs:px-5 px-2 gbody">
        <div className="max-sm:ml-3 font-semibold text-3xl lg:text-5xl">
          Hello! I am Aryan,
        </div>
        <div className="text-2xl lg:text-4xl my-5 max-sm:ml-3">
          <p className="leading-snug max-sm:font-light  text-[#868562] dark:text-[#BBBAA6]">
            A CS grad, currently pursuing M. Tech in Computer Science &
            Engineering from{" "}
            <strong>Indian Institute of Technology, Patna.</strong> With a
            passion for programming and a keen interest in exploring new
            technologies, I am dedicated to continuous learning and innovation.{" "}
            <br /> <br />
            Working as a <strong>Full Stack Developer</strong> at a fast-paced
            startup, building scalable systems that turn wild ideas into
            reality.
            <br />
            Ready to be surprised? Stick around - I&apos;m just getting started.
          </p>
        </div>
        <Link href="/about">
          <ShimmerButton
            title="Read More.."
            position="right"
            icon={<ChevronRight className="ml-3" />}
            otherClasses="max-sm:w-full mt-5 mb-10 shadow-none"
          />
        </Link>
      </div>

      <Divider />
    </section>
  );
};

export default Intro;
