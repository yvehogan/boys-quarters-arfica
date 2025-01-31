"use client"
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Header from "../Header";
import Link from 'next/link';

interface Slide {
  id: number;
  imagePath: string;
}

const HeroSectionCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
    //   api.next();
    api.scrollNext();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  const slides: Slide[] = [
    { id: 1, imagePath: "/images/hero.png" },
    { id: 2, imagePath: "/images/hero2.png" },
    { id: 3, imagePath: "/images/hero3.png" },
  ];

  return (
    <main className="relative h-screen  overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-screen">
        <Carousel 
          setApi={setApi} 
          className="w-full h-full" 
          opts={{ 
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="h-full pl-0">
                <div className="relative w-full ">
                  <img
                    src={slide.imagePath}
                    alt={`Slide ${slide.id}`}
                    className="object-cover w-full min-h-[800px]"
                  />
                  {/* overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot Navigation - Now at the bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center gap-2 mb-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-primary" : "bg-white"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-28 h-full flex flex-col">
        <Header />
        <div className="flex-grow flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white font-bold text-4xl md:text-[50px] leading-tight mb-5">
              Crafting Exceptional Lives: Boys & Men Leading Change
            </h1>
            <p className="text-white mb-10 text-[20px]">
              We are a movement dedicated to educating, empowering &
              advocating for a new generation of boys, guiding them to
              transition purposefully from boyhood to exceptional manhood.
            </p>
        
            <div className="flex flex-row md:flex-row gap-5">
              <a
                href="https://bit.ly/boys-quarter-africa-volunteer"
                className="bg-transparent border border-primary text-primary rounded-md px-5 py-3 text-lg hover:bg-primary/10 hover:text-white transition-colors duration-300"
                target="_blank"
              >
                Get Involved
              </a>
              <Button
                className="bg-primary text-white hover:bg-primary hover:opacity-70"
                size="lg"
                asChild
              >
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSectionCarousel;