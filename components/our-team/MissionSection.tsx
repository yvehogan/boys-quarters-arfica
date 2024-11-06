import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-white flex items-center py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-36">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-secondary font-bold whitespace-nowrap">
                  OUR MISSION
                </span>
                <div className="h-px bg-secondary w-full max-w-[400px]"></div>
              </div>
              <p className="text-secondary text-lg">
              Transforming the society by empowering, educating & advocating for one boy at a time.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-secondary font-bold whitespace-nowrap">
                  OUR VISION
                </span>
                <div className="h-px bg-secondary w-full max-w-[400px]"></div>
              </div>
              <p className="text-secondary text-lg">To raise better Boys to become better Men.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
