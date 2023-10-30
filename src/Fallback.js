import React from 'react';
import './fallback.css'; // Import the CSS file for styling

const SuspenseFallback = () => {
  return (
    <div className="suspense-fallback">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default SuspenseFallback;