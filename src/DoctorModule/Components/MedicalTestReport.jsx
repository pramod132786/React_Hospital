import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MedicalTestReport.css';

const MedicalTestReport = () => {
  const [testData, setTestData] = useState({
    fullName: 'John Doe',
    dateOfBirth: '01/01/1980',
    gender: 'Male',
    physicianName: 'Dr. Smith',
    dateOfTestOrder: '01/15/2024',
    specimenType: 'Blood',
    labName: 'Medical Lab XYZ',
    testResults: 'Normal',
    interpretationComments: 'No significant findings.',
    diagnosticCodes: 'ICD-10: ABC123',
    dateOfReport: '01/20/2024',
    signatureCredentials: 'Dr. Jane Doe, MD',
    authorizationConsent: 'Patient consent obtained.',
    followUpRecommendations: 'None at this time.',
  });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setTestData({
        fullName: 'Jane Smith',
        dateOfBirth: '05/15/1995',
        gender: 'Female',
        physicianName: 'Dr. Johnson',
        dateOfTestOrder: '02/10/2024',
        specimenType: 'Urine',
        labName: 'Health Lab ABC',
        testResults: 'Abnormal',
        interpretationComments: 'Abnormal findings require further investigation.',
        diagnosticCodes: 'ICD-10: XYZ789',
        dateOfReport: '02/15/2024',
        signatureCredentials: 'Dr. Robert White, MD',
        authorizationConsent: 'Patient consent obtained.',
        followUpRecommendations: 'Consult with a specialist for further evaluation.',
      });
    };

    fetchData();
  }, []);

  const MedicalTestReportContent = ({ data }) => (
    <div className="card">
      <div className="info-section">
        <p>Patient Information:-</p>
        <ul>
          <li><span>Name:</span> {data.fullName}</li>
          <li><span>Date of Birth:</span> {data.dateOfBirth}</li>
          <li><span>Gender:</span> {data.gender}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Physician Information:-</p>
        <ul>
          <li><span>Name:</span> {data.physicianName}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Test Request Details:-</p>
        <ul>
          <li><span>Date of Test Order:</span> {data.dateOfTestOrder}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Specimen Details</p>
        <ul>
          <li><span>Type of Specimen:</span> {data.specimenType}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Laboratory Information:-</p>
        <ul>
          <li><span>Laboratory Name:</span> {data.labName}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Test Results:-</p>
        <ul>
          <li>{data.testResults}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Interpretation/Comments:-</p>
        <ul>
          <li>{data.interpretationComments}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Diagnostic Codes:-</p>
        <ul>
          <li>{data.diagnosticCodes}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Date of Report:-</p>
        <ul>
          <li>{data.dateOfReport}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Signature and Credentials:-</p>
        <ul>
          <li>{data.signatureCredentials}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Authorization/Consent:-</p>
        <ul>
          <li>{data.authorizationConsent}</li>
        </ul>
      </div>

      <div className="info-section">
        <p>Follow-Up Recommendations:-</p>
        <ul>
          <li>{data.followUpRecommendations}</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h3>Medical Test Report</h3>
      <MedicalTestReportContent data={testData} />
    </div>
  );
};

export default MedicalTestReport;
