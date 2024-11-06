import ImageGallery from "@/components/boys-too/ImageGallery";
import InitiativesDropdown from "@/components/InitiativesDropdown";
import { Button } from "@/components/ui/button";
import { boys1 } from "@/public/exports";
import Image from "next/image";
import React from "react";

const BoysToo = () => {
  return (
    <>
    <div className="pb-10 text-secondary w-full md:px-28 px-4 mt-24">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <InitiativesDropdown />
          <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
            The #BoysToo Campaign
          </h1>
          <p className="mt-4 text-lg">
            The BoysToo Campaign is one of our Flagship Project and this falls
            under the pillar of &lsquo;Advocacy&rsquo;. The principal intent is
            to bring to fore the menace of Sexual Abuse of the Boy Child. We
            believe Abuse is Abuse, irrespective of the Gender.
          </p>
          <p className="mt-4 mb-16 text-lg">
            Our goal is to take Sexual Education to the Boys, sensitize them on
            the Menace Of Sexual Abuse on their minds and reiterate the Power Of
            SPEAKING UP. We take this crusade to schools, in other bridge the
            gap of societal background and religious inclination. This project
            afford us the opportunity of gathering data on this cancerous act of
            Sexual abuse of the Boy Child.
          </p>
          <Button
              className="bg-transparent border border-primary text-primary mb-16 md:mb-0"
              size="sm"
              variant="outlinePrimary"
            >
              Download The #BoysToo Campaign Report
            </Button>
        </div>
        <div className="">
          <Image src={boys1} width={500} height={500} alt="speaker" priority />
        </div>
      </div>
    </div>
    <ImageGallery />
    </>
  );
};

export default BoysToo;
