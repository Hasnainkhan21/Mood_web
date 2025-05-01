import { div } from 'framer-motion/client'
import React from 'react';
import img1 from '../assets/2d-book.png';
import TV from '../assets/2d-tv.png';
import { Link } from 'react-router-dom';
import hPhone from '../assets/2d-headphone.png'
import '@fontsource/syne';

function MoodRecommendations() {
  return  (
    <div className='hero px-6 md:px-10 mt-20'>
      {/* Heading */}
      <div className='text-center mb-10 font-[syne]'>
        <h1 className='text-4xl md:text-6xl text-gray-900'>Mood-Based</h1>
        <h1 className='text-4xl md:text-6xl text-gray-900'>Recommendations</h1>
        <p className='text-xl md:text-2xl text-gray-600 mt-4'>
          Choose your current mood and discover songs,
        </p>
        <p className='text-xl md:text-2xl text-gray-600'>
          movies, and books that match it
        </p>
      </div>

      {/* Mood Buttons */}
      <div className='flex justify-center flex-wrap gap-6 md:gap-10 mb-12'>
      <Link to='/happymood'><button className='py-3 px-6 cursor-pointer bg-amber-100 rounded-3xl text-lg font-medium transition duration-200 hover:bg-amber-200 hover:scale-105 hover:shadow-md'>😊 Happy</button></Link>
      <Link to='/sadmood'><button className='py-3 px-6 cursor-pointer bg-blue-100 rounded-3xl text-lg font-medium transition duration-200 hover:bg-blue-200 hover:scale-105 hover:shadow-md'>😢 Sad</button></Link>
      <Link to='/motivatedmood'> <button className='py-3 px-6 cursor-pointer bg-orange-200 rounded-3xl text-lg font-medium transition duration-200 hover:bg-orange-300 hover:scale-105 hover:shadow-md'>😍 Motivated</button></Link>
      <Link to='/relaxedmood'><button className='py-3 px-6 cursor-pointer bg-purple-200 rounded-3xl text-lg font-medium transition duration-200 hover:bg-purple-300 hover:scale-105 hover:shadow-md'>😌 Relaxed</button></Link>
      <Link to='/angrymood'><button className='py-3 px-6 cursor-pointer bg-red-200 rounded-3xl text-lg font-medium transition duration-200 hover:bg-red-300 hover:scale-105 hover:shadow-md'>😡 Angry</button></Link>
</div>


      {/* Suggestions */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Music Card */}
        <div className='bg-gray-400 h-65 rounded-2xl p-4 flex flex-col justify-center items-center text-center'>
          <img src={hPhone} alt="" className='size-17'/>
          <h3 className='text-2xl font-bold'>Music Suggestions</h3>
          <p>Playlist to match your mood</p>
        </div>

        {/* Movie Card */}
        <div className='bg-gray-400 h-65 rounded-2xl p-4 flex flex-col justify-center items-center text-center'>
          <img src={TV} alt="" className='size-17'/>
          <h3 className='text-2xl font-bold'>Movie Suggestions</h3>
          <p>Movies that reflect your feelings</p>
        </div>

        {/* Book Card */}
        <div className='bg-gray-400 h-65 rounded-2xl p-4 flex flex-col justify-center items-center text-center'>
          <img src={img1} alt=""  className='size-16'/>
          <h3 className='text-2xl font-bold'>Book Suggestions</h3>
          <p>Read something that resonates</p>
        </div>
      </div>
    </div>
  );
}

export default MoodRecommendations;
