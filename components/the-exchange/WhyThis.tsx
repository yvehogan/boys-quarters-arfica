import React from "react";

const WhyThis = () => {
  return (
    <section className="bg-darkBlue flex items-center py-32">
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
            <p className="">
              The EXCHANGE PROJECT has been positioned to help boys in juvenile
              correctional centres re-integrate into the society without
              operating in a worse state than they were before they got into
              these remand homes.
            </p>
            <p className="mb-2">
              The intentional use of the word &lsquo;Exchange&rsquo; is to
              emphasize the need for Boys to exchange their pains for purpose
              and their guilt for a budding greatness within them. This project
              currently runs in partnership with the Ministries of Women Affairs
              & Social Works across different states of the federation. In the
              last two years, we have successfully activated a total of 550 boys
              with the EXCHANGE PROJECT at two(2) correctional homes in Nigeria,
              namely;
            </p>
            <ul className="text-white space-y-6 list-disc pl-5">
              <li className="">
                Special Correctional Centre for Boys, Oregun Ikeja, LAGOS STATE,
                on the 28th of December, 2018 and;
              </li>
              <li className="">
                Juvenile & Child Care Unit, Ijokodo Ibadan, OYO STATE, on the
                28th of December 2019.
              </li>
            </ul>
            <p className="">
              We have just recently secured the partnership of the OGUN STATE
              government to activate the EXCHANGE PROJECT at the Special
              Correctional Centre for Boys, Abeokuta, OGUN STATE, scheduled to
              hold on the 28th of December, 2020.
            </p>
            <p className="mb-2">
              The fall-off of the twin engagements in LAGOS and OYO precipitated
              the passion to commence a long lasting and sustainable project
              that would empower the boys to become valuable and responsible
              citizens. Hence, the &lsquo;The Exchange TraDigital Transformation
              Academy' at the Special Correctional Centre for Boys in Ikeja and
              Juvenile & Child Care Unit, Ijokodo Ibadan Oyo State.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThis;
