"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Location = 'LAGOS' | 'IBADAN' | 'ABUJA' | 'MINNA';

interface ImageData {
  LAGOS: string[];
  IBADAN: string[];
  ABUJA: string[];
  MINNA: string[];
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
  const [activeLocation, setActiveLocation] = useState<Location>('LAGOS');

  const locations: Location[] = ['LAGOS', 'IBADAN', 'ABUJA', 'MINNA'];
  
  const images: ImageData = {
    LAGOS: [
      '/images/sabi-gallery/lagos1.png',
      '/images/sabi-gallery/lagos2.png',
      '/images/sabi-gallery/lagos3.png',
      '/images/sabi-gallery/lagos4.png',
      '/images/sabi-gallery/lagos5.png',
      '/images/sabi-gallery/lagos6.png',
      '/images/sabi-gallery/lagos7.png',
    ],
    IBADAN: [
      '/images/sabi-gallery/lagos1.png',
      '/images/sabi-gallery/lagos2.png',
      '/images/sabi-gallery/lagos3.png',
      '/images/sabi-gallery/lagos4.png',
      '/images/sabi-gallery/lagos5.png',
    ],
    ABUJA: [
      '/images/sabi-gallery/lagos1.png',
      '/images/sabi-gallery/lagos2.png',
      '/images/sabi-gallery/lagos3.png',
    ],
    MINNA: [
      '/images/sabi-gallery/lagos1.png',
      '/images/sabi-gallery/lagos2.png',
    ],
  };

  const currentImages = images[activeLocation];

  return (
    <Card className="w-full py-24 md:px-28 px-4">
      <CardContent className="">
        {/* Location Navigation */}
        <div className="flex justify-center md:justify-end gap-4 mb-6">
          {locations.map((location) => (
            <LocationButton
              key={location}
              location={location}
              isActive={activeLocation === location}
              onClick={() => setActiveLocation(location)}
            />
          ))}
        </div>

        {/* Centered Grid Container */}
        <div className="flex justify-center gap-5 items-center flex-wrap">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="relative h-auto md:h-[265px] overflow-hidden rounded-lg flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`${activeLocation} gallery image ${index + 1}`}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
      </CardContent>
    </Card>
  );
};

export default ImageGallery;