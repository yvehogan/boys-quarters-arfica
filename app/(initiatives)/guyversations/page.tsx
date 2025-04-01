'use client';
import SuccessModal from '@/components/Event/SuccessModal';
import RegisterModal from '@/components/guyversations/RegisterModal';
import InitiativesDropdown from '@/components/InitiativesDropdown';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const sessions = [
  { type: 'Guyversation Online', date: 'April 2025' },
  { type: 'Guyversation Physical', date: 'May 2025' },
  { type: 'Guyversation Online', date: 'June 2025' },
  { type: 'Guyversation Physical', date: 'July 2025' },
  { type: 'Guyversation Online', date: 'August 2025' },
  { type: 'Guyversation Physical', date: 'September 2025' },
  { type: 'Guyversation Online', date: 'October 2025' },
  { type: 'Guyversation Physical', date: 'November 2025' },
];

const GuyVersations = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <>
      <div className='pb-10 text-secondary w-full md:px-28 px-4 mt-24'>
        <div className='flex flex-col lg:flex-row justify-between md:gap-8 '>
          <div className='lg:w-1/2 mb-10 md:mb-0'>
            <InitiativesDropdown />
            <h1 className='text-secondary font-bold text-4xl md:text-[50px] md:leading-[78px] mt-10'>
              Guyversations
            </h1>
            <p className='md:-mt-2 mt-1 font-semibold text-xl'>
              No Filters. No Judgement. Real Uninhibited
              Space for Men
            </p>
            <p className='mt-6'>
              Every man carries weight he wasn't taught how
              to put down. Guyversations creates brotherhood
              circles where men (18+) can:
            </p>
            <ul className='text-secondary mt-1 space-y-1 list-disc pl-5  mb-10'>
              <li className=''>
                Speak freely about pressures, fears and
                silent struggles.
              </li>
              <li className=''>
                Learn & unlearn outdated scripts about
                masculinity.
              </li>
              <li className=''>
                Connect with brothers walking similar paths.
              </li>
              <li className=''>
                Grow tools for emotional resilience,
                relationships & purpose HOW WE MEET:
              </li>
              <li className=''>
                In-Person Sessions: Monthly curated
                conversations with psychologists and
                mentors.
              </li>
            </ul>
            <Button
              className=''
              size='sm'
              variant='default'
              onClick={() => setShowRegister(!showRegister)}
            >
              Register Now
            </Button>
          </div>
          <div>
            <Image
              src='/images/guyversations.png'
              width={550}
              height={500}
              alt='speaker'
              priority
              className='border border-primary rounded-lg p-2'
            />
          </div>
        </div>
      </div>
      <section className='bg-[#16222E] w-full md:px-28 px-4 py-10 mt-6 '>
        <h1 className='text-center mt-2 mb-14 text-[#F7F8FA] font-semibold text-4xl'>
          Upcoming Guyversation sessions
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  mb-8'>
          {sessions.map((session, index) => (
            <div
              key={index}
              className='border-b border-[#5C5C5C] pb-2 text-[#F2EFEA]'
            >
              <h3 className='text-lg'>{session.type}</h3>
              <p className='font-[300] text-[#C6C6C6]'>
                {session.date}
              </p>
            </div>
          ))}
        </div>
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
    </>
  );
};

export default GuyVersations;
