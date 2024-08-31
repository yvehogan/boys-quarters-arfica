import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const OneBoyProject = () => {
  return (
    <div className="bg-white">
      <div className="">
        <h3 className="text-secondary font-bold text-5xl md:text-[64px] md:leading-[78px]">THE ONE BOY PROJECT</h3>
        <div className="h-1 w-12 bg-primary mt-2 mb-4"></div>
      </div>
      <div className="w-full py-16 md:py-32 lg:px-16 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/one-boy-project.png"
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-secondary text-xl leading-9 mb-1">
            As at January 2020, the educeleb.com reported that there are more
            boys out of school than girls in Nigeria. According to the report,
            Kano State leads with 748,468 boys, in comparison with the 6,340,261
            Boys who are out of school in Nigeria.
          </p>
          <p className="text-secondary text-xl leading-9">
            This project seeks to EDUCATE one Boy at a time. This sponsorship
            programme would focus on Boys across different cities in Africa.
            Boys whose family aren&apos;t financial able to foot the basic education
            bills or do not have immediate access to education in their area.
            This falls under the SDG Goal 4 - Quality Education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneBoyProject;
