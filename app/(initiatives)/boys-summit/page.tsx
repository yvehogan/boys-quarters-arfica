import ImageGallery from "@/components/boys-summit/ImageGallery";
import VideoGallery from "@/components/boys-summit/VideoGallery";
import InitiativesDropdown from "@/components/InitiativesDropdown";
import Image from "next/image";
import React from "react";

const BoysSummit = () => {
  return (
    <>
      <div className="pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className=" md:w-1/2 mb-10 md:mb-0">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              International Boys Summit
            </h1>
            <p className="mt-4 text-lg">
              Boys Quarters Africa hosted Africa&rsquo;s first virtual International
              Boy-Child Summit on the 16th of May, 2020. This 5 hours summit was
              in celebration of the boy child and it was themed Redefining
              Masculinity.
            </p>
            <p className="mt-4 text-lg">
              This novel initiative had a cumulative audience of 1,780 across
              different cities in Africa and beyond. Key talk points were
              centred around MASCULINITY, PARENTING THE BOY CHILD and MENTAL
              HEALTH. The summit also had on board the partnership of Cece Yara
              Foundation and WARIF (Women At Risk International Foundation),
              whose representatives extensively spoke about the sexual abuse of
              boys and the attendant challenges.
            </p>
            <p className="mt-4 text-lg">
            The Event was hosted via our Instagram platform and moderated by the Founder & Lead Execution Officer, Solomon O. Ayodele.
            </p>
            
          </div>
          <div className="">
            <Image
              src="/images/boys-summit.png"
              width={600}
              height={600}
              alt="speaker"
              priority
            />
          </div>
        </div>
      </div>
      <VideoGallery />
      <ImageGallery />
    </>
  );
};

export default BoysSummit;
