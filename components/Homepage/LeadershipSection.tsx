import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="bg-darkBlue flex items-center py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">PILLARS OF IMPACT</span>
            <div className="h-px bg-white w-full max-w-[400px]"></div>
          </div>
              <h1 className="text-white text-5xl font-bold">
                Leadership
              </h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-white leading-relaxed text-lg">
              The principal objective of this Pillar of Impact is to detox the minds of every Boy of the
              'Stereotyped Masculine Leadership' and the damaging toxic masculinity that is
              subconsciously passed on. The sheer feeling that Men are made to lead and Women are
              made to follow birth the spiral disease called 'Misogyny' in our society.
            </p>

            <p className="text-white leading-relaxed text-lg">
              On this Pillar of impact, we engage Boys by teaching them that Leadership is Service
              and not about the Sex or Gender. Leadership isn't synonymous to being a Boy or a Man.
              Leadership isn't about the innate aspiration for office.
            </p>

            <p className="text-white leading-relaxed text-lg">
              At Boys Quarters, we believe if our Boys are taught right, their perception of women and
              familyhood would take a positive turn. In our bid to change the narrative around Gender
              Equality & Human Right, there's a need to tweak the inherited understanding of what
              leadership means to our Boys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;