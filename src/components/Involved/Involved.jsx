// Import necessary libraries and components
import React from 'react';
import './Involved.css';

const Involved = () => {
  return (
    <div className="involved-container">
      <h2>Get Involved</h2>
      
      <div className="volunteer-section">
        <h3>Volunteer Opportunities</h3>
        <p>
          We appreciate your interest in contributing! Below are some ways you can get involved:
        </p>
        {/* Add details about volunteer opportunities */}
      </div>

      <div className="volunteer-form">
        <h3>Volunteer Information Form</h3>
        {/* Include your volunteer information form here */}
        {/* This can be a simple form or a link to an external form */}
      </div>

      <div className="donation-section">
        <h3>Donations</h3>
        <p>
          Your donations make a significant impact. Consider supporting our cause financially.
        </p>
        {/* Provide options for donations, e.g., links to donation platforms */}
      </div>
    </div>
  );
};

export default Involved;
