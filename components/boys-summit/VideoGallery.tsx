import React from 'react';
import Image from 'next/image';

interface Speaker {
  name: string;
//   title: string;
}

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  featuredSpeaker: string;
}

interface VideoGalleryProps {
  className?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ className = "" }) => {
  const videos: Video[] = [
    {
      id: "01",
      title: "International Boys Summit 01",
      thumbnail: "/images/video-placeholder.png",
      featuredSpeaker: "ft. Chude Jideonwo, Dammie"
    },
    {
      id: "02",
      title: "International Boys Summit 02",
      thumbnail: "/images/video-placeholder.png",
      featuredSpeaker: "ft. Kunle Soriyan"
    }
  ];

  const speakers: Speaker[] = [
    {
      name: "CHUDE JIDEONWO; CEO, Joy Inc. & Co-founder RED Media."
    },
    {
      name: "OLAKUNLE SORIYAN; Futurist & Relevance Strategist."
    },
    {
      name: "Dr. RUBY ONWUDIWE; Head of Personal Banking, Stanbic IBTC."
    }
  ];

  return (
    <div className={`md:px-28 px-4 py-12 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Videos Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-sm text-secondary">{video.featuredSpeaker}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Keynote Speakers Section */}
        <div className='max-w-sm'>
          <h2 className="text-xl font-bold mb-8">Keynote Speakers</h2>
          <div className="space-y-4">
            {speakers.map((speaker, index) => (
              <ul key={index} className="space-y-1 list-disc pl-5">
                <li className="text-secondary text-[16px]">{speaker.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;