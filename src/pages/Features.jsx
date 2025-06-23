import React from 'react';
import Nav from '../components/nav';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import '@fontsource/syne';

const featuresData = [
  {
    iframeSrc: 'https://www.youtube.com/embed/D2CKOIiabfg?controls=1&rel=0&modestbranding=1',
    title: 'GYM Music',
    description: 'Energetic Playlist for workouts',
  },
  {
    iframeSrc: 'https://www.youtube.com/embed/xAR6N9N8e6U?controls=1&rel=0&modestbranding=1',
    title: 'Focus Music',
    description: 'Tunes to help you concentrate',
  },
  {
    iframeSrc: 'https://www.youtube.com/embed/kKaF-sjG06g?controls=1&rel=0&modestbranding=1',
    title: 'Party Vibes',
    description: 'Celebrate your party',
  },
  {
    iframeSrc: 'https://www.youtube.com/embed/NQcYZplTXnQ?controls=1&rel=0&modestbranding=1',
    title: 'Mental Wellness Tips',
    description: 'Advice for better health',
  },
  {
    iframeSrc: 'https://www.youtube.com/embed/YcGXViwXItM?controls=1&rel=0&modestbranding=1',
    title: 'Podcasts Corner',
    description: 'Listen to mood-enhancing episodes',
  },
  {
    iframeSrc: 'https://www.youtube.com/embed/fu1A8Ya2-QE?controls=1&rel=0&modestbranding=1',
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

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-10 px-8 mb-10">
        {featuresData.map((feature, index) => (
          <div key={index} className="w-full sm:w-[300px]">
            <FeatureCard
              iframeSrc={feature.iframeSrc}
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
