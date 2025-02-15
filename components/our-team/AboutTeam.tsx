import Image from 'next/image';
import React from 'react';

const AboutTeam = () => {
  return (
    <div className='bg-white md:px-28 px-4'>
      <div className='mt-16 max-w-4xl'>
        <div className='relative w-fit'>
          <span className='absolute top-7 left-0 w-full h-5 opacity-25 bg-[#FEAD3A]'></span>
          <h2 className='text-secondary font-bold text-4xl md:text-[50px] relative'>
            About Us
          </h2>
        </div>
        {/* <p className='text-xl text-secondary mt-5'>
          Want to meet the brains behind this? Read our
          stories below or find us on your favorite social
          channel and say hello.
        </p> */}
      </div>
      <div className='flex justify-between flex-col gap-5 md:flex-row md:space-x-5 pt-12 pb-24'>
        {/* <div className="relative w-full md:w-1/2 aspect-square"> */}
        <Image
          src='/images/team1.png'
          alt='team members'
          height={650}
          width={650}
          // layout="fill"
          objectFit='contain'
          className='rounded-lg'
        />
        {/* </div> */}
        {/* <div className="relative w-full md:w-1/2 aspect-square"> */}
        <Image
          src='/images/team2.png'
          alt='team members'
          height={650}
          width={650}
          // layout="fill"
          objectFit='contain'
          className='rounded-lg'
        />
        {/* </div> */}
      </div>
      <div className='space-y-6'>
        <p className='text-secondary leading-relaxed text-lg'>
          Boys Quarters Africa (Registered as Boy-Child
          Reformation Initiative CAC/IT/NO134867) is a
          volunteer driven Boy-child transformation
          movement, missioned with the core objective of
          Educating, Empowering and Advocating for the
          Boychild. Our activities range from providing
          information on Sexual Education and Sexual Abuse
          to the Boy-Child, provide psychosocial & legal
          support for abused boys, create platforms for
          learning the Skills of the future for
          disadvantages boys, reach out to the unreached
          boys in juvenile homes & special correctional
          centres, advocate for the Boy-Child on varying
          grounds, host boot-camps and programmes that
          reorient their minds off the inherited stance of
          toxic masculinity and teach on the unsaid truth
          around Leadership.
        </p>

        <p className='text-secondary leading-relaxed text-lg'>
          Our projects are delivered on a structured level
          of impact, as we operate within 4 Strategic
          pillars of Impact, L.E.A.D:- Leadership,
          Education, Empowerment, and Advocacy. Through our
          Leadership pillar, we intend to detox the minds of
          every Boy of the &lsquo;Stereotyped Masculine
          Leadership&rsquo; and the damaging toxic
          masculinity that is subconsciously passed on from
          generation to generation. Our flagship project on
          Sexual Abuse of the Boy Child, offers up the
          opportunity to bring to fore the damaging reality
          of how much Boys are left behind in the
          conversation. With a growing number of over 100
          Volunteers across the 6 Geo-Political Zones in
          Nigeria and 5 other Africa Countries, we&apos;ve
          engaged 50,850 Boys, specifically through our
          Flagship Project called Boys Too (Bringing to fore
          the menace of Sexual Abuse of the Boy Child).
        </p>
      </div>
      <div className='flex justify-center items-center'>
        {' '}
        <div className='flex flex-col justify-center text-center pt-16  md:max-w-[704px]'>
          <div className='flex justify-center items-center gap-4 '>
            <div className='h-px bg-[#FEAD3A] w-full max-w-[145px]'></div>
            <span className='text-sm uppercase tracking-wider text-[#161616] font-bold whitespace-nowrap'>
              OUR FOUNDER&apos;S VISION
            </span>
            <div className='h-px bg-[#FEAD3A] w-full max-w-[145px]'></div>
          </div>
          <p className='my-7'>
            Our vision is to be an inspiring bridge of
            transition for every African Boy Child, by
            redefining masculinity through Empowering and
            Educating Projects. This vision transcends mere
            social enterprise but a movement to raise a new
            tribe of Boys who will rise to the demands of
            life and masculinity in general.
          </p>

          <div className='flex place-self-center h-px bg-[#FEAD3A] w-full max-w-[145px]' />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
