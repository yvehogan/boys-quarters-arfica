import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/video-placeholder.png"
            alt="Boys Quarters Africa volunteers"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-[#161616] font-bold whitespace-nowrap">About us</span>
            <div className="h-px bg-[#161616] w-full max-w-[510px]"></div>
          </div>
          
          <h2 className="text-[40px] font-semibold text-secondary">Our Origin Story</h2>
          <p className="text-secondary leading-relaxed text-lg">
            Boys Quarters Africa is a volunteer driven Boy-child transformation
            movement, with the vision to be an inspiring bridge of transition for every
            African Boy Child, by redefining masculinity through Empowering and
            Educating Projects.
          </p>
          <Button
            className="bg-transparent border border-primary text-primary px-10 py-6 flex items-center"
            size="lg"
            variant="outlinePrimary"
          >
            Read more <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;