'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import AccountModal from '@/components/donate/AccountModal';
import SubscribeSection from '@/components/donate/Subscribe';

const Donate = () => {
  const [showAccount, setShowAccount] = useState(false);
  return (
    <div className='w-full bg-[#F7F8FA]'>
       <section className="relative w-full px-4 lg:px-28 flex flex-col">
      <div className="absolute inset-0 bg-[#F2EFEA]"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[30%] bg-[#1A1A1A] hidden md:block"></div>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] py-8 md:py-12">
            <div className="max-w-[500px] ">
              <h1 className="text-black font-bold text-4xl md:text-[50px] leading-tight mb-5">
                Transform a boy, touch the world.
              </h1>
              <p className="font-light text-lg">
                We truly believe that the Boy Child Transformation movement isn&apos;t a 100 Metre Dash but a Marathon,
                and the unflinching support of our amazing donors across the world has been making these things happen.
                <br />
                <br />
                You can make donations and support our initiatives by donating, using your preferred donation platform.
                We would also appreciate that you fill the form below for us to share an appreciation note and keep you
                up to speed with the development on every of our projects.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative">
            <div className="p-4 md:p-8 lg:p-12 xl:p-16 relative z-10">
              <div className="border-2 border-[#F0A83C] rounded-lg overflow-hidden relative">
                <Image
                  src="/images/donate2.png"
                  alt="Children in classroom"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover relative z-[1]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className='px-4 lg:px-28 py-20 md:py-32'>
        <div className='container mx-auto text-center'>
          <h2 className='text-2xl md:text-[40px] font-semibold mb-10 md:mb-20'>
            Kindly choose a method of donation
          </h2>
          <div className='flex flex-col  sm:flex-row justify-center gap-8 sm:gap-10'>
            <button className='sm:w-[300px] p-5 border border-[#FF9B00] rounded-[20px] bg-[#fcf7f0] font-semibold flex flex-col items-start gap-2'>
              <img
                src='/icons/flutter.svg'
                alt='ALATPay'
                className='w-8'
              />
              <div className='w-full mt-4 flex justify-between'>
                ALATPay
                <ArrowRightIcon />
              </div>
            </button>
            <button className='sm:w-[300px] p-5 border border-[#00B460] rounded-[20px] bg-[#e2f7ed] flex flex-col font-semibold items-start gap-2'>
              <img
                src='/icons/goFund.svg'
                alt='GoFundMe'
                className='w-8'
              />{' '}
              <div className='w-full mt-4 flex justify-between'>
                GoFundMe
                <ArrowRightIcon />
              </div>
            </button>
            <button
              onClick={() => setShowAccount(!showAccount)}
              className='sm:w-[300px] p-5 border border-[#7A9EC1] rounded-[20px] bg-[#dfebf7] flex flex-col items-start gap-2'
            >
              <img
                src='/icons/bank.svg'
                alt='Bank Transfer'
                className='w-8'
              />
              <div className='w-full mt-4 flex justify-between'>
                Bank Transfer
                <ArrowRightIcon />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className='bg-[#FEAD3A0D]'></section>
      <SubscribeSection />
      <AccountModal
        isOpen={showAccount}
        onClose={() => setShowAccount(false)}
      />
    </div>
  );
};

export default Donate;

// import DonateOnline from "@/components/donate/DonateOnline";
// import HowToDonate from "@/components/donate/HowToDonate";
// import Image from "next/image";
// import React from "react";

// const Donate = () => {
//   return (
//     <>
//     <div className="bg-white md:px-28 px-4 max-w-[1440px] mx-auto">
//       <div className="w-full md:max-w-4xl">
//         <h2 className="text-secondary font-bold text-4xl md:text-[50px] mb-10">
//           Transform a boy, touch the world
//         </h2>
//         <p className="text-lg">
//           We truly believe that the Boy Child Transformation movement
//           isn&rsquo;t a 100 Metre Dash but a Marathon, and the unflinching
//           support of our amazing donors across the world has been making these
//           things happen.{" "}
//         </p>
//         <p className="mt-4 text-lg">
//           You can make donations and support our initiatives by donating, using
//           your preferred donation platform. We would also appreciate that you
//           fill the form below for us to share an appreciation note and keep you
//           up to speed with the development on every of our projects.
//         </p>
//       </div>
//       <div className="w-full rounded-lg overflow-hidden mb-4 mt-10">
//       <Image
//         src="/images/get-involved.png"
//         alt=''
//         width={400}
//         height={400}
//         className="w-full h-auto object-cover"
//         quality={100}
//         priority={false}
//       />
//     </div>
//     <HowToDonate />
//     <DonateOnline />
//     </div>
//     </>

//   );
// };

// export default Donate;
