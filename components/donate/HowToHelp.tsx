import React from "react";

const HowToHelp = () => {
  return (
    <section className="bg-darkBlue flex items-center py-24 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  HOW TO HELP
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-white space-y-6">
            <p className="text-lg">
              You can help us reach 1,000 Families in Nigeria, through our
              PROJECT SABI campaign. Support BOYS QUARTERS AFRICA with your
              donations as we embark on a street by street awareness and
              sensitization of Boys/Men, including Women and Girls. We can take
              the news and information beyond twitter handle and Instagram
              feeds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
