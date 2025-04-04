import Image from "next/image";
import React from "react";

const ImpactReport: React.FC = () => {
  return (
    <div className="pb-12">
      <section>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-6">
            <h2 className="text-[40px] font-bold text-secondary">
              Our Impact Report
            </h2>
            <p className="text-secondary leading-relaxed text-lg">
              This Impact Report is a reflection of our journey so far, a
              comprehensive look at the lives we have touched, the initiatives
              we have championed, and the partnerships that have strengthened
              our mission. It highlights our achievements, the lessons we have
              learned, and the future we envision.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              As we prepare to relaunch BQA with renewed energy and purpose,
              this report stands as both a celebration of our past successes
              and a commitment to the transformative work that lies ahead.
            </p>
            <a
              href="/Boys Quarters Africa.pdf"
              download
              className="bg-transparent border border-primary text-primary px-10 py-6 flex items-center h-11 rounded-lg max-w-[270px]"
            >
              Download Impact Report
            </a>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/resource1.png"
              alt="Boys Quarters Africa event"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactReport;
