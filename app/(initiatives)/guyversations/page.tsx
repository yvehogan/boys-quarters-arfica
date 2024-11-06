import { guestTopics } from "@/components/data/initiatives";
import Header from "@/components/Header";
import InitiativesDropdown from "@/components/InitiativesDropdown";
import Image from "next/image";
import React from "react";

const GuyVersations = () => {
  return (
    <>
      <div className="pb-10 text-secondary w-full md:px-28 px-4 mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <InitiativesDropdown />
            <h1 className="text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10">
              Guyversations
            </h1>
            <p className="mt-4 text-lg">
              There are basically three elements to these men-themed
              conversations; Uninhibited Openness, Beautiful Vulnerabilities and
              of course, garnering a digital safe space for young men.
            </p>
            <p className="mt-4 text-lg">
            Since the maiden edition on the 12th of April, 2020, we&apos;ve had about 15 Guests, across different walks of life, discussing issues that relate to GUYS! The cumulative digital footprint is about 2,500 audience and traction gained shows the quantum of impact on the minds of young men.
            </p>
            <p className="mt-4 text-lg">
            Previous guests and topics are highlighted below:
            </p>
            <ul className="text-secondary space-y-6 list-disc mt-4 pl-5 text-lg">
                <li className="">UNDERSTANDING THE UNTOLD STRUGGLES OF SEXUALITY by Bisi Alimi.</li>
                <li className="">I WAN BLOW; UNDERSTANDING THE ESSENCE OF FAME & IMPACT by Dr. Wilson Joel.</li>
                <li className="">I WAN BLOW II; UNDERSTANDING THE ESSENCE OF FAME & IMPACT by Gaise Baba.</li>
                <li className="">BOYS WILL BE BOYS; TRACING THE ROOT OF POWER & TOXIC MASCULINITY by Solomon Buchi.</li>
                <li className="">FACING AFRICA&apos;S GOLIATH; YOUR DESIGNATION ON THE BATTLE FIELD by Kayode Adeniji.</li>
                <li className="">NECESSARY REBELLION; MASTERING THE ART OF DEFYING THE NORM by Jimi Odukoya.</li>
                <li className="">W.W.W. (WETIN WOMEN WANT SEF?) by Toju Dami-Oluwatoyinbo.</li>
                <li className="">W.W.W. II (WETIN WOMEN WANT SEF?) by Tolulope &lsquo;Solutions&rsquo; Adejumo.</li>
                <li className="">FUTUR NOLOGY; PLUGGING INTO THE FUTURE WE ARE ALREADY LATE FOR by Kitan David.</li>
                <li className="">POP CULTURE & THE REDEFINITION OF THE 21ST CENTURY MAN by Olumide Oworu, Gaffy & PartyJollof.</li>
            </ul>
          </div>
          <div className="">
            <Image
              src="/images/guyversations.png"
              width={600}
              height={600}
              alt="speaker"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuyVersations;
