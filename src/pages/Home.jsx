import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MoodRecommendations from '../components/MoodRecommendations';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';

 export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem('token'); 

  const handleOpenModal = () => {
    if (!isAuthenticated) {
      navigate('/login'); //if not logged in
    } else {
      setIsModalOpen(true); // open if logged in
    }
  };

  return (
    <>
      <Nav />
      <Hero />
      <MoodRecommendations />
      <Testimonial />

      <div className="bg-gray-100 py-8 text-center">
        <p className="mb-4 text-gray-700">Moodora — Your mood, your vibe.</p>

        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Leave Feedback
        </button>

        {/* Modal renders only if open, user is already checked */}
        <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <Footer />
    </>
  );
}
