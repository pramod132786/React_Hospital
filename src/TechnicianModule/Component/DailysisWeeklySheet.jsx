import React, { useState, useEffect } from "react";
import "@mdi/font/css/materialdesignicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DialysisWeeklySheet.css"; // Import your custom CSS file

const DialysisWeeklySheet = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [patients, setPatients] = useState([
    {
      code: "001",
      patientId: "P001",
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      receiptNumber: "RN001",
      visitType: "IP",
      schedule: "Monday",
      shift: "Morning",
      timeSlot: "10:00 AM - 12:00 PM",
      paymentType: "Cash",
      lastVisit: "2023-01-15",
      lastWeight: "70 kg",
      currentWeight: "68 kg",
      bloodPressure: "120/80 mmHg",
    },
    // Add more patient data as needed
  ]);

  return (
    <div className="dialysis-weekly-sheet">
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center ">
          <h2>Dialysis Weekly Sheet</h2>
          
        </div>
        <div className="text-end mb-3 fw-bold fs-5 text-secondary"><span className="text-danger-emphasis">Date & Time :</span> {currentDateTime}</div>
        <div className="table-responsive">

      
        <table className="table table-bordered table-hover">
          <thead className="table-warning ">
            <tr>
              <th>Code</th>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th># Receipt</th>
              <th>IP/OPD</th>
              <th>Schedule</th>
              <th>Shift</th>
              <th>Time Slot</th>
              <th>Payment Type</th>
              <th>Last Visit</th>
              <th>Last Weight</th>
              <th>Current Weight</th>
              <th>Blood Pressure</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {patients.map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.code}</td>
                <td>{patient.patientId}</td>
                <td>{patient.patientName}</td>
                <td>{patient.doctorName}</td>
                <td>{patient.receiptNumber}</td>
                <td>{patient.visitType}</td>
                <td>{patient.schedule}</td>
                <td>{patient.shift}</td>
                <td>{patient.timeSlot}</td>
                <td>{patient.paymentType}</td>
                <td>{patient.lastVisit}</td>
                <td>{patient.lastWeight}</td>
                <td>{patient.currentWeight}</td>
                <td>{patient.bloodPressure}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="text-end mt-4">
          <p>Dr. Sign</p>
        </div>
        <div className="mt-4">
          <p>
            <strong>Disclaimer:</strong> <span className="text-muted"> information is intended for general informational purposes
            only and does not constitute professional medical advice. Consult with your healthcare provider
            for personalized guidance on your specific medical condition.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DialysisWeeklySheet;
