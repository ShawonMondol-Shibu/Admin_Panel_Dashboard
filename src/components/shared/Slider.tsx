"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
export default function Slider() {
  const sliderData = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="bg-blue-500 py-16 px-10 rounded-2xl w-[100%]"
    >
      <CarouselContent className="basis-1/3">
        {sliderData.map((item: number, i: number) => (
          <CarouselItem key={i} className="text-white grid items-center gap-4">
            <p className="text-base font-semibold">September 12-22</p>
            <h2 className="text-4xl font-black leading-12">
              Enjoy free home <br />
              delivery in this summer
            </h2>
            <p className="text-base font-semibold">
              Designer Dresses - Pick from trendy Designer Dress.
            </p>
            <Button variant={"default"} className="bg-[#FF8743] w-fit">
              Get Started
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext /> */}
      {/* <CarouselPrevious /> */}
    </Carousel>
  );
}
