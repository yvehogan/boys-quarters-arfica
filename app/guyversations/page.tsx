import { guestTopics } from "@/components/data/initiatives";
import Header from "@/components/Header";
import { guy1 } from "@/public/exports";
import Image from "next/image";
import React from "react";

const GuyVersations = () => {
  return (
    <>
      <div className="w-full px-8 md:px-20 h-full flex flex-col">
        <Header />
        <h1 className="mt-16 mb-1 text-[#FEAD3A] text-xl">Our Initiatives</h1>
      </div>
      <div className="flex flex-col gap-y-10 pb-10 text-secondary w-full">
        <div className="md:px-20 px-8">
          {" "}
          <h1 className="text-secondary font-bold text-4xl md:text-[64px] md:leading-[78px]">
            GUYVERSATIONS
          </h1>
          <div className="bg-primary h-[7px] mt-3 w-[66px]" />
        </div>
        <div className="lg:pr-20  flex flex-col lg:flex-row justify-between my-24 ">
          <div className="bg-[#F2EFEA] lg:pl-20 pl-8 w-full py-10 pb-16 lg:py-20 pr-8 lg:pr-10 ">
            <p className="mt-12 text-2xl">
              There are basically three elements to these men-themed
              conversations;{" "}
              <span className="font-semibold">
                Uninhibited Openness, Beautiful Vulnerabilities
              </span>{" "}
              and of course,{" "}
              <span className="font-semibold">
                garnering a digital safe space for young men.
              </span>{" "}
              Since the maiden edition on the 12th of April, 2020, we&apos;ve
              had about 15 Guests, across different walks of life, discussing
              issues that relate to GUYS! The cumulative digital footprint is
              about 2,500 audience and traction gained shows the quantum of
              impact on the minds of young men.
            </p>
          </div>
          <div className="lg:-ml-6 lg:w-full px-8 lg:!px-0 -mt-8 lg:-mt-0">
            {" "}
            <Image src={guy1} alt="children happy" priority />
          </div>
        </div>
        <div className=" w-full md:px-20 px-8 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-9">
            {" "}
            <p className="text-lg whitespace-nowrap text-center md:text-3xl font-semibold">
              Guests and Topics are highlighted below
            </p>
            <div className="bg-primary h-[7px] mt-3 w-[66px]" />
          </div>
          <div className="mb-8">
            {guestTopics.map((item, index) => (
              <div
                className="flex md:flex-row flex-col gap-y-3 justify-between items-center md:gap-[60px] border-b border-b-[#8F8F8F] py-4 w-full"
                key={index}
              >
                <p className="text-lg">{item.topic}</p>
                <p className="p-2 rounded-[23px] border border-[#0C102D] whitespace-nowrap">
                  {item.guest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuyVersations;
