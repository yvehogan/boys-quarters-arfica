import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { academy } from "@/public/exports";

const FinishingAcademy = () => {
  return (
    <div className="bg-white pb-20">
      <div className="">
        <h3 className=" text-secondary font-bold text-5xl md:text-[64px] lg:leading-[78px] max-w-3xl">
          THE BOYS FINISHING ACADEMY
        </h3>
        <div className="h-1.5 w-12 bg-primary mt-2 mb-4"></div>
        <div className="w-full pt-20 flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src={academy}
              alt=""
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-secondary text-xl leading-9 mb-1">
              Boyformation Academy is the organization&apos;s custom-curated
              boot camp for boys to re-educate them and help them unlearn
              age-long ideologies or debilitating value system. The academy
              seeks to address issues around how Boys see leadership, gender
              roles and their role in ensuring we arrive at the future we
              earnestly desire.
            </p>
            <p className="text-secondary text-xl leading-9">
              The module of academy encompasses personal development, dressing,
              gender base violence, sexual abuse of Boys, relationship with
              girl, being domesticated, fatherhood and husband-hood, personal
              hygiene and other future-driven materials.
            </p>
            <p className="text-secondary text-xl leading-9">
              A fall off of this Academy is the <span className="font-semibold">Men.Start.Action Project-</span> On
              this Project, Boys are rallied to raise funds for the procurement
              of Menstrual Pads for Girls in their locality. They raise the
              funds and go ahead to present these pads to them on a need basis,
              especially for Girls in rural area. This helps the Boys see a
              different narrative and instill in them the discipline to protect
              girls and women.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishingAcademy;
