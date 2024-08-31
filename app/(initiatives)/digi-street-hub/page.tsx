import React from "react";
import Header from "@/components/Header";
import Image from "next/image";


const TheDigiStreetHub = () => {
  return (
    <div className="bg-white">
      <div className="">
        <h3 className="mt-3 text-secondary font-bold text-5xl md:text-[64px] md:leading-[78px]'">THE DIGI-STREET HUB</h3>
        <div className="h-1 w-12 bg-primary mt-2 mb-4"></div>
      </div>
      <div className="w-full pt-20 flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/digi-street-hub.png"
            alt=""
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-secondary text-xl leading-9 mb-1">
            The heightening rate of Cyber Crime amongst Youth has done
            tremendous harm to the image and economy of the African Nations,
            especially nations like Nigeria.
          </p>
          <p className="text-secondary text-xl leading-9">
            This project is a proactive measure of enrolling young boys into
            profitable, engaging and life-defining measures, before they
            enmeshed in the murky water of internet fraud. This STEM project
            borders on our objective to skill up 2 Million under-privilege
            African Boys with skills that are in tandem with their Counterparts
            across the world.
          </p>
        </div>
      </div>
      <div className="w-full pt-28 pb-32 flex flex-col lg:flex-row gap-8 justify-between">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-secondary font-semibold text-5xl md:text-[64px] md:leading-[78px] side-lined-heading pl-7">
              The Goal
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-secondary text-xl leading-9 mb-1">
            The goal of this Project is to combat the high rising trend of
            Internet fraud amongst Boys in Nigeria, through the Boys Quarters
            Digi-Street Hub. Through this Mobile Hubs, enrolled Boys are taught
            viable skills like Data Analytics, Software Engineering, Critical
            Thinking, Machine Learning & Problem Solving, Project Management,
            Artificial Intelligence, BlockChain Technology etc. The goal is to
            take this transformation to their Door Steps. We believe through
            this, we can save a boy at a time.
          </p>
          <p className="text-secondary text-xl leading-9 mt-4">
            This falls under the SDG Goal 4 - Quality Education & SDG Goal 9 -
            Industry, Innovation and Infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheDigiStreetHub;
