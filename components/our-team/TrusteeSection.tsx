// pages/index.tsx
import React from "react";
import Image from "next/image";

interface Trustee {
  name: string;
  image: string;
}

const trustees: Trustee[] = [
  {
    name: "Solomon O. Ayodele",
    image: "/images/solomon_ayodele.png",
  },
  {
    name: "Victor Adewusi",
    image: "/images/victor.png",
  },
  {
    name: "Ruby Onwudiwe",
    image: "/images/ruby.png",
  },
  {
    name: "Lawrence Oboh",
    image: "/images/lawrence.png",
  },
  {
    name: "Busayo Morakinyo",
    image: "/images/busayo.png",
  },
];

const TrusteeSection: React.FC = () => {
  return (
    <div className="bg-white py-12 md:px-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Board of Trustees</h2>
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
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrusteeSection;