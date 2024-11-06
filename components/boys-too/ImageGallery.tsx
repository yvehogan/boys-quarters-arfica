"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Location = 'LOKOJA' | 'AKURE' | 'ABUJA' | 'OGUN' | 'MINNA' | 'ILORIN' | 'IFE' | 'IBADAN' | 'EKITI' | 'EDO' | 'AKUNGBA';

interface ImageData {
  LOKOJA: string[];
  AKURE: string[];
  ABUJA: string[];
  OGUN: string[];
  MINNA: string[];
  ILORIN: string[];
  IFE: string[];
  IBADAN: string[];
  EKITI: string[];
  EDO: string[];
  AKUNGBA: string[];
}

interface LocationButtonProps {
  location: Location;
  isActive: boolean;
  onClick: () => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({ location, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-colors font-medium ${
      isActive
        ? ' text-black'
        : ' text-[#808080]'
    }`}
  >
    {location}
  </button>
);

const ImageGallery: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location>('LOKOJA');

  const locations: Location[] = ['LOKOJA', 'AKURE', 'ABUJA', 'OGUN', 'MINNA', 'ILORIN', 'IFE', 'IBADAN', 'EKITI', 'EDO', 'AKUNGBA'];
  
  const images: ImageData = {
    LOKOJA: [
      '/images/boys2-gallery/lokoja1.png',
      '/images/boys2-gallery/lokoja2.png',
      '/images/boys2-gallery/lokoja3.png',
      '/images/boys2-gallery/lokoja4.png',
      '/images/boys2-gallery/lokoja5.png',
      '/images/boys2-gallery/lokoja6.png',
      '/images/boys2-gallery/lokoja7.png',
      '/images/boys2-gallery/lokoja8.png',
      '/images/boys2-gallery/lokoja9.png',
      '/images/boys2-gallery/lokoja10.png',
      '/images/boys2-gallery/lokoja11.png',
      '/images/boys2-gallery/lokoja12.png',
    ],
    AKURE: [
        '/images/boys2-gallery/lokoja1.png',
        '/images/boys2-gallery/lokoja2.png',
        '/images/boys2-gallery/lokoja3.png',
        '/images/boys2-gallery/lokoja4.png',
        '/images/boys2-gallery/lokoja5.png',
    ],
    ABUJA: [
      '/images/boys2-gallery/lokoja4.png',
      '/images/boys2-gallery/lokoja5.png',
      '/images/boys2-gallery/lokoja6.png',
      '/images/boys2-gallery/lokoja7.png',
    ],
    OGUN: [
      '/images/sabi-gallery/lagos1.png',
      '/images/sabi-gallery/lagos2.png',
    ],
    MINNA: [
        '/images/boys2-gallery/lokoja5.png',
      '/images/boys2-gallery/lokoja6.png',
      ],
      ILORIN: [
        '/images/boys2-gallery/lokoja5.png',
      '/images/boys2-gallery/lokoja6.png',
      '/images/boys2-gallery/lokoja5.png',
      '/images/boys2-gallery/lokoja6.png',
      ],
      IFE: [
        '/images/boys2-gallery/lokoja4.png',
      '/images/boys2-gallery/lokoja7.png',
      ],
      IBADAN: [
        '/images/sabi-gallery/lagos1.png',
        '/images/sabi-gallery/lagos2.png',
      ],
      EKITI: [
        '/images/boys2-gallery/lokoja10.png',
      ],
      EDO: [
        '/images/boys2-gallery/lokoja8.png',
      '/images/boys2-gallery/lokoja9.png',
      ],
      AKUNGBA: [
        '/images/boys2-gallery/lokoja8.png',
      '/images/boys2-gallery/lokoja9.png',
      '/images/boys2-gallery/lokoja10.png',
      ],

    };

  const currentImages = images[activeLocation];

  return (
    <Card className="w-full py-16 md:px-28 px-4">
      <CardContent className="">
        {/* Location Navigation */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <p className="text-secondary font-semibold text-[36px]">Gallery</p>
            <div>
          {locations.map((location) => (
              <LocationButton
              key={location}
              location={location}
              isActive={activeLocation === location}
              onClick={() => setActiveLocation(location)}
              />
            ))}
            </div>
        </div>

    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={image}
              alt={`${activeLocation} gallery image ${index + 1}`}
              className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>

export default Gallery;
      </CardContent>
    </Card>
  );
};

export default ImageGallery;