import React, { useState, useEffect } from 'react';
import './DoctorProfile.css'; // Update the CSS file name accordingly
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { PersonFill, Person, Phone, Envelope, Heart, Telephone } from 'react-bootstrap-icons';

const DoctorProfile = () => {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    qualification: '',
    speciality: '',
    experience: '',
    email: '',
    mobileNumber: '',
    
  });

  const { doctorId } = useParams();
  console.log(doctorId);
  // const searchParams = new URLSearchParams(useLocation().search);
  // const email = searchParams.get('email') || "";

  useEffect(() => {
    // Fetch doctor details from the backend
    fetch(`http://localhost:9000/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => setDoctorDetails(data) )
      .catch((error) => console.error('Error fetching doctor details:', error));
  }, []); // Include email in the dependency array

  return (
    <div className="doctor-container mt-4">
      <Card className="doctor-card mb-3">
        <Card.Header className="bg-primary text-white text-center">
          <Card.Title className="doctor-title" style={{ marginTop: '3vh', fontWeight: 'bold' }}>DOCTOR INFORMATION</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <p className="doctor-text"><PersonFill className="text-primary me-2" /><span className="fw-bold">Doctor's Full Name:</span> {doctorDetails.name}</p>
              <p className="doctor-text"><Person className="text-success me-2" /><span className="fw-bold">Qualification:</span> {doctorDetails.qualification}</p>
              <p className="doctor-text"><Phone className="text-info me-2" /><span className="fw-bold">Contact Number:</span> {doctorDetails.mobileNumber}</p>
            </div>
            <div className="col-md-6">
              <p className="doctor-text"><Envelope className="text-warning me-2" /><span className="fw-bold">Email Address:</span> {doctorDetails.email}</p>
              <p className="doctor-text"><Heart className="text-danger me-2" /><span className="fw-bold">Specialization:</span> {doctorDetails.speciality}</p>
              <p className="doctor-text"><Telephone className="text-secondary me-2" /><span className="fw-bold">Years of Experience:</span> {doctorDetails.experience}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoctorProfile;
