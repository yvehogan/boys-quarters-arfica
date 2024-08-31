import React from 'react'
import Header from '@/components/Header';
import { ourBoard } from '@/components/data/ourBoard';
import Image from 'next/image';

const OurBoard = () => {
  return (
    <div className="bg-white mb-16">
        <div className="text-center mt-16 mb-24">
          <h2 className="text-secondary font-bold text-4xl md:text-[64px] md:leading-[78px] underlined-heading">OUR BOARD</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {ourBoard?.map((board, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={board?.imageSrc} alt={board?.name} height={280} width={280} className="w-full h-auto" />
              <p className="text-2xl mt-4 text-secondary font-semibold">{board?.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default OurBoard