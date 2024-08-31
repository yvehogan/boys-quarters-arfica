import React from 'react'
import Header from '@/components/Header';
import { ourPeople } from '@/components/data/ourPeople';
import Image from 'next/image';

const OurPeople = () => {
  return (
    <div className="bg-white mb-16">
        <div className="text-center mt-16 mb-24">
          <h2 className="text-secondary font-bold text-4xl md:text-[64px] md:leading-[78px] underlined-heading">OUR PEOPLE</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {ourPeople?.map((people) => (
            <div key={people.name} className="flex flex-col items-center">
              <Image src={people?.imageSrc} alt={people?.name} height={300} width={300} className="w-full h-auto" />
              <p className="text-2xl mt-4 text-secondary font-semibold">{people?.name}</p>
              <p className="text-xl mt-2 text-[#858585] text-center">{people?.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default OurPeople