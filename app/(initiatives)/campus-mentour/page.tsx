import React from "react";
import Header from "@/components/Header";
import Image from "next/image";


const CampusMentour = () => {
  return (
    <div className="bg-white">
      <div className="">
        <h3 className="text-[32px] text-secondary font-bold text-5xl md:text-[64px] md:leading-[78px]'">THE CAMPUS MENTOUR</h3>
        <div className="h-1 w-12 bg-primary mt-2 mb-4"></div>
        <div className="flex flex-col items-center my-24">
        <Image src="/images/campus-mentour.png" alt="" width={600} height={400}  className="mb-16"/>
        <Image src="/images/campus-mentour2.png" alt="" width={600} height={400} />
        </div>
      </div>
      
    </div>
  );
};

export default CampusMentour;
