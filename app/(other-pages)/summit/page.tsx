"use client";
import RegisterModal from "@/components/Event/RegisterModal";
import SuccessModal from "@/components/Event/SuccessModal";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
const speakers = [
  {
    name: "Solomon O. Ayodele",
    title: "Founder, Boys Quarters Africa | Host",
    image: "/images/events/spk1.png",
  },
  {
    name: "Mr. Moruf Oseni",
    title: "MD/CEO, WEMA Bank",
    image: "/images/events/spk2.png",
  },
  {
    name: "Kola Oyeneyin",
    title: "CEO/CIO, Opportunik Global Fund - Keynote Speaker",
    image: "/images/events/spk3.png",
  },
  {
    name: "Joyce Awosika",
    title: "Entrepreneur & Economist. Founder, Oriki Group",
    image: "/images/events/spk4.png",
  },
  {
    name: "Olushola Olaleye",
    title: "Serial Entrepreneur & Speaker",
    image: "/images/events/spk5.png",
  },
  {
    name: "Covenant Odedele",
    title:
      "President, University of Ibadan Students’ Union | 2023 Diana Award Reciepient",
    image: "/images/events/spk6.png",
  },
  {
    name: "Joseph Onalapo (JayOnAir)",
    title: "Digital Creator, OAP & Media Personality",
    image: "/images/events/spk7.png",
  },
  {
    name: "Dami Funso",
    title: "Global Premium Saxophonist",
    image: "/images/events/spk8.png",
  },
];

const partners = [
  "/images/events/part1.svg",
  "/images/events/part2.svg",
  "/images/events/part3.svg",
  "/images/events/part4.svg",
  "/images/events/part5.svg",
  "/images/events/part6.svg",
  "/images/events/part7.svg",
  "/images/events/part8.svg",
];

