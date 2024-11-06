import React from "react";
import AboutTeam from "@/components/our-team/AboutTeam";
import OurStory from "@/components/our-team/OurStory";
import MissionSection from "@/components/our-team/MissionSection";
import GoalsSection from "@/components/our-team/GoalsSection";
import Footer from "@/components/Footer";
import DonationCounter from "@/components/Homepage/DonationCounter";
import TrusteeSection from "@/components/our-team/TrusteeSection";
import MeetTheTeam from "@/components/our-team/MeetTheTeam";

const AboutUs = () => {
  return (
    <div className="">
      <AboutTeam />
      <OurStory />
      <MissionSection />
      <GoalsSection />
      <MeetTheTeam />
      <TrusteeSection />
      <DonationCounter />
      <Footer />
    </div>
  );
};

export default AboutUs;
