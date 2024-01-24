
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './BookMedicalService.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BookMedicalService() {
    const [patientDetails, setPatientDetails] = useState({
        patientId: '',
        patientName: '',
        phoneNumber: '',
        email: '',
        bloodGroup: '',
        emergencyContact: '',
        address: "",
        age: null,
        gender: "",
        aadhar: "",
        emergencyContactName: "",

    });
    const { patinetId } = useParams();
    const [medicalServices, setMedicalServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedTests, setSelectedTests] = useState([]);
    const [morning, setMorning] = useState(false);
    const [evening, setEvening] = useState(false);
    

    const [selectedFields, setSelectedFields] = useState([
        {
            service: "",
            type: "",
            test: "",
            morning: false,
            evening: false,
        },
    ]);



    useEffect(() => {
        fetch(`http://localhost:9008/patient/byId/${patinetId}`)
            .then((response) => response.json())
            .then((data) => setPatientDetails(data))
            .catch((error) => console.error('Error fetching patient details:', error));



        // Fetch available medical services from the backend
        axios.get('your_backend_api/medicalServices')
            .then(response => setMedicalServices(response.data))
            .catch(error => console.error('Error fetching medical services:', error));
    }, []);

   

    // Handle form submission and connect to backend for payment
    const handlePayment = (e) => {
        e.preventDefault();
        const data = {
            patientDetails,
           selectedFields
           
        };


        axios.post('your_backend_api/payment', data)
            .then(response => {

                console.log('Payment successful:', response.data);
            })
            .catch(error => {

                console.error('Payment failed:', error);
            });
    };



    const handleServiceChange = (index, value) => {
        const updatedFields = [...selectedFields];
        updatedFields[index].service = value;
        setSelectedFields(updatedFields);
    };

    const handleTypeChange = (index, value) => {
        const updatedFields = [...selectedFields];
        updatedFields[index].type = value;
        setSelectedFields(updatedFields);
    };

    const handleTestChange = (index, value) => {
        const updatedFields = [...selectedFields];
        updatedFields[index].test = value;
        setSelectedFields(updatedFields);
    };

    const handleTimingChange = (index, timing) => {
        const updatedFields = [...selectedFields];
        updatedFields[index][timing] = !updatedFields[index][timing];
        setSelectedFields(updatedFields);
    };

    const handleAddField = () => {
        setSelectedFields((prevFields) => [
            ...prevFields,
            {
                service: "",
                type: "",
                test: "",
                morning: false,
                evening: false,
            },
        ]);
    };

    const handleRemoveField = (index) => {
        setSelectedFields((prevFields) => {
            const updatedFields = [...prevFields];
            updatedFields.splice(index, 1);
            return updatedFields;
        });
    };



    return (
        <div className="patientBook">

            <div className="container-fluid mt-2">

                <div className="sticky-md-top sticky-sm-top sticky-lg- patient-top">
                    <div className="d-flex justify-content-end">
                        <Link to={`/PatientDashbord/${patinetId}`}>
                            <button className="btn btn-secondary"><FontAwesomeIcon icon={faArrowLeft} className="fs-6 me-1" />Back</button>
                        </Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <h3 className="text-danger-emphasis">Book Medical Service</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-6 text-end">
                            <div className="patient-id">
                                <span className="fs-6 fw-semibold">Patient ID:</span>
                                <span className="text-success"><strong>{patientDetails.patientId}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="patient-details mt-4">
                    <h4 className="text-primary mb-3">Patient Details</h4>
                    <div className="d-flex justify-content-center">
                        <div className="card col-md-11  p-4 shadow">
                            <div className="row">
                                <div className="col-md-6 mb-3 ">
                                    <div className="">
                                        <div className="form-group d-flex mb-2">
                                            <span className="fs-6 fw-semibold me-2 text-secondary">Patient Name</span>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.patientName}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Phone #</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.phoneNumber}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Address</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.address}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Age</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.age}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Gender</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.gender}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="">
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Email Address</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.email}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Blood Group</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.bloodGroup}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Aadhar #</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.aadhar}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Emergency Contact Name</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.emergencyContactName}</p>
                                        </div>
                                        <div className="form-group d-flex mb-2">
                                            <label className="fs-6 fw-semibold me-2 text-secondary">Emergency Contact Mobile #</label>
                                            <p className="card-text mb-0 fw-semibold">{patientDetails.emergencyContact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row mt-4">
                    <form>
                        <div className="col-md-12">
                            <div className="card p-4 mb-5 ">
                                <h6>Book Medical Service</h6>
                                {selectedFields.map((field, index) => (
                                    <div className="row" key={index}>
                                        <div className="col-md-4 mb-3">
                                            <div className="form-group">
                                                <label className="fs-6 fw-semibold">Medical Services</label>
                                                <select
                                                    className="form-control"
                                                    value={selectedFields[index].service}
                                                    onChange={(e) => handleServiceChange(index, e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select Service</option>
                                                    <option value="service1">Service 1</option>
                                                    <option value="service2">Service 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="form-group">
                                                <label className="fs-6 fw-semibold"> Type</label>
                                                <select
                                                    className="form-control"
                                                    value={selectedFields[index].type}
                                                    onChange={(e) => handleTypeChange(index, e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select Type</option>
                                                    <option value="type1">Type 1</option>
                                                    <option value="type2">Type 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="form-group">
                                                <label className="fs-6 fw-semibold">Test</label>
                                                <select
                                                    className="form-control"
                                                    value={selectedFields[index].test}
                                                    onChange={(e) => handleTestChange(index, e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select Test</option>
                                                    <option value="test1">Test 1</option>
                                                    <option value="test2">Test 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <div className="d-flex align-items-center">
                                                        <label className="me-2 ms-3 fs-6 fw-semibold">
                                                            Timings [Check any one] ! :
                                                        </label>
                                                        <div className="form-check me-3 mt-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="morning"
                                                                checked={selectedFields[index].morning}
                                                                onChange={() =>
                                                                    handleTimingChange(index, "morning")
                                                                }
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="morning"
                                                            >
                                                                Morning
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-1 ">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="evening"
                                                                checked={selectedFields[index].evening}
                                                                onChange={() =>
                                                                    handleTimingChange(index, "evening")
                                                                }
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="evening"
                                                            >
                                                                Evening
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3 d-flex justify-content-end">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveField(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="d-grid gap-2 col-md-3 col-sm-5 col-6 mx-auto">
                                        <button
                                            className="btn btn-primary "
                                            onClick={handleAddField}
                                        >
                                            Add Field
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {selectedFields.length > 0 && (
                            <>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Medical Service</th>
                                                    <th>Type</th>
                                                    <th>Test</th>
                                                    <th>Timings</th>
                                                    <th>Fee</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedFields.map((service, index) => (
                                                    <tr key={index}>
                                                        <td>{/* Your code for Code */}</td>
                                                        <td>{service.service}</td>
                                                        <td>{service.type}</td>
                                                        <td>{service.test}</td>
                                                        <td>{service.morning ? 'Morning ' : ''}{service.evening ? 'Evening' : ''}</td>
                                                        <td>{/* Your code for Fee */}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>


                                    </div>
                                </div>

                                <div className="row">
                                    <div className=" mb-4 d-grid gap-2 col-md-2 col-sm-4 col-6 mx-auto ">
                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                            onClick={handlePayment}
                                        >
                                            PAY NOW
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div >
        </div>
    );
}

export default BookMedicalService;
