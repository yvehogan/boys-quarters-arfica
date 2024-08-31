import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const images = [
    {src: "/images/exchange3.png", alt: "Activity"},
    {src: "/images/exchange4.png", alt: "Acitvity"},
    {src: "/images/exchange5.png", alt: "Activity"}
]

const TheExchange = () => {
  return (
    <div className="bg-white">
      <div className="">
        <h3 className="text-secondary font-bold text-5xl md:text-[64px] md:leading-[78px]">THE EXCHANGE</h3>
        <div className="h-1 w-12 bg-primary mt-2 mb-4"></div>
      </div>
      <div className="w-full pt-10 md:pt-28 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <p className="text-secondary text-xl leading-9 mb-1">
            The EXCHANGE PROJECT has been positioned to help boys in juvenile
            correctional centres re-integrate into the society without operating
            in a worse state than they were before they got into these remand
            homes.
          </p>
          <p className="text-secondary text-xl leading-9">
            The intentional use of the word &lsquo;Exchange&rsquo; is to
            emphasize the need for Boys to exchange their pains for purpose and
            their guilt for a budding greatness within them. This project
            currently runs in partnership with the Ministries of Women Affairs &
            Social Works across different states of the federation. In the last
            two years, we have successfully activated a total of 550 boys with
            the EXCHANGE PROJECT at two(2) correctional homes in Nigeria,
            namely;
          </p>
          <ul className="list-disc pl-8 text-secondary text-xl leading-9">
            <li>
              Special Correctional Centre for Boys, Oregun Ikeja, LAGOS STATE,
              on the 28th of December, 2018 and;
            </li>
            <li>
              Juvenile & Child Care Unit, Ijokodo Ibadan, OYO STATE, on the 28th
              of December 2019.
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/exchange1.png"
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="w-full py-32 flex flex-col-reverse lg:flex-row gap-8 justify-between">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/exchange2.png"
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-secondary text-xl leading-9 mb-1">
            We have just recently secured the partnership of the OGUN STATE
            government to activate the EXCHANGE PROJECT at the Special
            Correctional Centre for Boys, Abeokuta, OGUN STATE, scheduled to
            hold on the 28th of December, 2020.
          </p>
          <p className="text-secondary text-xl leading-9">
            The fall-off of the twin engagements in LAGOS and OYO precipitated
            the passion to commence a long lasting and sustainable project that
            would empower the boys to become valuable and responsible citizens.
            Hence, the &lsquo;The Exchange TraDigital Transformation Academy' at
            the Special Correctional Centre for Boys in Ikeja and Juvenile &
            Child Care Unit, Ijokodo Ibadan Oyo State.
          </p>
          <p className="text-secondary text-xl leading-9">
            The Exchange TraDigital Transformation Academy is a 6-Month skill
            and value acquisition programme for Boys in remand and correctional
            homes. The Academy is positioned to principally prepare these Boys
            for the Future of Work (most importantly, when they leave the house)
            and train those who may not be able to catch Digital skills on the
            identified skills they may be interested in.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-16">
            <h3 className="text-secondary font-semibold text-5xl lg:text-[64px] md:leading-[78px] text-center">
              The Exchange Lagos
            </h3>
            <div className="h-2 w-16 bg-primary"></div>
          </div>
          <div className="flex gap-2 justify-between mb-32 lg:px-16 overflow-hidden">
          {images.map((item, index) => (
        <Image key={index} src={item.src} alt={item.alt} width={350} height={350} />
      ))}
          </div>
    </div>
  );
};

export default TheExchange;
