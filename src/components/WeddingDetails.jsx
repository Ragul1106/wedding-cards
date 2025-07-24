import React from 'react';

const WeddingDetails = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      <h1 className="text-2xl font-serif text-center mb-6">
        Together with their families, joyfully invite you to their wedding
      </h1>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <input type="checkbox" className="h-5 w-5 mr-2" />
          <span className="text-lg">Date</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked className="h-5 w-5 mr-2" />
          <span className="text-lg">Time</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked className="h-5 w-5 mr-2" />
          <span className="text-lg">Location</span>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <button className="text-blue-600 font-medium underline">View map</button>
        <button className="text-blue-600 font-medium underline">Add to calendar</button>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-serif text-center mb-2">Reception to Follow</h2>
        <h3 className="text-lg font-serif text-center mb-4">Dress Code: "Any Dress Code"</h3>
        <p className="text-center mb-4">
          Kindly <span className="font-bold">RSVP</span> by "Wedding Date"
        </p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
            RSVP Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingDetails;