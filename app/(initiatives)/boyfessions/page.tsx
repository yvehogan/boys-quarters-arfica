import InitiativesDropdown from "@/components/InitiativesDropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Boyfessions = () => {
  return (
    <div className="bg-white w-full md:px-28 px-4 mt-24 pb-10 text-secondary">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <InitiativesDropdown />
          <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
            Boyfessions
          </h1>
          <p className="mt-4 text-lg">
            The Boyfessions is a compendium of healthy confessions for Boys and
            everyone who loves them. This book helps provide clarity on the
            issue of Sexual abuse of the Boy Child and also profers answers to
            some teething issues faced by the Boy Child tribe.
          </p>
          <p className="mt-4 text-lg">This mini-book would serve as a crusade mechanism in furthering our Strategic Pillars of impact;</p>
          <p className="mt-4 text-lg">Leadership, Education, Empowerment and Advocacy.</p>
          <p className="mt-4 text-lg mb-8">Download and Enjoy the read!</p>
          <Button
            className="bg-transparent border border-primary text-primary mb-10 md:mb-0"
            size="lg"
            variant="outlinePrimary"
          >
            Download Boyfessions
          </Button>
        </div>
        <div className="">
          <Image
            src="/images/boyfession.png"
            width={500}
            height={500}
            alt="speaker"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Boyfessions;
