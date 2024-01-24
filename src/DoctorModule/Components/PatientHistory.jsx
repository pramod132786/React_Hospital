import React, { useState } from 'react';
import './PatientHistory.css'; // Import your custom CSS for PatientHistory

const PatientHistory = () => {
  // State variables for patient details
  const [patientId, setPatientId] = useState('');
  const [visitType, setVisitType] = useState('OPD');
  const [bp, setBP] = useState('');
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [medication, setMedication] = useState('');
  const [testPrescription, setTestPrescription] = useState('');

  // Dummy patients data
  const dummyPatients = [
    {
      id: '123',
      type: 'OPD',
      bp: '120/80',
      weight: '70 kg',
      temperature: '98.6°F',
      diagnosis: 'Common cold',
      medication: 'Ibuprofen, Rest',
      testPrescription: 'CBC, Chest X-ray',
    },
    {
      id: '456',
      type: 'IP',
      bp: '130/90',
      weight: '75 kg',
      temperature: '99.0°F',
      diagnosis: 'Influenza',
      medication: 'Oseltamivir, Fluids',
      testPrescription: 'Flu test, Blood test',
    },
    {
      id: '789',
      type: 'OPD',
      bp: '110/70',
      weight: '65 kg',
      temperature: '98.0°F',
      diagnosis: 'Allergies',
      medication: 'Antihistamines, Nasal spray',
      testPrescription: 'Allergy test',
    },
  ];

  // Handle patient selection
  const handlePatientSelection = (selectedPatient) => {
    setPatientId(selectedPatient.id);
    setVisitType(selectedPatient.type);
    setBP(selectedPatient.bp);
    setWeight(selectedPatient.weight);
    setTemperature(selectedPatient.temperature);
    setDiagnosis(selectedPatient.diagnosis);
    setMedication(selectedPatient.medication);
    setTestPrescription(selectedPatient.testPrescription);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to save patient history data
    console.log('Patient history submitted:', {
      patientId,
      visitType,
      bp,
      weight,
      temperature,
      diagnosis,
      medication,
      testPrescription,
    });
    // You can send this data to the server or perform other actions
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Patient History</h2>
      <div className="patient-selection mb-3">
        <label className="form-label">Select Patient:</label>
        <select className="form-select" onChange={(e) => handlePatientSelection(dummyPatients[e.target.value])}>
          <option value="">Select Patient</option>
          {dummyPatients.map((patient, index) => (
            <option key={index} value={index}>
              {patient.id} - {patient.type}
            </option>
          ))}
        </select>
      </div>

      <div className="patient-card">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Patient ID:</label>
            <input type="text" className="form-control" value={patientId} readOnly />
          </div>
          <div className="mb-3">
            <label className="form-label">Visit Type (IP/OPD):</label>
            <select className="form-select" value={visitType} onChange={(e) => setVisitType(e.target.value)}>
              <option value="IP">IP</option>
              <option value="OPD">OPD</option>
            </select>
          </div>

          {/* Fields displayed side by side */}
          <div className="mb-3 row">
            <div className="col-md-6">
              <label className="form-label">BP:</label>
              <input type="text" className="form-control" value={bp} onChange={(e) => setBP(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Weight:</label>
              <input type="text" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label className="form-label">Temperature:</label>
              <input type="text" className="form-control" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            {/* Add more fields as needed */}
          </div>

          <div className="mb-3">
            <label className="form-label">Diagnosis:</label>
            <textarea className="form-control" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Medication:</label>
            <textarea className="form-control" value={medication} onChange={(e) => setMedication(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Test Prescription:</label>
            <textarea className="form-control" value={testPrescription} onChange={(e) => setTestPrescription(e.target.value)}></textarea>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PatientHistory;
