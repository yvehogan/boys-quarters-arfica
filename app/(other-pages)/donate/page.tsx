import DonateOnline from "@/components/donate/DonateOnline";
import HowToDonate from "@/components/donate/HowToDonate";
import HowToHelp from "@/components/donate/HowToHelp";
import Image from "next/image";
import React from "react";

const Donate = () => {
  return (
    <>
    <div className="bg-white md:px-28 px-4">
      <div className="w-full md:max-w-4xl">
        <h2 className="text-secondary font-bold text-4xl md:text-[50px] mb-10">
          Transform a boy, touch the world
        </h2>
        <p className="text-lg">
          We truly believe that the Boy Child Transformation movement
          isn&rsquo;t a 100 Metre Dash but a Marathon, and the unflinching
          support of our amazing donors across the world has been making these
          things happen.{" "}
        </p>
        <p className="mt-4 text-lg">
          You can make donations and support our initiatives by donating, using
          your preferred donation platform. We would also appreciate that you
          fill the form below for us to share an appreciation note and keep you
          up to speed with the development on every of our projects.
        </p>
      </div>
      <div className="w-full rounded-lg overflow-hidden mb-4 mt-10">
      <Image 
        src="/images/get-involved.png"
        alt=''
        width={400}
        height={400}
        className="w-full h-auto object-cover"
        quality={100}
        priority={false}
      />
    </div>
    </div>
    <HowToDonate />
    <DonateOnline />
    <HowToHelp />
    </>

  );
};

export default Donate;
