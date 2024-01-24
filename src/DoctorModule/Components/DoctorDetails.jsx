import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/doctors/${doctorId}`);
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [doctorId]);

  const handleViewDetails = () => {
    // Handle logic to display all details, for example, in a modal
    console.log('View Details clicked:', doctorData);
    // Implement your logic to display details (e.g., open a modal)
  };

  return (
    <div>
      <h2>Doctor Details</h2>
      {doctorData ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Speciality</th>
                {/* Add more fields as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{doctorData.name}</td>
                <td>{doctorData.speciality}</td>
                {/* Add more fields as needed */}
              </tr>
            </tbody>
          </table>
          <button onClick={handleViewDetails}>View Details</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DoctorDetails;
