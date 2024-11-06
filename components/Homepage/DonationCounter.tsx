"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const DonationCounter: React.FC = () => {
  // Counter state
  const [count, setCount] = useState(50850);

  // Format the count with leading zeros
  const formatCount = (number: number) => {
    return number.toString().padStart(7, '0').split('');
  };

  return (
    <div className="relative justify-center md:justify-between items-center px-4 md:px-24 py-32 h-[50]  mt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/donation-counter.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl">
        <h1 className="text-4xl md:text-[50px] leading-relaxed font-semibold mb-4">Help us get to 1,000,000 children.</h1>
         {/* Buttons */}
         <div className="flex flex-col md:flex-row justify-start items-center mt-8 md:space-x-4">
            <Button
              className="bg-transparent border border-primary text-primary w-full "
              size="lg"
              variant="outlinePrimary"
            >
              Get Involved
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary hover:opacity-70 w-full mt-5 md:mt-0"
              size="lg"
              asChild
            >
              <Link href="/donate">
              Donate
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Counter Display */}
        <div className="flex justify-center space-x-1">
          {formatCount(count).map((digit, index) => (
            <div
              key={index}
              className="bg-black text-white text-2xl md:text-4xl mt-16 lg:mt-0 px-4 py-2 rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationCounter;
