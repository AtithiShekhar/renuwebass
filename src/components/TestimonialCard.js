import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 flex-shrink-0 w-80">
      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
      <p className="text-white font-semibold mt-4">- {testimonial.name}</p>
      <p className="text-gray-400 text-sm">{testimonial.role}</p>
    </div>
  );
};

export default TestimonialCard;