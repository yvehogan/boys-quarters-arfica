import { initiatives1 } from '@/components/data/initiatives';
import { boys1 } from '@/public/exports';
import Image from 'next/image';
import React from 'react';

const BoysToo = () => {
  return (
    <div className='flex flex-col gap-y-10 pb-10 text-secondary w-full'>
      <div>
        {' '}
        <h1 className='text-secondary font-bold text-5xl md:text-[64px] md:leading-[78px]'>
          THE #BoysToo
        </h1>
        <div className='bg-primary h-[7px] mt-3 w-[66px]' />
      </div>
      <div className='flex flex-col xl:flex-row justify-between w-full my-20 gap-[64px]'>
        {' '}
        <Image
          src={boys1}
          alt='picture of boys smiling'
          priority
        />
        <div className='xl:w-[85%] text-lg'>
          <p>
            The BoysToo Campaign is one of our Flagship
            Project and this falls under the pillar of
            &apos;Advocacy&apos;. The principal intent is to
            bring to fore the menace of Sexual Abuse of the
            Boy Child. We believe Abuse is Abuse,
            irrespective of the Gender. Our goal is to{' '}
            <span className='font-semibold'>
              take Sexual Education to the Boys, sensitize
              them on the Menace Of Sexual Abuse on their
              minds and reiterate the Power Of SPEAKING UP.
            </span>{' '}
            We take this crusade to schools, in other bridge
            the gap of societal background and religious
            inclination. This project afford us the
            opportunity of gathering data on this cancerous
            act of Sexual abuse of the Boy Child.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 md:gap-[67px] gap-[40px]'>
        {initiatives1.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-y-1 text-xl'
          >
            <Image
              src={item.icon}
              alt='evidience'
              priority
            />
            <p>
              {item.title}{' '}
              <span className='font-semibold'>
                {item.span}
              </span>
            </p>
            <p>{item.state}</p>
          </div>
        ))}
      </div>
      <div className='my-20 flex justify-center items-center'>
        <button className='text-primary border border-primary py-[30px] md:px-[70px] rounded-[20px] px-[40px] md:text-lg'>
          Download BoysToo Campaign Report
        </button>
      </div>
    </div>
  );
};

export default BoysToo;
