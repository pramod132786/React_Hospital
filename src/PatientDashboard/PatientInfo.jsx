


// import React, { useState, useEffect } from 'react';
// import './PatientInfo.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useLocation } from "react-router-dom";

// const PatientInfo = () => {
//   const [patientDetails, setPatientDetails] = useState({
//     patientId: '',
//     patientName: '',
//     phoneNumber: '',
//     email: '',
//     bloodGroup:'',
//     emergencyContact: '',
//   });
//   const searchParams = new URLSearchParams(useLocation().search);
//   const email = searchParams.get('email') || "";

//   useEffect(() => {
//     // Fetch patient details from the backend
//     fetch(`http://localhost:9008/patient/${email}`)
//       .then((response) => response.json())
//       .then((data) => setPatientDetails(data))
//       .catch((error) => console.error('Error fetching patient details:', error));
//   }, [email]); // Include email in the dependency array

//   return (
//     <div className="container mt-4">
//       <div className="card mb-3">
//         <div className="card-header1">
//           <h5 className="card-title" style={{ textAlign: "center",marginTop:'3vh',fontWeight:'bold' }}>INFORMATION</h5>
//         </div>
//         <fieldset>
//           <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignContent: 'center' }}>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Patient ID:</span> {patientDetails.patientId}</p>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Name :</span> {patientDetails.patientName}</p>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Mobile:</span>  {patientDetails.phoneNumber}</p>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Email:</span> {patientDetails.email}</p>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Blood Group:</span> {patientDetails.bloodGroup}</p>
//             <p className="card-text"><span style={{ fontWeight: 'bold' }}>Emergency Mobile:</span> {patientDetails.emergencyContact}</p>
//             <a id="patientHistoryButton" href="">Patient History</a>
//           </div>
//         </fieldset>
//       </div>
//     </div>
//   );
// };

// export default PatientInfo;

import React, { useState, useEffect } from 'react';
import './PatientInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

const PatientInfo = () => {
  const [patientDetails, setPatientDetails] = useState({
    patientId: '',
    patientName: '',
    phoneNumber: '',
    email: '',
    bloodGroup: '',
    emergencyContact: '',
  });
  const searchParams = new URLSearchParams(useLocation().search);
  const email = searchParams.get('email') || "";

  useEffect(() => {
    // Fetch patient details from the backend
    fetch(`http://localhost:9008/patient/${email}`)
      .then((response) => response.json())
      .then((data) => setPatientDetails(data))
      .catch((error) => console.error('Error fetching patient details:', error));
  }, [email]); // Include email in the dependency array

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="card-header1 bg-primary text-white text-center">
          <h5 className="card-title" style={{ marginTop: '3vh', fontWeight: 'bold' }}>PATIENT INFORMATION</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text"><i className="bi bi-person-fill text-primary me-2"></i><span className="fw-bold">Patient ID:</span> {patientDetails.patientId}</p>
              <p className="card-text"><i className="bi bi-person text-success me-2"></i><span className="fw-bold">Name:</span> {patientDetails.patientName}</p>
              <p className="card-text"><i className="bi bi-phone text-info me-2"></i><span className="fw-bold">Mobile:</span> {patientDetails.phoneNumber}</p>
            </div>
            <div className="col-md-6">
              <p className="card-text"><i className="bi bi-envelope text-warning me-2"></i><span className="fw-bold">Email:</span> {patientDetails.email}</p>
              <p className="card-text"><i className="bi bi-heart text-danger me-2"></i><span className="fw-bold">Blood Group:</span> {patientDetails.bloodGroup}</p>
              <p className="card-text"><i className="bi bi-telephone text-secondary me-2"></i><span className="fw-bold">Emergency Mobile:</span> {patientDetails.emergencyContact}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a id="patientHistoryButton" href="#" className="btn btn-info mt-3"><i className="bi bi-journal-text me-2"></i>Patient History</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
