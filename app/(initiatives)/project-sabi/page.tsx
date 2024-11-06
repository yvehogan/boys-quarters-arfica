import InitiativesDropdown from "@/components/InitiativesDropdown";
import ImageGallery from "@/components/sabi-project/ImageGallery";
import WhyThis from "@/components/sabi-project/WhyThis";
import { Button } from "@/components/ui/button";
import { sabi1 } from "@/public/exports";
import Image from "next/image";
import React from "react";

const ProjectSabi = () => {
  return (
    <>
    <div className="bg-white w-full md:px-28 px-4 mt-24 pb-10 text-secondary">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <InitiativesDropdown />
          <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
            Project SABI
          </h1>
          <p className="mt-4 text-lg">
            This project answers the seemingly simple but complex question,
            “Shey you sabi?” A pidgin-english, Nigerian expression of “Do you
            know?” If further broken down, for us, it means “what are you doing
            to educate local communities on the effects and dimensions of
            domestic and sexual abuse?”
          </p>
          <p className="mt-4 mb-24 text-lg">
            This is our first step into a grassroot engagement with families on
            what Domestic and Sexual Violence entails, the impact it has on the
            victim, children and the society at large, their role as responders
            and the need for them to condemn such acts when it comes to their
            attention.
          </p>
          <Button
              className="bg-transparent border border-primary text-primary mb-10 md:mb-0"
              size="lg"
              variant="outlinePrimary"
            >
              Download Project SABI Report
            </Button>
        </div>
        <div className="">
          <Image src={sabi1} width={500} height={500} alt="speaker" priority />
        </div>
      </div>
    </div>
      <WhyThis />
      <ImageGallery />
    </>
  );
};

export default ProjectSabi;
