import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { carouselData } from "@/components/data/carouselData";

const SlidingCarousel = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-secondary font-bold whitespace-nowrap">
              OUR INITIATIVES
            </span>
            <div className="h-px bg-secondary w-full max-w-[400px]"></div>
          </div>
        </div>
        <p className="text-secondary text-3xl md:text-[40px] font-medium mt-5 mb-10 leading-tight">
          At Boys Quarters Africa, we are committed to driving positive change
          through our range of impactful initiatives
        </p>
        <Carousel className="w-full relative mb-12">
          <CarouselContent className="-ml-1">
            {carouselData.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-5 md:basis-1/4 lg:basis-1/4"
              >
                <Card className="overflow-hidden border border-[#F2EFEA]">
                  <CardContent className="relative p-0 aspect-square">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="flex justify-between items-center absolute bottom-0 left-0 right-0  h-24 bg-white py-5 px-3">
                      <h3 className="text-secondary text- font-semibold text-2xl">
                        {item.title}
                      </h3>
                      <Link
                        href={item.link}
                        className="text-secondary flex gap-2 items-center text-[16px] mt-2"
                      >
                        <MoveRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex">
            <CarouselPrevious className="h-8 w-8 rounded-md border border-secondary text-secondary" />
            <CarouselNext className="h-8 w-8 rounded-md border border-secondary text-secondary" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SlidingCarousel;
