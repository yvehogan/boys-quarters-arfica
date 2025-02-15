import React from 'react';
import AboutTeam from '@/components/our-team/AboutTeam';
import Footer from '@/components/Footer';
import DonationCounter from '@/components/Homepage/DonationCounter';
import TrusteeSection from '@/components/our-team/TrusteeSection';
import MeetTheTeam from '@/components/our-team/MeetTheTeam';
import GoalSection from '@/components/our-team/Goals';
import FounderSection from '@/components/our-team/Founder';

const AboutUs = () => {
  return (
    <div className=''>
      <AboutTeam />
      <GoalSection />
      <FounderSection />
      {/* <OurStory /> */}
      {/* <MissionSection /> */}
      {/* <GoalsSection /> */}
      <div className='h-[0.5px] bg-[#B4B4B4] w-full mt-14' />
      <MeetTheTeam />
      <TrusteeSection />
      <DonationCounter />
      <Footer />
    </div>
  );
};

export default AboutUs;
