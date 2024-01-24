import React from "react";
import './DoctorAppointmentBoard.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorAppointmentBoard = () => {



    const [patientDetails, setPatientDetails] = useState({
        name: "John Doe",
        phone: "123-567-308",
        address: "123 Main St, City",
        age: 30,
        gender: "Male",
        email: "john@example.com",
        bloodGroup: "AB+",
        aadhar: "1234-5678-9012",
        emergencyContactName: "Jane Doe",
        emergencyContactMobile: "987-654-3210"
    });

    const [patientHistory, setPatientHistory] = useState([
        {
            id: 1,
            patientName: "John Doe",
            age: 30,
            location: "Hyd",
            date: "10-12-2023",
            time: "10:00 AM",
            status: "Active",
            date:"10/01/2023",
            prescription:"Diagnosed with Fever presb medication dolo 650"
        },
        {
            id: 2,
            patientName: "Pramod",
            age: 31,
            location: "Hyd",
            date: "10-12-2023",
            time: "10:00 AM",
            status: "Active",
            prescription:"Came with Allergy and fever suspect Chikengunya prescrived amox cv 625 and presb test	"
        },
        {
            id: 3,
            patientName: "srikanth",
            age: 30,
            location: "Hyd",
            date: "10-12-2023",
            time: "10:00 AM",
            status: "Active",
            prescription:"Diagnosed with Fever presb medication dolo 651"
        },
        {
            id: 4,
            patientName: "Naveen",
            age: 30,
            location: "Hyd",
            date: "10-12-2023",
            time: "10:00 AM",
            status: "Active",
            prescription:"Came with Allergy and fever suspect Chikengunya prescrived amox cv 625 and presb test						"
        }
    ]);

    return (
        <>

            <div className="container-fluid ">
                <body>
                    <div className="sticky-md-top sticky-sm-top sticky-lg- doctor-appointment">
                        <div className="row mt-3">
                            <div className="col text-center">
                                <h3 className="text-danger-emphasis">Dr. Appointment Board </h3>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-6 offset-md-6 text-end">
                                <div className="patient-id">
                                    <span className="fs-6 fw-semibold">OP:</span>
                                    <span className="text-success"><strong>123456</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg- ">

                    <div className="doctor-appointment-patient-details ">
                <h5 className="text-primary fw-semibold mt-2 text-start ms-2">Patient Details</h5>
                <div className="d-flex justify-content-center">
                    <div className="card col-md-11 col-sm-9 col-xs-8  p-5 shadow">
                        
                        <div className="row">
                            <div>
                            
                            </div>
                            <div className="col-md-4 mb-3 ">
                                <div className="">
                                <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Patient-Id</label>
                                        <p className="card-text mb-0 text-secondary"> <strong>15656</strong></p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        
                                        <span className="fs-6 fw-semibold me-2">Patient Name</span>
                                        <p className="card-text mb-0">{patientDetails.name}</p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Phone #</label>
                                        <p className="card-text mb-0">{patientDetails.phone}</p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Email Address</label>
                                        <p className="card-text mb-0">{patientDetails.email}</p>
                                    </div>
                                    
                                    {/* <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Age</label>
                                        <p className="card-text mb-0">{patientDetails.age}</p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Gender</label>
                                        <p className="card-text mb-0">{patientDetails.gender}</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="">
                                <div className="form-group d-flex mb-1 ">
                                        <label className="fs-6 fw-semibold me-2">Referral  By</label>
                                        <p className="card-text mb-0 text-secondary"> <strong>15656</strong></p>
                                    </div>
                                <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">IP/OPD</label>
                                        <p className="card-text mb-0">{patientDetails.bloodGroup}</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="">    
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Weight  #</label>
                                        <p className="card-text mb-0">{patientDetails.aadhar}</p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">Temp</label>
                                        <p className="card-text mb-0">{patientDetails.emergencyContactName}</p>
                                    </div>
                                    <div className="form-group d-flex mb-1">
                                        <label className="fs-6 fw-semibold me-2">BP #</label>
                                        <p className="card-text mb-0">{patientDetails.emergencyContactMobile}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

                <div className="">
                        <h5 className="text-primary fw-semibold mt-3 text-start ms-2">Patient History</h5>
                        <div className="row mt-1">
                                <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Date <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                                                <th>Prescription <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                                                {/* <th>Location <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                                                <th>Dates <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                                                <th>Time <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>

                                                <th>Status <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patientHistory.length === 0 ? (
                                                <tr>
                                                    <td colSpan="8" className="text-center text-secondary fw-bold">No appointments found</td>
                                                </tr>
                                            ) : (
                                                patientHistory.map((report, index) => (
                                                    <tr key={report.id}>
                                                        <td>{report.date}</td>
                                                        <td>{report.prescription}</td>
                                                        {/* <td>{report.location}</td>
                                                        <td>{report.date}</td>
                                                        <td>{report.time}</td> */}
                                                    </tr>
                                                ))
                                            )}



                                            {/* Add more rows as needed */}
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                </div>

                <div>
                    <h5 className="text-primary fw-semibold mt-3 text-start ms-2">Last Visit</h5>
                    <p className="fs-5 text-secondary text-start">Diagnosis Medication Report</p>

                    <p className="fs-5 text-secondary text-start">Diagnosis Medication	Test Prescription</p>
                    
                </div>

                    </div>
                </body>
            </div>

        </>
    )

}
export default DoctorAppointmentBoard;