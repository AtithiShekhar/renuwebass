import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InternshipCard from './InternshipCard';
import InternshipPopup from './InternshipPopup';
import TestimonialCard from './TestimonialCard';

const Home = ({ user, token, setScreen }) => {
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const testimonials = [
    { name: "John Doe", role: "Web Dev Intern", quote: "This platform helped me land my dream internship at a top tech company!" },
    { name: "Jane Smith", role: "Data Science Intern", quote: "The process was seamless, and the opportunities are amazing!" },
    { name: "Alex Johnson", role: "UI/UX Intern", quote: "I loved the variety of internships and the easy application process!" },
  ];

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/internships', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setInternships(response.data.internships);
      } catch (err) {
        setError('Failed to load internships');
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-gray-800/80 backdrop-blur-md shadow-lg z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Internship Portal</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {user.name}</span>
            <button
              onClick={() => setScreen('login')}
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Discover Internships</h2>
        {loading && <p className="text-center text-gray-400">Loading internships...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <InternshipCard
              key={internship._id}
              internship={internship}
              setSelectedInternship={setSelectedInternship}
              setShowPopup={setShowPopup}
            />
          ))}
        </div>
      </section>

      {}
      <section className="container mx-auto py-16 px-4 bg-gray-800/50">
        <h2 className="text-4xl font-bold text-center text-white mb-10">What Our Users Say</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {}
      {showPopup && selectedInternship && (
        <InternshipPopup internship={selectedInternship} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default Home;