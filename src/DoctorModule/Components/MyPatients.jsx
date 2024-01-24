import React, { useState } from 'react';
import moment from 'moment';
import './MyPatients.css'; // Import your CSS file

const MyPatients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      country: 'USA',
      mobile: '123-456-7890',
      dateOfBirth: '19900101',
      gender: 'Male',
      bloodGroup: 'AB+',
      seen: false,
    },
    // Add more patients if needed...
  ]);

  const markAsSeen = (patientId) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === patientId ? { ...patient, seen: true } : patient
      )
    );
  };

  return (
    <>
    <div className='mypatients-container'>

      {patients.map((item) => (
        <div className={`card widget-profile pat-widget-profile ${item.seen ? 'seen' : ''}`} key={item.id}>
          <div className="card-body">
            <div className="pro-widget-content">
              <div className="profile-info-widget">
                <div className="patient-img">
                  {/* ... (patient image code) ... */}
                </div>
                <div className="profile-det-info">
                  <h3>{`${item.firstName} ${item.lastName}`}</h3>
                  {/* ... (rest of the code) ... */}
                  <div className="patient-info">
                    <ul>
                      <li>Phone <span>{item.mobile}</span></li>
                      <li>
                        Age{' '}
                        <span>
                          {moment(item.dateOfBirth, 'YYYYMMDD').isValid() &&
                            moment(item.dateOfBirth, 'YYYYMMDD').fromNow()}, {item.gender}
                        </span>
                      </li>
                      <li>Blood Group <span>{item.bloodGroup}</span></li>
                      {!item.seen && (
                        <li>
                          <button className="mark-seen-btn" onClick={() => markAsSeen(item.id)}>
                            Mark as Seen
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default MyPatients;
