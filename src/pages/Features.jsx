import React from 'react';
import Nav from '../components/nav';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import '@fontsource/syne';

const featuresData = [
  {
    img: 'https://shorturl.at/r7hZG',
    title: 'GYM Music',
    description: 'Energetic Playlist for workouts',
  },
  {
    img: 'https://shorturl.at/k4zBA',
    title: 'Focus Music',
    description: 'Tunes to help you concentrate',
  },
  {
    img: 'https://shorturl.at/hz2mX',
    title: 'Wedding Music',
    description: 'Celebrate your party',
  },
  {
    img: 'https://shorturl.at/0OK3J',
    title: 'Mental Wellness Tips',
    description: 'Advice for better health',
  },
  {
    img: 'https://shorturl.at/59ApG',
    title: 'Podcasts Corner',
    description: 'Listen to mood-enhancing episodes',
  },
  {
    img: 'https://shorturl.at/NDgkA',
    title: 'Quotes',
    description: 'Read and feel inspiring lines',
  },
];

function Features() {
  return (
    <>
      <Nav />

      {/* Header Section */}
      <div className="flex flex-col items-center text-center py-10 px-4">
        <h1 className="text-5xl font-light">Features</h1>
        <p className="font-[Syne] text-lg mt-2">
          Explore a wide range of features crafted to enhance your mood-based journey
        </p>
      </div>

      {/* Single Flex Container for All Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-8 mb-10">
        {featuresData.map((feature, index) => (
          <div key={index} className="w-full sm:w-[300px]">
            <FeatureCard
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Features;
