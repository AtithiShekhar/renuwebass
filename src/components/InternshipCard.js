import React from 'react';

const InternshipCard = ({ internship, setSelectedInternship, setShowPopup }) => {
  if (!internship || !internship.title) {
    return <div className="text-red-400 p-4">Error: Invalid internship data</div>;
  }

  const handleClick = () => {
    if (typeof setSelectedInternship !== 'function' || typeof setShowPopup !== 'function') {
      console.error('setSelectedInternship or setShowPopup is not a function');
      return;
    }
    setSelectedInternship(internship);
    setShowPopup(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      <h3 className="text-xl font-semibold text-white">{internship.title}</h3>
      <p className="text-gray-300 mt-2">{internship.company || 'Unknown Company'}</p>
      <div className="mt-3 space-y-1 text-gray-400 text-sm">
        <p><span className="font-medium text-gray-200">Stipend:</span> {internship.stipend || 'Not specified'}</p>
        <p><span className="font-medium text-gray-200">Duration:</span> {internship.duration || 'Not specified'}</p>
        <p><span className="font-medium text-gray-200">Location:</span> {internship.location || 'Not specified'}</p>
        <p><span className="font-medium text-gray-200">Deadline:</span> {internship.applicationDeadline || 'Not specified'}</p>
      </div>
      <button
        onClick={handleClick}
        className="mt-4 bg-accent text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-500 transition font-semibold"
      >
        Apply Now
      </button>
    </div>
  );
};

export default InternshipCard;