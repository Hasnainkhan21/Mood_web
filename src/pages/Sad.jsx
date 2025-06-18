import React from 'react'
import Top from '../components/Top'
import '@fontsource/syne';

import MovieCarousel from '../components/Movies';
import Books from '../components/Books';
import Footer from '../components/Footer.jsx'
import SpotifySearch from '../components/SpotifySearch.jsx';

function Sad() {
  return (
   <>
   <Top />
   <div className='w-full py-3 font-[Syne] flex flex-col justify-center items-center text-center'>
   <h1 className="text-4xl md:text-6xl text-blue-400 font-bold">Sad Mood</h1>
   <h1 className="text-4xl md:text-6xl text-gray-800 font-semibold mt-2">Recommendations</h1>
    </div>


{/* Music */}
<div className='flex justify-center h-10 font-[syne] text-[30px] text-blue-500'><p>Music</p></div>

<SpotifySearch mood="sad" />

{/* Movies section */}
<div className=' px-8'>
<MovieCarousel key={Date.now()} mood="Sad"/>
</div>
{/* books */}
<div className='flex justify-center h-10 font-[syne] text-[30px] text-green-500'><p>Books</p></div>
  <Books />

  {/* footer */}
  <div className='mt-15'>
  <Footer/>
  </div>
   </>
  )
}

export default Sad
