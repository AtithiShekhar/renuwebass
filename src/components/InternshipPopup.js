import React, { useState } from 'react';

const InternshipPopup = ({ internship, setShowPopup }) => {
  const [loading, setLoading] = useState(false);

  const handleApply = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Application submitted successfully!');
      setShowPopup(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700 animate-fadeIn">
        <h2 className="text-2xl font-bold text-white mb-4">{internship.title}</h2>
        <div className="space-y-3 text-gray-300">
          <p><span className="font-medium text-gray-200">Company:</span> {internship.company}</p>
          <p><span className="font-medium text-gray-200">Stipend:</span> {internship.stipend}</p>
          <p><span className="font-medium text-gray-200">Duration:</span> {internship.duration}</p>
          <p><span className="font-medium text-gray-200">Location:</span> {internship.location}</p>
          <p><span className="font-medium text-gray-200">Description:</span> {internship.description}</p>
          <p><span className="font-medium text-gray-200">Requirements:</span> {internship.requirements}</p>
          <p><span className="font-medium text-gray-200">Deadline:</span> {internship.applicationDeadline}</p>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => setShowPopup(false)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={loading}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Confirm Application'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipPopup;