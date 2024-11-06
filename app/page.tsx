import Image from "next/image";
import { Button } from "@/components/ui/button";

import Footer from "@/components/Footer";
import HeroSectionCarousel from "@/components/Homepage/HeroSectionCarousel";
import StatsDisplay from "@/components/Homepage/StatsDisplay";
import AboutSection from "@/components/Homepage/AboutSection";
import LeadershipSection from "@/components/Homepage/LeadershipSection";
import EducationSection from "@/components/Homepage/EducationSection";
import EmpowermentSection from "@/components/Homepage/EmpowermentSection";
import AdvocacySection from "@/components/Homepage/AdvocacySection";
import SlidingCarousel from "@/components/Homepage/SlidingCarousel";
import DonationCounter from "@/components/Homepage/DonationCounter";

export default function Home() {
  return (
    <>
      <HeroSectionCarousel/>
      <div className="w-full bg-[#FAFAFA] py-10 lg:py-28 px-4 md:px-28">
      <StatsDisplay />
      <AboutSection />
      </div>
      <LeadershipSection />
      <EducationSection />
      <EmpowermentSection />
      <AdvocacySection />
      <SlidingCarousel />
      <DonationCounter />
      <Footer />
    </>
  );
}
