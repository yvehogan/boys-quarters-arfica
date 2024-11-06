import React from "react";

const EmpowermentSection = () => {
  return (
    <section className="bg-darkBlue flex items-center py-32">
      <div className="md:px-28 px-4">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  PILLARS OF IMPACT
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
              <h1 className="text-white text-4xl font-bold">Empowerment</h1>
            </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-white leading-relaxed">
              Under the Empowerment Pillar, we currently run a Year-Long at
              Special Correctional Centre for Boys called &lsquo;THE
              EXCHANGE&rsquo;.
            </p>

            <p className="text-white leading-relaxed">
              Our desire is to see them Exchange their Pains for Purpose,
              weakness for strength etc. We skill up and value Up those Boys and
              help them become amazing citizens.
            </p>

            <p className="text-white leading-relaxed">
              A lot of them got into remand him because of varying issues. At
              some point, we&rsquo;d provide Legal Aid for them and hope to get
              them integrated back into the Society, through our Boys Quarters
              Safe Home — this would be an end to end facility for the
              Transformation, Mind Re-Invention and Future-Skilling for African
              Boys.
            </p>
            <p className="text-white leading-relaxed">
              Our goal is to have these homes across 100 Cities in Africa,
              before 12pm on 31 December, 2030. We had the maiden edition of the
              Exchange in December 2018 at the Special Correctional Centre Boys,
              Lagos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
