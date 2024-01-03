import React, { useEffect } from "react";
import "./DoctorDashBoard.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faUser,
  faHospital,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";


function DoctorDashboard() {
  const navigate = useNavigate();


//   useEffect(() => {
//     // Initialize Bootstrap components using document.querySelector
//     const dropdownToggle = document.querySelector('[data-toggle="dropdown"]');
//     if (dropdownToggle) {
//       dropdownToggle.addEventListener("click", () => {
//         const dropdownMenu = dropdownToggle.nextElementSibling;
//         dropdownMenu.classList.toggle("show");
//       });
//     }
//   }, []);

  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  };

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar" className="bg-dark">
        <div className="sidebar-header">
          <h3>Doctor Dashboard</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li className="dropdown">
            <Link
              to="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faHospital} className="mr-2 me-2" />
              Patients
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/in-patient" className="dropdown-item">
                In Patient
              </Link>
              <Link to="/out-patient" className="dropdown-item">
                Out Patient
              </Link>
            </div>
          </li>
          <li>
            <Link to="/doctor-profile">
              <FontAwesomeIcon icon={faUser} className="mr-2 me-2" />
              Doctor Profile
            </Link>
          </li>
          <li>
            <Link to="/appointments">Doctor Appointments</Link>
          </li>
          <li>
            <Link to="/surgeries">Surgeries</Link>
          </li>
          <li>
            <Link to="/patient-viewed">Patient Viewed</Link>
          </li>
          <li>
            <Link to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 me-2" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div id="content">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-info"
          onClick={handleSidebarToggle}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        <div className="container-fluid">
          {/* Add your content here based on the routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/in-patient" element={<InPatient />} />
            <Route path="/out-patient" element={<OutPatient />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/surgeries" element={<Surgeries />} />
            <Route path="/patient-viewed" element={<PatientViewed />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// Dummy content components for each route
const Dashboard = () => <h2> Dashboard</h2>;
const PatientDetails = () => <h2>Patient Details</h2>;
const InPatient = () => <h2>In Patient</h2>;
const OutPatient = () => <h2>Out Patient</h2>;
const DoctorProfile = () => <h2>Doctor Profile</h2>;
const Appointments = () => <h2>Doctor Appointments</h2>;
const Surgeries = () => <h2>Surgeries</h2>;
const PatientViewed = () => <h2>Patient Viewed</h2>;
const Logout = () => <h2>Logout</h2>;

export default DoctorDashboard;
