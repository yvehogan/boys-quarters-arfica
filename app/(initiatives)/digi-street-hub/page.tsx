import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import InitiativesDropdown from "@/components/InitiativesDropdown";

const TheDigiStreetHub = () => {
  return (
    <>
      <div className="bg-white pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2- mb-10 md:mb-0">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              The Digistreet Hub
            </h1>
            <p className="mt-4 text-lg">
              The heightening rate of Cyber Crime amongst Youth has done
              tremendous harm to the image and economy of the African Nations,
              especially nations like Nigeria.
            </p>
            <p className="mt-4 text-lg">
              This project is a proactive measure of enrolling young boys into
              profitable, engaging and life-defining measures, before they
              enmeshed in the murky water of internet fraud. This STEM project
              borders on our objective to skill up 2 Million under-privilege
              African Boys with skills that are in tandem with their
              Counterparts across the world.
            </p>
            <p className="mt-4 text-lg">
              The goal of this Project is to combat the high rising trend of
              Internet fraud amongst Boys in Nigeria, through the Boys Quarters
              Digi-Street Hub. Through this Mobile Hubs, enrolled Boys are
              taught viable skills like Data Analytics, Software Engineering,
              Critical Thinking, Machine Learning & Problem Solving, Project
              Management, Artificial Intelligence, BlockChain Technology etc.
              The goal is to take this transformation to their Door Steps. We
              believe through this, we can save a boy at a time.
            </p>
            <p className="mt-4 text-lg">
            This falls under the SDG Goal 4 - Quality Education & SDG Goal 9 - Industry, Innovation and Infrastructure.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/digi-street-hub.png"
              width={500}
              height={500}
              alt="speaker"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheDigiStreetHub;
