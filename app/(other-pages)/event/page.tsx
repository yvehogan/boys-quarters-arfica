'use client';

import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';
import RegisterModal from '@/components/Event/RegisterModal';
import SuccessModal from '@/components/Event/SuccessModal';

const Event = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className='w-full'>
      <section className='relative  h-screen overflow-hidden'>
        {/* Carousel Background */}
        <div className='absolute inset-0 w-full h-screen'>
          <Image
            src='/images/eventBg.png'
            alt=''
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>

        {/* Content */}
        <div className='relative z-50 w-full px-4 lg:px-28 h-full flex flex-col'>
          <Header />
          <div className='flex-grow flex items-center'>
            <div className='max-w-[550px] border-3'>
              <h1 className='text-white font-bold text-4xl md:text-[50px] leading-tight mb-5'>
                Boys Summit 2025
              </h1>
              <p className='text-white mb-10 text-[20px]'>
                An engaging summit focused on the holistic
                development of the African boy child.
                Participate in interactive workshops, hear
                from inspiring speakers, and connect with a
                community committed to redefining
                masculinity and empowering the next
                generation.
              </p>

              <div className='flex flex-row md:flex-row gap-5'>
                <Button
                  onClick={() =>
                    setShowRegister(!showRegister)
                  }
                  className='bg-primary text-white hover:bg-primary hover:opacity-70'
                  size='lg'
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 lg:px-28 pt-24 pb-6'>
        <h2 className='text-[40px] font-semibold text-secondary'>
          About The Event
        </h2>
        <div className='grid md:grid-cols-2 gap-24 mt-6 items-center'>
          <div className='space-y-6'>
            <p className='text-secondary leading-[30px] text-base'>
              Boys Quarters Africa hosted Africa&apos;s
              first virtual International Boy-Child Summit
              on the 16th of May, 2020. This 5 hours summit
              was in celebration of the boy child and it was
              themed Redefining Masculinity. This novel
              initiative had a cumulative audience of 1,780
              across different cities in Africa and beyond.
              Key talk points were centred around
              MASCULINITY, PARENTING THE BOY CHILD and
              MENTAL HEALTH. The summit also had on board
              the partnership of Cece Yara Foundation and
              WARIF (Women At Risk International
              Foundation), whose representatives extensively
              spoke about the sexual abuse of boys and the
              attendant challenges. The Event was hosted via
              our Instagram platform and moderated by the
              Founder & Lead Execution Officer, Solomon O.
              Ayodele.
            </p>
          </div>
          <div className='relative h-[400px] w-full'>
            <Image
              src='/images/eventAbt.png'
              alt='Boys Quarters Africa volunteers'
              layout='fill'
              objectFit='cover'
              className='rounded-[19px]'
            />
          </div>
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
    </div>
  );
};

export default Event;
