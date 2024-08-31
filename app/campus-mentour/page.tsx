import React from "react";
import Header from "@/components/Header";
import Image from "next/image";


const CampusMentour = () => {
  return (
    <div className="bg-white px-8 md:px-20">
      <Header />
      <div className="mt-16">
        <p className="text-primary text-xl mb-3">Our Initiatives</p>
        <h3 className="text-[32px] md:text-[48px] font-bold">THE CAMPUS MENTOUR</h3>
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
