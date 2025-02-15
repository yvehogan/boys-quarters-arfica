import React from 'react';
import Image from 'next/image';

const FounderSection = () => {
  return (
    <div className='mt-20 md:pl-20 pl-4'>
      <div className='grid md:grid-cols-2 gap-24 '>
        <div className='space-y-6'>
          <h2 className='text-[40px] font-semibold text-secondary'>
            About the Founder
          </h2>

          <p className='text-secondary leading-relaxed text-base'>
            Solomon Oluwatobi Ayodele is a crusader of a new
            culture, new dynasty, new set of ideals to
            liberate the black man not from colonialism or
            white supremacy, but from his own limiting
            thoughts and stupid culture of laziness, lack of
            timing, satisfaction with being consumers and
            lack of capacity to govern himself because he
            cannot think beyond what to eat.
          </p>

          <p className='text-secondary leading-relaxed text-base'>
            He is an experienced Technology and Product
            Innovation Leader with over a decade experience
            across Business Analysis, Strategy, Corporate
            Transformation, Data Analysis, Executive
            Management, IT Project Management & Product
            Management. He is the Founder of Boy Child
            Transformation Movement - a Global Boy Child
            Advocacy movement and he greatly contributed to
            this cause as a Gender-Based Violence Expert,
            through Pan African Projects like Project SABI -
            mobilizing thousands of Men as allies in ending
            violence against women and girls.
          </p>

          <p className='text-secondary leading-relaxed text-base'>
            As an impact investor, he sits on the Board of 4
            Organizations, spanning across Health, Education
            and Financial Services, and he uses his over 10
            years' experience in shaping culture, raising
            new breeds of Disruptors and galvanizing change
            makers across Africa.
          </p>
        </div>

        <div className='relative h-[600px] w-full'>
          <Image
            src='/images/founder.png'
            alt='solomon Ayodele'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
