import React from "react";

const HowToDonate = () => {
  return (
    <section className="bg-darkBlue flex items-center py-24 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  HOW TO DONATE
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-white space-y-6">
            <p className="">
            Donations can be made via bank transfer or cheque to the bank detailed outlined below:
            </p>
            <p className="mb-2">
            Bank Name: Stanbic IBTC Bank Plc
            </p>
            <p className="">
            Account Number: 0034494786
            </p>
            <p className="mb-2">
            Account Name: Boy Child Reformation Initiative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToDonate;
