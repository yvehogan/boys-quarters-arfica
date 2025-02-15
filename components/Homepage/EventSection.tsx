'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const EventSection = () => {
  const router = useRouter();
  return (
    <div className='mt-20'>
      <div className='grid md:grid-cols-2 gap-24 items-center'>
        <div className='space-y-6'>
          <div className='flex items-center gap-4'>
            <span className='text-sm uppercase tracking-wider text-[#161616] font-bold whitespace-nowrap'>
              UPCOMING EVENTS
            </span>
            <div className='h-px bg-[#161616] w-full max-w-[510px]'></div>
          </div>

          <h2 className='text-[40px] font-semibold text-secondary'>
            Boys Summit 2025
          </h2>
          <p className='text-secondary leading-relaxed text-lg'>
            An engaging summit focused on the holistic
            development of the African boy child.
            Participate in interactive workshops, hear from
            inspiring speakers, and connect with a community
            committed to redefining masculinity and
            empowering the next generation.
          </p>
          <Button
            onClick={() => router.push('/event')}
            className='bg-transparent border border-primary text-primary px-10 py-6 flex items-center'
            size='lg'
            variant='outlinePrimary'
          >
            Register Now{' '}
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>

        <div className='relative h-[400px] w-full'>
          <Image
            src='/images/event.png'
            alt='Boys Quarters Africa event'
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default EventSection;
