import React from 'react'
import Top from '../components/Top'
import '@fontsource/syne';
import Card from '../components/Card';

function Motivated() {
  return (
    <>
    <Top />
    <div className='w-full py-12 font-[Syne] flex flex-col justify-center items-center text-center'>
    <h1 className="text-4xl md:text-6xl text-orange-400 font-bold">Motivated Mood</h1>
    <h1 className="text-4xl md:text-6xl text-gray-800 font-semibold mt-2">Recommendations</h1>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 pb-12">
  <Card title="English" />
  <Card title="Hindi" />
  <Card title="Turkish" />
  <Card title="Mix" />
</div>
    </>
  )
}

export default Motivated
