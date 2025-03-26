import { guestTopics } from "@/components/data/initiatives";
import Header from "@/components/Header";
import InitiativesDropdown from "@/components/InitiativesDropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GuyVersations = () => {
  return (
    <>
      <div className="pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              Guyversations
            </h1>
            <p className="mt-4 text-lg">
            Every man carries weight he wasn't taught how to put down. Guyversations creates brotherhood circles where men (18+) can:
            </p>
            <ul className="text-secondary space-y-6 list-disc mt-4 pl-5 text-lg mb-10">
                <li className="">Speak freely about pressures, fears and silent struggles.</li>
                <li className="">Learn & unlearn outdated scripts about masculinity.</li>
                <li className="">Connect with brothers walking similar paths.</li>
                <li className="">Grow tools for emotional resilience, relationships & purpose HOW WE MEET:</li>
                <li className="">In-Person Sessions: Monthly curated conversations with psychologists and mentors.</li>
            </ul>
            <Button
              className=""
              size="sm"
              variant="default"
            >
             Register Now
            </Button>
          </div>
          <div className="border border-primary rounded-lg p-2">
            <Image
              src="/images/guyversations.png"
              width={550}
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

export default GuyVersations;