const Events = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className="w-full bg-[#F2EFEA] flex flex-col gap-3">
      <section className="relative  md:min-h-screen">
        <div className="relative z-50 w-full px-4 lg:px-28  flex flex-col">
          <Header />
          <Image
            src="/images/events/eh1.png"
            alt=""
            height={120}
            width={120}
            priority
            className="hidden md:block absolute top-[10rem] left-32"
          />
          <Image
            src="/images/events/eh2.png"
            alt=""
            height={80}
            width={80}
            priority
            className="hidden md:block absolute top-[10rem] right-[12rem]"
          />

          <div className="flex flex-col mt-12 items-center justify-center">
            <div className=" md:w-[800px] flex text-center flex-col md:gap-[50px] gap-6">
              <h1 className="md:text-7xl text-4xl text-center md:leading-[90px] tracking-tight font-historia ">
                2025 International BoyChild Summit
              </h1>
              <div className="flex items-center gap-1 w-full justify-center ">
                <div className="relative w-fit text-center ">
                  <span className="hidden md:block absolute top-4 left-0  w-full h-4 opacity-25 bg-[#FEAD3A]"></span>
                  <h2 className="text-secondary text-2xl font-medium text-center">
                    Redefining Masculinity - Boys to Wholesome Men
                  </h2>
                </div>
              </div>
              <p className="flex items-center justify-center text-center gap-6 text-lg font-semibold">
                <span>
                  <FaCalendar />
                </span>
                Friday 16 May 2025
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-[50px] items-center justify-center">
            <div className="flex text-center ">
              <Button
                onClick={() => setShowRegister(true)}
                className="bg-primary text-black font-medium hover:bg-primary hover:opacity-70"
                size="lg"
              >
                Register Now
              </Button>
            </div>
            <Image
              src="/images/events/powered.svg"
              alt=""
              height={400}
              width={400}
              priority
              className="mt-14"
            />
          </div>
        </div>
        <Image
          src="/images/events/eh3.png"
          alt=""
          height={60}
          width={60}
          priority
          className="hidden md:block absolute bottom-[6rem] z-50 left-[12rem]"
        />
        <Image
          src="/images/events/eh4.png"
          alt=""
          height={120}
          width={120}
          priority
          className="hidden md:block absolute bottom-10 z-50 right-[12rem]"
        />
        <div className="hidden md:block  relative  w-full">
          <Image
            src="/images/events/bline.png"
            alt=""
            width={400}
            height={400}
            className="absolute bottom-0 left-0 w-full sm:hidden md:block"
            priority
          />
        </div>
      </section>
      <section className="w-full my-10">
        <Image
          src="/images/events/figures.svg"
          alt=""
          width={500}
          height={500}
          className="w-full"
          priority
        />
      </section>
      <section className="relative md:py-10  w-full px-4 lg:px-28  flex flex-col">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between ">
          <div className="md:w-[440px] ">
            <p className="md:text-8xl md:-ml-8 text-4xl  md:leading-[90px] tracking-tight  font-historia ">
              {" "}
              About the Summit
            </p>
          </div>

          <div className="md:w-1/2 md:leading-[30px] tracking-[1%]">
            <p>
              On Friday, May 16th, 2025, Boys Quarters Africa (BQA) will host
              the largest Boy-focused summit in Africa- BQA International Boy
              Child Summit 2025, in celebration of the International Day of the
              Boy Child. This landmark event will bring together 20,000 young
              boys, educators, and thought leaders to address one of the most
              pressing issues of our time: redefining masculinity and empowering
              boys to transition purposefully from boyhood to exceptional
              manhood.
            </p>
            <p className="mt-6 font-semibold">
              Keynote Speech | Panel Session | Debate Competition | Mental
              Health Booth
            </p>
          </div>
        </div>
      </section>
      <section className=" md:py-14 py-10  w-full px-4 lg:px-28 ">
        <Image
          src="/images/events/triple.png"
          alt=""
          width={500}
          height={500}
          className="w-full"
          priority
        />
      </section>
      <section className=" md:py-10 py-10  w-full px-4 lg:px-28 ">
        <p className="text-[#FEAD3A] text-lg font-light text-center">
          OUR SPEAKERS
        </p>
        <h2 className="text-center md:text-5xl text-4xl  md:leading-[60px] tracking-tight font-historia mt-2">
          Get inspired by influential leaders, mentors, and changemakers who are
          shaping the future
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-x-10 mt-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col gap-6 text-[#2F2F2F]">
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={500}
                height={500}
                // fill
                priority
              />
              <div className="text-center">
                <h3 className="text-xl leading-[130%] tracking-[1%] font-semibold ">
                  {speaker.name}
                </h3>
                <p className="text-sm font-medium">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-10 border-t border-t-[#2F2F2F4D]" />
      </section>
      <section className="md:py-8 md:pb-10 py-10  w-full px-4 lg:px-28 ">
        <p className="text-[#FEAD3A] text-lg font-light text-center">
          OUR PARTNERS
        </p>
        <h2 className="text-center md:text-5xl text-4xl  md:leading-[60px] tracking-tight font-historia mt-2">
          We are proud to collaborate with leading brands that share our mission
          of empowering boys.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-14 mt-12">
          {partners.map((partner, index) => (
            <div key={index}>
              <Image
                src={partner}
                alt={partner}
                width={500}
                height={500}
                // fill
                priority
              />
            </div>
          ))}
        </div>
      </section>
      <section className="md:py-8 md:pb-10 py-10  w-full px-4 lg:px-28 text-white bg-[#2F2F2F]">
        <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
          <p className=" md:text-5xl text-4xl  md:leading-[90px] tracking-[1%] font-historia ">
            Are you ready to be part of a life-changing experience?
          </p>
          <div className="  flex text-center ">
            <Button
              onClick={() => setShowRegister(true)}
              className="bg-primary text-black font-medium hover:bg-primary hover:opacity-70"
              size="lg"
            >
              Register Now
            </Button>
          </div>
        </div>{" "}
      </section>

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSuccess={() => {
          setShowRegister(false);
          setShowSuccess(true);
        }}
      />
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default Events;
