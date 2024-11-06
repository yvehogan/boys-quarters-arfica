import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import InitiativesDropdown from "@/components/InitiativesDropdown";
import { Button } from "@/components/ui/button";
import WhyThis from "@/components/the-exchange/WhyThis";
import ImageGallery from "@/components/the-exchange/ImageGallery";
import VideoGallery from "@/components/the-exchange/VideoGallery";

const images = [
  { src: "/images/exchange3.png", alt: "Activity" },
  { src: "/images/exchange4.png", alt: "Acitvity" },
  { src: "/images/exchange5.png", alt: "Activity" },
];

const TheExchange = () => {
  return (
    <>
      <div className="bg-white w-full md:px-28 px-4 mt-24 pb-10 text-secondary">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="w-full md:w-1/2">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              The Exchange
            </h1>
            <p className="mt-4 mb-16 text-lg">
              The Exchange TraDigital Transformation Academy is a 6-Month skill
              and value acquisition programme for Boys in remand and
              correctional homes. The Academy is positioned to principally
              prepare these Boys for the Future of Work (most importantly, when
              they leave the house) and train those who may not be able to catch
              Digital skills on the identified skills they may be interested in.
            </p>
            <Button
              className="bg-transparent border border-primary text-primary mb-10 md:mb-0"
              size="sm"
              variant="outlinePrimary"
            >
              Download The Exchange Campaign Report
            </Button>
          </div>
          <div className="">
            <Image
              src="/images/the-exchange.png"
              width={500}
              height={500}
              alt="speaker"
              priority
            />
          </div>
        </div>
      </div>
      <WhyThis />
      <VideoGallery />
      <ImageGallery />
    </>
  );
};

export default TheExchange;
