"use client";

import React, { useRef } from "react";
import Divider from "./shared/Divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { testimonials } from "@/data";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="max-w-7xl mx-auto sm:px-10 px-5 pt-10 mt-5 max-md:mx-10">
      <h2 className="heading">Kind words from Satisfied Clients</h2>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="max-lg:max-w-xs max-w-3xl mx-auto my-10"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <div className="p-1">
                <Card className="h-[410px] backdrop-blur-sm md:bg-white/[0.6] md:dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
                  <CardContent className="aspect-square p-6 ">
                    {/* here comes the content  */}
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt="profile picture"
                        width={68}
                        height={68}
                      />
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl text-center font-semibold pb-1">
                          {testimonial.name}
                        </p>
                        <p className="uppercase tracking-widest max-sm:text-xs text-sm text-center">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                    <p className="text-justify pt-5 font-extralight">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Divider />
    </section>
  );
};

export default Testimonials;
