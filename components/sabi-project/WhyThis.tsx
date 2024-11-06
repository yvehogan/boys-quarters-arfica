import React from "react";

const WhyThis = () => {
  return (
    <section className="bg-darkBlue flex items-center py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  WHY DO THIS?
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-white space-y-6">
            <p className="text-lg">
              The end-goal of this Project is to metamorphose into a SABI
              Town-Hall Engagement with different families across different
              religious backgrounds and societal stances interacting and having
              insightful conversations on topics related to domestic and sexual
              violence.
            </p>
            <p className="mb-2 text-lg">The core vision of this Project is centred around the key areas highlighted below:</p>
            <ul className="text-white space-y-6 list-disc pl-5 text-lg">
              <li className="">
              To reach out to boys and their social construct about women and themselves.
              </li>
              <li className="">
              To provide a safe space for women and girls combating sexual and gender based violence.
              </li>
              <li className="">
              To communicate the importance of an equal and safe society, where gender is not a determinant factor in how a human being should be treated.
              </li>
              <li className="">
              To communicate the essence of speaking up against sexual abuse in ALL cases any human tends to find him/herself.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThis;
