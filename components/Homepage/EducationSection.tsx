import React from "react";

const EducationSection = () => {
  return (
    <section className="bg-white flex items-center py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-secondary font-bold whitespace-nowrap">
                  PILLARS OF IMPACT
                </span>
                <div className="h-px bg-secondary w-full max-w-[400px]"></div>
              </div>
              <h1 className="text-secondary text-5xl font-bold">Education</h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
              Under the Pillar, Education, our goal is to empty the street of
              Africa of Young Boys who are subjected to several form of
              violence. (Domestic, Emotional and Sexual).
            </p>

            <p className="text-secondary leading-relaxed text-lg">
              We are of the resolve that Every Child must Go to school.
            </p>

            <p className="text-secondary leading-relaxed text-lg">
              Boys aren&rsquo;t Men yet. Hence, they shouldn&rsquo;t be subjected to
              debasing realities that rid them off their Self Esteem and desired
              future. However, our definition of Education here isn&rsquo;t ABC or 123
              only. It&rsquo;s Music, Drawing, Fashion, Dancing, etc. This is
              basically about transforming their Gifts to Skills and garnish it
              up with Values.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
            Through this pillar, we intend to reach out to disabled Boys- especially in the North.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
