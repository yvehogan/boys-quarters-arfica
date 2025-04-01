'use client';
import ImageGallery from '@/components/boys-summit/ImageGallery';
import RegisterModal from '@/components/boys-summit/RegisterModal';
import VideoGallery from '@/components/boys-summit/VideoGallery';
import SuccessModal from '@/components/Event/SuccessModal';
import InitiativesDropdown from '@/components/InitiativesDropdown';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const BoysSummit = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <>
      <div className='pb-10 text-secondary w-full md:px-28 px-4 mt-24'>
        <div className='flex flex-col md:flex-row justify-between md:gap-8'>
          <div className=' md:w-1/2 mb-10 md:mb-0'>
            <InitiativesDropdown />
            <h1 className='text-secondary font-bold text-4xl md:text-[50px] md:leading-[100%] mt-10'>
              International Boys Summit 2025
            </h1>
            <p className='mt-4 text-lg'>
              On{' '}
              <span className='font-bold'>
                Friday, May 16th, 2025,
              </span>{' '}
              Boys Quarters Africa (BQA) will host Africa's
              largest International Boy Child Summit at
              Pistis Hub, Lagos, in celebration of the
              International Day of the Boy Child. This
              landmark event will bring together 5,000
              Physically [20,000 Virtually] young boys,
              educators, and thought leaders to address the
              urgent need to redefine masculinity and
              empower boys to transition purposefully into
              exceptional manhood.
            </p>
            {/* <p className='mt-4 text-lg'>
              This novel initiative had a cumulative
              audience of 1,780 across different cities in
              Africa and beyond. Key talk points were
              centred around MASCULINITY, PARENTING THE BOY
              CHILD and MENTAL HEALTH. The summit also had
              on board the partnership of Cece Yara
              Foundation and WARIF (Women At Risk
              International Foundation), whose
              representatives extensively spoke about the
              sexual abuse of boys and the attendant
              challenges.
            </p>
            <p className='mt-4 text-lg'>
              The Event was hosted via our Instagram
              platform and moderated by the Founder & Lead
              Execution Officer, Solomon O. Ayodele.
            </p> */}

            <Button
              className='mt-8'
              size='sm'
              variant='default'
              onClick={() => setShowRegister(!showRegister)}
            >
              Register Now
            </Button>
          </div>
          <div className=''>
            <Image
              src='/images/boy2-summit.png'
              width={400}
              height={10}
              alt='speaker'
              priority
            />
          </div>
        </div>
      </div>
      <VideoGallery />
      <ImageGallery />

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

export default BoysSummit;
