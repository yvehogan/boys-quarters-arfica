import React from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  text: string
}

const VideoGallery: React.FC = () => {
  const images: GalleryImage[] = [
    { src: '/images/video-placeholder.png', alt: 'Image 1', text: 'The Exchange' },
  ];

  return (
    <div className="md:px-28 px-4 mb-16 mt-24">
      <h1 className="text-3xl font-bold mb-10">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-auto md:h-52 object-cover mb-2" />
            <p>{image?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;