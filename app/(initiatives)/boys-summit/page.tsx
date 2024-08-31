import { keynoteSpeakers } from '@/components/data/initiatives';
import { boyS, vid1, vid2 } from '@/public/exports';
import Image from 'next/image';
import React from 'react';

const BoysSummit = () => {
  return (
    <div className='flex flex-col gap-y-10 pb-10 text-secondary w-full'>
      <div className=''>
        {' '}
        <h1 className='text-secondary md:w-[555px] font-bold text-4xl md:text-[64px] md:leading-[78px]'>
          INTERNATIONAL BOYS SUMMIT
        </h1>
        <div className='bg-primary h-[7px] mt-3 w-[66px]' />
      </div>
      <div className='flex flex-col lg:flex-row justify-between w-full my-20 gap-[64px]'>
        {' '}
        <Image
          src={boyS}
          alt='picture of boys smiling'
          priority
        />
        <div className='lg:w-[85%] text-lg'>
          <p>
            {' '}
            Boys Quarters Africa hosted Africa&apos;s first
            virtual International Boy-Child Summit on the
            16th of May, 2020. This 5 hours summit was in
            celebration of the boy child and it was themed
            Redefining Masculinity.
          </p>
          <p className='mt-1'>
            This novel initiative had a cumulative audience
            of <span className='font-semibold'>1,780</span>{' '}
            across different cities in Africa and beyond.
            Key talk points were centered around
            MASCULINITY, PARENTING THE BOY CHILD and MENTAL
            HEALTH. The summit also had on board the
            partnership of Cece Yara Foundation and WARIF
            (Women At Risk International Foundation), whose
            representatives extensively spoke about the
            sexual abuse of boys and the attendant
            challenges. The Event was hosted via our
            Instagram platform and moderated by the Founder
            & Lead Execution Officer, Solomon O. Ayodele.
            Here are the videos!
          </p>
        </div>
      </div>
      <div className='flex items-center gap-x-4'>
        <div className='bg-primary w-[7px]  h-12' />
        <h1 className='text-secondary font-bold text-4xl md:text-[64px] md:leading-[78px]'>
          Keynote Speakers
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-[67px] gap-[40px]'>
        {keynoteSpeakers.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-y-1 text-xl'
          >
            <Image
              src={item.pic}
              alt='speakers'
              priority
            />
            <p className='font-semibold mt-1'>
              {item.name}{' '}
            </p>
            <p className='text-lg'>{item.role}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center my-14'>
        {' '}
        <p className='text-lg whitespace-nowrap text-center md:text-3xl font-semibold'>
          Videos below
        </p>
        <div className='bg-primary h-[7px] mt-3 w-[66px]' />
      </div>
      <div className='mb-10 mt-8 w-full flex gap-8 lg:flex-row flex-col justify-between'>
        <Image
          src={vid1}
          width={500}
          height={500}
          alt='speaking man'
          priority
        />
        <Image
          src={vid2}
          width={500}
          height={500}
          alt='speaking man'
          priority
        />
      </div>
      <div className='my-20 flex justify-center items-center'>
        <button className='text-primary border border-primary py-[30px] md:px-[70px] rounded-[20px] px-[40px] md:text-lg'>
          Download The International Boy Child Summit Report
        </button>
      </div>
    </div>
  );
};

export default BoysSummit;
