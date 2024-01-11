import React, { useEffect } from "react";
import "./DoctorDashBoard.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faUserDoctor,
  faHospital,
  faSignOutAlt,
  faCalendarCheck,
  faChartLine,
  faEye,
  faStethoscope,
  faSyringe,
  faBed,
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import DashboardBody from "./DashboardBody";
import InPatientBody from "./InPatientBody";
import InPatients from "./InPatients";
import OutPatientSideBar from "./OutPatientsSideBar";


function DoctorDashboard() {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="DoctorSide">
    <div className={`wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <nav id="sidebar" className={` ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className="text-secondary-emphasis">
            {!sidebarCollapsed && (
              <FontAwesomeIcon icon={faStethoscope} className="mr-2 me-2 ms-2" />
            )}
            {!sidebarCollapsed ? 'Doctor Dashboard' : null}
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/doctor">
              <FontAwesomeIcon icon={faChartLine} className="mr-2 me-2 " />
              <span className="text-black">
                {!sidebarCollapsed ? 'Dashboard' : null}
              </span>
            </Link>
          </li>

    
          <li class=" dropdown doctor-drop-patients ">
            <Link class=" dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faHospital} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Patients' : null}
              </span>
            </Link>
            <ul class="dropdown-menu  patient-dropdown  bg-primary bg-gradient rounded-4 "   >
              <li><Link to="/in-patient" className="dropdown-item">
              <FontAwesomeIcon icon={faBed} className="mr-2 me-2"/>
                <span className="text-white"> <strong>In Patient</strong></span>
              </Link></li>
              <li><Link to="/out-patient" className="dropdown-item">
              <FontAwesomeIcon icon={faFaceSmile} className="mr-2 me-2"/>
                <span className="text-white"><strong> Out Patient</strong></span>
              </Link></li>

            </ul>
          </li>
    




          <li>
            <Link to="/doctor-profile">
              <FontAwesomeIcon icon={faUserDoctor} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Profile' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/appointments">
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 me-2 " />
              <span className="text-black">
                {!sidebarCollapsed ? 'Appointments' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/surgeries">
            <FontAwesomeIcon icon={faSyringe} className="mr-2 me-2 " />
              <span className="text-black">
                {!sidebarCollapsed ? 'Surgeries' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/patient-viewed">
              <FontAwesomeIcon icon={faEye} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Viewed patients' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Logout' : null}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div id="content">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn"
          style={{ backgroundColor: '#5646eb', color: 'white' }}
          onClick={handleSidebarToggle}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>


        <div className="col-md-12 col-sm-12">


          <DashboardBody />
        </div>

        <div className="container-fluid">

          <Routes>
            {/* <Route path="/" element={<DashboardBody />} /> */}
            <Route path="/patient-details" element={<PatientDetails />} />
            
           
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/surgeries" element={<Surgeries />} />
            <Route path="/patient-viewed" element={<PatientViewed />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
    </div>
  );
}

// Dummy content components for each route
const Dashboard = () => <h2> </h2>;
const PatientDetails = () => <h2>Patient Details</h2>;


const DoctorProfile = () => <h2>Doctor Profile</h2>;
const Appointments = () => <h2>Doctor Appointments</h2>;
const Surgeries = () => <h2>Surgeries</h2>;
const PatientViewed = () => <h2>Patient Viewed</h2>;
const Logout = () => <h2>Logout</h2>;

export default DoctorDashboard;
