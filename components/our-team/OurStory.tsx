import React from "react";

const OurStory = () => {
  return (
    <section className="bg-darkBlue flex items-center h-scre py-32 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  OUR STORY
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
              <p className="text-white leading-relaxed text-lg md:py-16">
                It is believed that if a Boy is neglected or fed a diet of hate
                and violence it is obvious he will develop into a teenage who is
                misguided and confused. And the next crucial transition into
                manhood will be even more difficult.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-white leading-relaxed text-lg">
              Our vision is to be an inspiring bridge of transition for every
              African Boy Child, by redefining masculinity through Empowering
              and Educating Projects. This vision transcends mere social
              enterprise but a movement to raise a new tribe of Boys who will
              rise to the demands of life and masculinity in general.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
