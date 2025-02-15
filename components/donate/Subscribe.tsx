import React from 'react';

const SubscribeSection: React.FC = () => {
  return (
    <section className='bg-[#FEAD3A0D] flex items-center justify-center px-4 lg:px-28 py-20 md:py-32'>
      <div className='relative max-w-2xl text-center'>
        {/* Floating Images */}
        <div className='absolute top-0 -left-28 transform -translate-x-16 -translate-y-6 hidden lg:block'>
          <img
            src='/images/donateA.png'
            alt='Engagement 1'
            className='w-20 h-20 object-cover rounded-md'
          />
        </div>

        <div className='absolute top-0 -right-28 transform translate-x-16 -translate-y-6 hidden lg:block'>
          <img
            src='/images/donateB.png'
            alt='Engagement 2'
            className='w-20 h-20 object-cover rounded-md'
          />
        </div>

        <div className='absolute bottom-0 left-0 transform -translate-x-16 translate-y-6 hidden lg:block'>
          <img
            src='/images/donateC.png'
            alt='Engagement 3'
            className='w-20 h-20 object-cover rounded-md'
          />
        </div>

        <div className='absolute bottom-0 right-0 transform translate-x-16 translate-y-6 hidden lg:block'>
          <img
            src='/images/doanteD.png'
            alt='Engagement 4'
            className='w-20 h-20 object-cover rounded-md'
          />
        </div>

        <div className='md:max-w-[600px] flex flex-col items-center'>
          {/* Heading */}
          <h2 className='text-2xl md:text-[40px] md:leading-[47px] text-[#161616] mb-6 font-semibold'>
            Stay Updated With Our Engagements.
          </h2>

          {/* Form */}
          <form className='flex flex-col gap-4  md:w-[400px]'>
            <input
              type='text'
              placeholder='Name'
              className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none'
            />
            <input
              type='email'
              placeholder='Email Address'
              className='w-full border py-2.5 px-5 rounded-[10px] border-[#BCB078] outline-none'
            />
            <button className='flex self-center px-20 py-5 mt-8 bg-[#FEAD3A] text-white rounded-[12px]'>
              Stay Updated
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
