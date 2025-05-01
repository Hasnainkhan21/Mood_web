import React from 'react'
import Top from '../components/Top'
import '@fontsource/syne';
import Card from '../components/Card';

function Happy() {
  return (
    <>
        <Top />

{/* Heading Section */}
<div className="w-full py-12 font-[Syne] flex flex-col justify-center items-center text-center">
  <h1 className="text-4xl md:text-6xl text-amber-400 font-bold">Happy Mood</h1>
  <h1 className="text-3xl md:text-5xl text-gray-800 font-semibold mt-2">Recommendations</h1>
</div>

{/* Cards Section */}
<div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 pb-12">
  <Card title="English" />
  <Card title="Hindi" />
  <Card title="Turkish" />
  <Card title="Mix" />
</div>

    </>
  )
}

export default Happy
