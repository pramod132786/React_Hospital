import React from 'react';
import { FaAmbulance, FaExclamationTriangle, FaComments } from 'react-icons/fa';
import './MoreInfo.css'; 


const MoreInfo = () => {
  return (
    <div className="emergency-container">
      <button className="emergency-button">
        <FaExclamationTriangle />
        Emergency
      </button>

      <button className="ambulance-button">
        <FaAmbulance />
        Ambulance
      </button>

      <button className="complaints-button">
        <FaComments />
        Complaints
      </button>

      <button className="suggestion-button">
        <FaComments />
        Suggestions
      </button>
    </div>
  );
};

export default MoreInfo;
