import React, { useState, useEffect } from "react";
import "@mdi/font/css/materialdesignicons.min.css";
import "./TechnicianProfile.css";
import { Navigate, useNavigate } from "react-router-dom";

const TechnicianProfile = () => {
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [technicianData, setTechnicianData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "##########",
        department: "General Technician",
        address: "",
    });

    useEffect(() => {
        // Fetch technician profile data from the backend API
        // You need to replace the URL with your actual backend endpoint
        fetch("https://your-backend-api/technician-profile")
            .then((response) => response.json())
            .then((data) => setTechnicianData(data))
            .catch((error) => console.error("Error fetching technician profile:", error));
    }, []); // Empty dependency array means this effect runs once on mount

    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (field, value) => {
        setTechnicianData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleBackButton = () => {
        navigate("/")
    }

    return (
        <>
            <div className="technician-profile">
                <div className="d-flex justify-content-start">
                    <button className="btn btn-outline-secondary mt-2 ms-3" onClick={handleBackButton}>
                        <i className="bi bi-arrow-left-circle-fill fs-5"></i>
                    </button>
                </div>


                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-10 col-md-12 col-sm-12">
                                <div className="card user-card-full p-3 shadow-lg">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25">
                                                    <img
                                                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                                                        className="img-radius w-50"
                                                        alt="User-Profile-Image"
                                                    />
                                                </div>
                                                <h6 className="f-w-600 fs-5 fst-italic">Technician Profile</h6>
                                                <p className="fst-italic">Hello Technician..!</p>
                                                <i
                                                    className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16 fs-2"
                                                    onClick={handleEditClick}
                                                />
                                                <p className="fst-italic">Update Your Profile</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600 fs-5 ">
                                                    Information
                                                </h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Name </p>
                                                        {editMode ? (
                                                            <input
                                                                type="text"
                                                                value={technicianData.name}
                                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <h6 className="text-muted f-w-400">{technicianData.name}</h6>
                                                        )}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <h6 className="text-muted f-w-400">{technicianData.email}</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Phone</p>
                                                        {editMode ? (
                                                            <input
                                                                type="text"
                                                                value={technicianData.phone}
                                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <h6 className="text-muted f-w-400">{technicianData.phone}</h6>
                                                        )}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Designation</p>
                                                        <h6 className="text-muted f-w-400">{technicianData.designation}</h6>
                                                    </div>
                                                </div>
                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                    Other Details
                                                </h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Department</p>
                                                        <h6 className="text-muted f-w-400">{technicianData.department}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Address</p>
                                                        {editMode ? (
                                                            <input
                                                                type="text"
                                                                value={technicianData.address}
                                                                onChange={(e) => handleInputChange("address", e.target.value)}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <h6 className="text-muted f-w-400">{technicianData.address}</h6>
                                                        )}
                                                    </div>
                                                </div>
                                                <ul className="social-link list-unstyled m-t-40 m-b-10 ">
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="facebook"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-facebook feather icon-facebook facebook fs-3"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="twitter"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-twitter feather icon-twitter twitter fs-3"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="instagram"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-instagram feather icon-instagram instagram fs-3"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechnicianProfile;
