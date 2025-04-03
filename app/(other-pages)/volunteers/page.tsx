// import Image from 'next/image';
// import React from 'react';

// const Volunteer = () => {
//   return (
//     <div className='border border-red-400 -mt-16'>
//       <section className='grid md:grid-cols-2 gap-24 px-4 lg:px-28 pb-6 min-h-[600px]'>
//         <div className='relative w-full h-full'>
//           <Image
//             src='/images/volun.png'
//             alt='Boys Quarters Africa event'
//             layout='fill'
//             objectFit='cover'
//             priority
//           />
//         </div>
//         <div className='space-y-6'>
//           <h2 className='text-[40px] font-bold text-secondary'>
//             Boyfessions
//           </h2>
//           <p className='text-secondary leading-relaxed text-lg'>
//             The Boyfessions is a compendium of healthy
//             confessions for Boys and everyone who loves
//             them. This book helps provide clarity on the
//             issue of Sexual abuse of the Boy Child and also
//             profers answers to some teething issues faced by
//             the Boy Child tribe. This mini-book would serve
//             as a crusade mechanism in furthering our
//             Strategic Pillars of impact; Leadership,
//             Education, Empowerment and Advocacy. Download
//             and Enjoy the read!
//           </p>
//         </div>
//       </section>
//       <section className='grid md:grid-cols-2 gap-24 px-4 lg:px-28 pb-6'>
//         <div className='relative w-full '>
//           <Image
//             src='/images/volun.png'
//             alt='Boys Quarters Africa event'
//             layout='fill'
//             objectFit='cover'
//             priority
//           />
//         </div>
//         <div className='space-y-6'>
//           <h2 className='text-[40px] font-bold text-secondary'>
//             Boyfessions
//           </h2>
//           <p className='text-secondary leading-relaxed text-lg'>
//             The Boyfessions is a compendium of healthy
//             confessions for Boys and everyone who loves
//             them. This book helps provide clarity on the
//             issue of Sexual abuse of the Boy Child and also
//             profers answers to some teething issues faced by
//             the Boy Child tribe. This mini-book would serve
//             as a crusade mechanism in furthering our
//             Strategic Pillars of impact; Leadership,
//             Education, Empowerment and Advocacy. Download
//             and Enjoy the read!
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Volunteer;

const SupportMovement = () => {
  return (
    <div className=' relative -mt-16'>
      <section className='grid md:grid-cols-2 gap-10 relative z-10 md:h-[400px] px-4 lg:px-28 pb-6'>
        {/* Image Section */}
        <div className='relative md:w-[90%] h-full'>
          <img
            src='/images/volun.png'
            alt='Volunteers'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Text Section */}
        <div>
          <div className='flex items-center gap-1'>
            {' '}
            <p className='text-secondary font-bold text-4xl md:text-[40px] relative'>
              Dear{' '}
            </p>
            <div className='relative w-fit'>
              <span className='absolute top-6 left-0 w-full h-4 opacity-25 bg-[#FEAD3A]'></span>
              <h2 className='text-secondary font-bold text-4xl md:text-[40px] relative'>
                Change-Maker,
              </h2>
            </div>
          </div>

          <p className=' mt-6 font-light'>
            Thank you for your passion and interest in
            supporting the Boy Child Transformation
            Movement! We are thrilled to have you consider
            joining us in our mission to empower and
            transform the lives of boys across Africa. Your
            skills, time, and dedication can make a lasting
            impact.
          </p>
          <p className=' mt-6 font-light'>
            To get started, we kindly ask you to complete{' '}
            <a
              href='https://bit.ly/boys-quarter-africa-volunteer'
              className='text-[#FEAD3A]'
              target='_blank'
            >
              this form
            </a>{' '}
            to express your interest in volunteering.
          </p>
          <p className=' mt-6 font-light'>
            If the{' '}
            <a
              href='https://bit.ly/boys-quarter-africa-volunteer'
              className='text-[#FEAD3A]'
              target='_blank'
            >
              form
            </a>{' '}
            indicates that we are not currently accepting
            volunteers, please don&apos;t be discouraged!
            There are still many ways to get involved. Your
            presence and support on the ground can make a
            world of difference.
          </p>
        </div>
      </section>

      <section className='bg-[#16222E] text-white text-center py-20 md:mt-10 relative'>
        <h3 className='text-2xl sm:text-3xl leading-[47px] tracking-[1%] font-semibold md:mt-24'>
          Other Ways to Support the Movement
        </h3>
        <div className='grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto'>
          <div className='flex flex-col items-center gap-[22px]'>
            <img src='/icons/speak.svg' />
            <h4 className='text-xl font-semibold'>
              Advocacy
            </h4>
            <p className='font-light'>
              Spread the word about our cause.
            </p>
          </div>
          <div className='flex flex-col items-center gap-[22px]'>
            <img src='/icons/donate.svg' />
            <h4 className='text-xl font-semibold '>
              Donations
            </h4>
            <p className='font-light'>
              Contribute to our programs and initiatives.
            </p>
          </div>
          <div className='flex flex-col items-center gap-[22px]'>
            <img src='/icons/partner.svg' />
            <h4 className='text-xl font-semibold'>
              Partnerships
            </h4>
            <p className='font-light'>
              Collaborate with us to amplify our impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportMovement;
