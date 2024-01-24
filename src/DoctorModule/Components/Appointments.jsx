// Appointments.jsx

import React from 'react';
import './Appointments.css'; // Import the corresponding CSS file

const Appointments = () => {
  // Dummy data for appointments
  const appointments = [
    { id: 1, patientName: 'John Doe', time: '10:00 AM', date: '2024-01-23', status: 'Pending' },
    { id: 2, patientName: 'Jane Doe', time: '11:30 AM', date: '2024-01-24', status: 'Viewed' },
    { id: 3, patientName: 'Alice Smith', time: '02:15 PM', date: '2024-01-25', status: 'Pending' },
    { id: 4, patientName: 'Alice Smith', time: '02:15 PM', date: '2024-01-25', status: 'Viewed' },
    // Add more dummy data as needed
  ];

  return (
    <div className="appointments-container mb-4">
      <h2 className='mb-3'>Appointments</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.time}</td>
              <td>{appointment.date}</td>
              <td>{appointment.status}</td>
              <td>
                {appointment.status === 'Pending' && (
                  <button onClick={() => console.log('View button clicked')}>View</button>
                )}
                {appointment.status === 'Viewed' && (
                  <span>Viewed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
