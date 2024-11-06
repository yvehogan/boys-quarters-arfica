import React from "react";

const AdvocacySection = () => {
  return (
    <section className="bg-white flex items-center py-24">
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
              <h1 className="text-secondary text-5xl font-bold">Advocacy</h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
            As part of Advocacy, we discovered that Rape is an offence, recognised by our laws but so emotionally segregated to favour the feminine gender. Right now, the criminal code and penal code defined Rape is against female
            </p>

            <p className="text-secondary leading-relaxed text-lg">
            Only a single law which is violent against persons Act define rape to be either against male or female.That's the contradiction in our jurisprudence. We are looking forward to an ideal state where wrong will be wrong irrespective of who did it.
            </p>

            <p className="text-secondary leading-relaxed text-lg">
            Where Rape will be Rape, irrespective of the Gender
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
