import React from "react";

const GoalsSection = () => {
  return (
    <section className="bg-darkBlue flex items-center h-screen">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider text-white font-bold whitespace-nowrap">
                  OUR GOALS
                </span>
                <div className="h-px bg-white w-full max-w-[400px]"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
            <ul className="text-white space-y-6 list-disc pl-5">
                <li className="">To mobilize Young Men who will contribute toward ending the years of countless biases against Girls and Women.</li>
                <li className="">To advocate for every African Boy-Child who has been subjected to several forms of violence. (Domestic, Emotional and Sexual).</li>
                <li className="">To detox the minds of every boy child that have been immense in the worrisome idea of stereotypical masculine leadership. i.e. a sense that Leadership is Sex & Gender.</li>
                <li className="">To raise an awareness on the silent but cancerous menace of sexual abuse of the Boy Child.</li>
                <li className="">To Empower Boys behind bars and those who already lose hope in themselves and their future. By inspiring them to Exchange their Pains for Purpose, guilt for greatness etc.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
