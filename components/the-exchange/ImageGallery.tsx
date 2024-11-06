import React from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const images: GalleryImage[] = [
    { src: '/images/the-exchange-gallery/exchange1.png', alt: 'Image 1' },
    { src: '/images/the-exchange-gallery/exchange2.png', alt: 'Image 2' },
    { src: '/images/the-exchange-gallery/exchange3.png', alt: 'Image 3' },
    { src: '/images/the-exchange-gallery/exchange4.png', alt: 'Image 4' },
    { src: '/images/the-exchange-gallery/exchange5.png', alt: 'Image 5' },
    { src: '/images/the-exchange-gallery/exchange6.png', alt: 'Image 6' },
    { src: '/images/the-exchange-gallery/exchange7.png', alt: 'Image 7' },
    { src: '/images/the-exchange-gallery/exchange8.png', alt: 'Image 8' },
    { src: '/images/the-exchange-gallery/exchange9.png', alt: 'Image 9' },
    { src: '/images/the-exchange-gallery/exchange10.png', alt: 'Image 10' },
    { src: '/images/the-exchange-gallery/exchange11.png', alt: 'Image 11' },
    { src: '/images/the-exchange-gallery/exchange12.png', alt: 'Image 12' },
  ];

  return (
    <div className="md:px-28 px-4 mb-16 mt-24">
      <h1 className="text-3xl font-bold mb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-auto md:h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;