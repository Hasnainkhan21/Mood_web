import {React , useState } from 'react';
import axios from 'axios';
import { add_Review } from '../API/Review_api';


const ReviewModal = ({ isOpen, onClose }) => {
  const username = localStorage.getItem('userName');
  const [formData, setFormData] = useState({ name: username, feedback: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(add_Review, formData);
      setMessage("Thank you for your feedback!");
      setFormData({ name: '', feedback: '' });
    } catch (error) {
      setMessage("Failed to submit feedback.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Leave Your Feedback</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
            className="w-full px-4 py-2 border rounded h-24"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
