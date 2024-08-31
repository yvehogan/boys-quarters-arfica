import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const FinishingAcademy = () => {
  return (
    <div className="bg-white px-8 md:px-20">
      <Header />
      <div className="mt-16">
        <p className="text-primary text-xl mb-3">Our Initiatives</p>
        <h3 className="text-[32px] md:text-[48px] font-bold w-full md:max-w-xl">
          THE BOYS FINISHING ACADEMY
        </h3>
        <div className="h-1.5 w-12 bg-primary mt-2 mb-4"></div>
        <div className="w-full pt-20 flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/finishing-academy.png"
              alt=""
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full md:w-1/2">
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
