import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { get_Reviews } from '../API/Review_api';
import { FaUserCircle } from 'react-icons/fa'; // Add this import

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  // Helper to shuffle and pick 3 random
  const getRandomReviews = (arr) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(get_Reviews);
        const allReviews = res.data; // ✅ adjust if your backend wraps in { reviews: [] }

        // Filter out users without feedback
        const withFeedback = allReviews.filter(r => r.feedback && r.feedback.trim() !== '');
        setReviews(getRandomReviews(withFeedback));
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-13">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">Moodora users love us</p>
          <h2 className="mt-4 text-3xl font-[syne] text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            What our users say
          </h2>
        </div>

        <div className="relative mt-10 md:mt-24">
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 25%, #818cf8 50%, #6366f1 75%, #0ea5e9 100%)',
              }}
            ></div>
          </div>

          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
            {reviews.map((review, i) => (
              <div key={i} className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      {Array(5).fill().map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        {review.feedback}
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    {/* Replace img with FaUserCircle */}
                    <FaUserCircle className="w-11 h-11 text-gray-400" />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">– {review.name || 'Anonymous'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
