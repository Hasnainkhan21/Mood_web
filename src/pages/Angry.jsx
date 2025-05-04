import React from 'react'
import Top from '../components/Top'
import '@fontsource/syne';
import Card from '../components/Card';
import MovieCarousel from '../components/Movies';
import Books from '../components/Books';
import Footer from '../components/Footer.jsx'


function Angry() {
  return (
    <>
    <Top />
    <div className='w-full py-3 font-[Syne] flex flex-col justify-center items-center text-center'>
    <h1 className="text-4xl md:text-6xl text-red-400 font-bold">Angry Mood</h1>
    <h1 className="text-4xl md:text-6xl text-gray-800 font-semibold mt-2">Recommendations</h1>
    </div>
{/* Music */}
    <div className='flex justify-center h-10 font-[syne] text-[30px] text-blue-500'><p>Music</p></div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 pb-5">
    
  <Card title="English" />
  <Card title="Hindi" />
  <Card title="Turkish" />
  <Card title="All" />
</div>
{/* Movies section */}

<div className=' px-8'>
<MovieCarousel />
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

export default Angry
