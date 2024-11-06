import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import InitiativesDropdown from "@/components/InitiativesDropdown";


const CampusMentour = () => {
  return (
    <div className="bg-white pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className=" md:w-1/2">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              The Campus Men Tour
            </h1>
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-16">
        <Image src="/images/campus-mentour.png" alt="" width={600} height={600}  className=""/>
        <Image src="/images/campus-mentour2.png" alt="" width={600} height={600} />
        </div>
          </div>
        </div>
      </div>
    
  );
};

export default CampusMentour;
