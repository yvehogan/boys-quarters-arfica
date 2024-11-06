// pages/index.tsx
import React from "react";
import Image from "next/image";

interface Trustee {
  name: string;
  image: string;
  role: string;
}

const trustees: Trustee[] = [
  {
    name: "Solomon O. Ayodele",
    image: "/images/solomon_ayodele.png",
    role: "Founder/Chief Execution Officer",
  },
  {
    name: "Blessing Ojo",
    image: "/images/blessing.png",
    role: "Chief Operations Officer",
  },
  {
    name: "Busayo Fache",
    image: "/images/busayo_fache.png",
    role: "Program Manager",
  },
  {
    name: "Joy James",
    image: "/images/joy.png",
    role: "Brand & Comm. Manager",
  },
  {
    name: "Damilola Lawal",
    image: "/images/damilola.png",
    role: "Finance Manager",
  },
  {
    name: "Nifemi Onifade",
    image: "/images/nifemi.png",
    role: "Civic Engagement Manager",
  },
  {
    name: "Jude Akinyemi",
    image: "/images/jude.png",
    role: "Community Engagement Manager",
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="bg-white py-12 md:px-20 px-4">
      <p className="text-secondary font-bold text-sm mb-5">JOIN US</p>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold mb-8">Meet the team</h2>
        <button className="border border-secondary p-3 rounded-md font-bold text-[#16222E]">
          BECOME A VOLUNTEER
        </button>
      </div>

    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustees.map((trustee, index) => (
          <div
            key={index}
            className="flex flex-col w-full bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="aspect-square relative w-full overflow-hidden">
              <img
                src={trustee.image}
                alt={`${trustee.name}`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border border-t-0 border-gray-200 rounded-b-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {trustee.name}
              </h3>
              <p className="text-base text-gray-600 truncate">
                {trustee.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MeetTheTeam;
