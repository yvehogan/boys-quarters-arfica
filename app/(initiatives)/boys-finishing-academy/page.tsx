import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { academy } from "@/public/exports";
import InitiativesDropdown from "@/components/InitiativesDropdown";

const FinishingAcademy = () => {
  return (
    <>
      <div className="pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              The Boys Finishing Academy
            </h1>
            <p className="mt-4 text-lg">
              Boyformation Academy is the organization&rsquo;s custom-curated
              boot camp for boys to re-educate them and help them unlearn
              age-long ideologies or debilitating value system. The academy
              seeks to address issues around how Boys see leadership, gender
              roles and their role in ensuring we arrive at the future we
              earnestly desire.
            </p>
            <p className="mt-4 text-lg">
              The module of academy encompasses personal development, dressing,
              gender base violence, sexual abuse of Boys, relationship with
              girl, being domesticated, fatherhood and husband-hood, personal
              hygiene and other future-driven materials.
            </p>
            <p className="mt-4 text-lg">
              A fall off of this Academy is the Men.Start.Action Project- On
              this Project, Boys are rallied to raise funds for the procurement
              of Menstrual Pads for Girls in their locality. They raise the
              funds and go ahead to present these pads to them on a need basis,
              especially for Girls in rural area. This helps the Boys see a
              different narrative and instill in them the discipline to protect
              girls and women.
            </p>
          </div>
          <div className="">
            <Image
              src={academy}
              width={500}
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

export default FinishingAcademy;
