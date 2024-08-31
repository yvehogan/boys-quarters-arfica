import { vision } from '@/components/data/initiatives';
import { sabi1, sabi2 } from '@/public/exports';
import Image from 'next/image';
import React from 'react';

const ProjectSabi = () => {
  return (
    <div className='flex flex-col gap-y-10 pb-10 text-secondary w-full'>
      <div className='flex flex-col xl:flex-row justify-between gap-10 mb-10'>
        <div>
          {' '}
          <h1 className='text-secondary md:w-[555px] font-bold text-4xl md:text-[64px] md:leading-[78px]'>
            PROJECT SABI
          </h1>
          <div className='bg-primary h-[7px] mt-3 w-[66px]' />
        </div>
        <div className='text-xl'>
          <p>
            This project answers the seemingly simple but
            complex question,{' '}
            <span className='font-semibold'>
              “Shey you sabi?”
            </span>{' '}
            A pidgin-english, Nigerian expression of “Do you
            know?” If further broken down, for us, it means
            “what are you doing to educate local communities
            on the effects and dimensions of domestic and
            sexual abuse?”
          </p>
        </div>
      </div>
      <div className='my-10 flex xl:flex-row flex-col justify-between gap-10'>
        <Image
          src={sabi1}
          alt='happy people'
          priority
        />
        <Image
          src={sabi2}
          alt='happy people'
          priority
        />
      </div>
      <div className='my-14 flex xl:flex-row flex-col items-start justify-between gap-10'>
        <div className='flex gap-x-4 items-center whitespace-nowrap xl:w-[50%]'>
          <div className='bg-primary w-[7px]  h-12' />
          <h1 className='text-secondary font-bold text-4xl md:text-[48px] md:leading-[40px]'>
            Our Story
          </h1>
        </div>
        <div className='text-xl xl:w-[80%] flex flex-col gap-1'>
          <p>
            This is our first step into a grassroot
            engagement with families on what Domestic and
            Sexual Violence entails, the impact it has on
            the victim, children and the society at large,
            their role as responders and the need for them
            to condemn such acts when it comes to their
            attention.
          </p>
          <p>
            With over 200 families reached in Abuja, Ibadan,
            Lagos and Minna, we strongly believe that this
            campaign will shift social norms and attitudes
            about parenting and family orientation in
            Nigeria; and working with men and boys and
            organizations in Nigeria to campaign against
            gender-based violence, and in that way
            contribute to women empowerment and the
            promotion of gender equality.
          </p>
          <p>
            The end-goal of this Project is to metamorphose
            into a SABI Town-Hall Engagement with different
            families across different religious backgrounds
            and societal stances interacting and having
            insightful conversations on topics related to
            domestic and sexual violence.
          </p>
        </div>
      </div>
      <div className='my-14 flex xl:flex-row flex-col items-start justify-between gap-10'>
        <div className='flex gap-x-4 items-center xl:w-[52%]'>
          <h3 className='text-secondary text-start font-bold text-4xl md:text-[40px] md:leading-[55px]'>
            The core{' '}
            <span className='text-primary'>vision</span> of
            this project is centered around the key areas
            highlighted
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px] xl:w-[80%]'>
          {vision.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-[10px] w-full'
            >
              <div className='h-[57px] w-[57px] rounded-[8px] bg-lightishOrange' />
              <p className='text-xl'>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='my-10 flex justify-center items-center'>
        <div className='flex flex-col gap-5  items-center'>
          <p className='text-xl'>Impact Demographic</p>
          <div className='bg-primary w-[44px]  h-[4px]' />
          <div className='flex flex-col  items-center mt-4 gap-5'>
            <p className='text-[64px] leading-[35px] font-semibold'>
              57
            </p>
            <p className='text-xl'>Families</p>
          </div>
        </div>
      </div>
      <div className='my-20 flex justify-center items-center'>
        <button className='text-primary border border-primary py-[30px] md:px-[70px] rounded-[20px] px-[40px] md:text-xl'>
          Download The Project Sabi Report
        </button>
      </div>
    </div>
  );
};

export default ProjectSabi;
