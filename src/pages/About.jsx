import React from 'react'
import Nav from '../components/nav';
import img from '../assets/img1.jpg'
import emogi1 from '../assets/icons/happy.png'
import emogi2 from '../assets/icons/list.png'
import emogi3 from '../assets/icons/screen.png'
import emogi4 from '../assets/icons/setting.png'
import Footer from '../components/Footer';
import '@fontsource/syne';


export default function About() {
  return (
    <>
    <Nav />   
  
    {/* img section */}
    <div className="bg-cover flex flex-col  pr-10 justify-evenly items-end bg-center bg-no-repeat h-120 w-full"  style={{ backgroundImage: `url(${img})` }}>
        <div className='w-120  h-80 flex flex-col gap-5'>
          <h1 className='text-7xl font-[syne] text-white'>About Us</h1>
          <p className='text-[18px] text-gray-700'>We Help you find music movie and books <br /> that match your mood.Wharever you are feeling, <br /> we have recommendations that</p>
        </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Card 1 */}
<div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
  <img src={emogi1} alt="" className="w-24 h-24 object-cover mb-4" />
  <h1 className="text-lg font-semibold mb-2">Mood Based Recommendations</h1>
  <p className="text-gray-600 text-sm">
    We specialize in providing recommendations tailored to your current mood, making it easier to find the perfect match.
  </p>
</div>

{/* Card 2 */}
<div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
  <img src={emogi2} alt="" className="w-24 h-24 object-cover mb-4" />
  <h1 className="text-lg font-semibold mb-2">Personalized Curation</h1>
  <p className="text-gray-600 text-sm">
    Our content is selected to align with your feelings, ensuring that each recommendation is relevant and enjoyable.
  </p>
</div>

{/* Card 3 */}
<div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
  <img src={emogi3} alt="" className="w-24 h-24 object-cover mb-4" />
  <h1 className="text-lg font-semibold mb-2">Wide Range of Content</h1>
  <p className="text-gray-600 text-sm">
    From upbeat playlists to inspiring books and captivating movies, we offer a diverse selection to suit all moods.
  </p>
</div>

{/* Card 4 */}
<div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
  <img src={emogi4} alt="" className="w-24 h-24 object-cover mb-4" />
  <h1 className="text-lg font-semibold mb-2">User Friendly Experience</h1>
  <p className="text-gray-600 text-sm">
    Our platform is intuitive and easy to navigate, allowing you to quickly discover content that resonates one click at a time.
  </p>
</div>

</div>
<Footer />




      
</>
  )
}
