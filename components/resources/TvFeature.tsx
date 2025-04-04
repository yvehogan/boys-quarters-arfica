import React from 'react';
import YouTube from 'react-youtube';

const TVFeature = () => {
  const tvFeatures = [
    { videoId: 'hSxBdccItYU' },
    { videoId: 'BuLfzA0UmLc' },
    { videoId: 'h_WI04xob-g' },
    { videoId: 'RNkyaHdITSk' },
    { videoId: 'bXQR1C21hD8' },
    { videoId: 'tV2p0Ib5F8o' },
    { videoId: 'FjoiDW72JW4' },
    { videoId: 'pkrApOuEd0Q' },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-[40px] font-bold text-secondary mb-5">TV Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tvFeatures.map((feature, index) => (
          <div key={index} className="relative h-[350px] w-full">
            <YouTube
              videoId={feature.videoId}
              iframeClassName="w-full h-[350px] rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVFeature;