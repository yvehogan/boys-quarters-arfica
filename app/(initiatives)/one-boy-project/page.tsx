import React from "react";
import Image from "next/image";
import InitiativesDropdown from "@/components/InitiativesDropdown";

const OneBoyProject = () => {
  return (
    <div className="bg-white w-full md:px-28 px-4 mt-24 text-secondary">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <InitiativesDropdown />
          <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
            The One Boy Project
          </h1>
          <p className="mt-4 text-lg">
            As at January 2020, the educeleb.com reported that there are more
            boys out of school than girls in Nigeria. According to the report,
            Kano State leads with 748,468 boys, in comparison with the 6,340,261
            Boys who are out of school in Nigeria.
          </p>
          <p className="mt-4 text-lg">
            This project seeks to EDUCATE one Boy at a time. This sponsorship
            programme would focus on Boys across different cities in Africa.
            Boys whose family aren&rsquo;t financial able to foot the basic education
            bills or do not have immediate access to education in their area.
          </p>
          <p className="mt-4 text-lg">This falls under the SDG Goal 4 - Quality Education</p>
        </div>
        <div className="">
          <Image
            src="/images/one-boy-project.png"
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

export default OneBoyProject;
