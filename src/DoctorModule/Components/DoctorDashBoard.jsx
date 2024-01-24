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
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DoctorDashboard() {

  // const location = useLocation();
  // console.log("Location state:", location.state);
  // const doctorId = location.state && location.state.doctorId;
  const { doctorId } = useParams();
  console.log("doctorsId", doctorId);
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return ( 
    <div className="DoctorSide mb-3">
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
              <Link to={`/doctor/${doctorId}`}>
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
                <li><Link to={`/in-patient/${doctorId}`} className="dropdown-item">
                  <FontAwesomeIcon icon={faBed} className="mr-2 me-2" />
                  <span className="text-white"> <strong>In Patient</strong></span>
                </Link></li>
                <li><Link to={`/out-patient/${doctorId}`} className="dropdown-item">
                  <FontAwesomeIcon icon={faFaceSmile} className="mr-2 me-2" />
                  <span className="text-white"><strong> Out Patient</strong></span>
                </Link></li>

              </ul>
            </li>





            <li>
              <Link to= {`/doctor-profile/${doctorId}`}>
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
              <Link to="/surgery">
                <FontAwesomeIcon icon={faSyringe} className="mr-2 me-2 " />
                <span className="text-black">
                  {!sidebarCollapsed ? 'Surgeries' : null}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/my-patients">
                <FontAwesomeIcon icon={faSyringe} className="mr-2 me-2" />
                <span className="text-black">
                  {!sidebarCollapsed ? 'My-patients' : null}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/patients-history">
                <FontAwesomeIcon icon={faEye} className="mr-2 me-2" />
                <span className="text-black">
                  {!sidebarCollapsed ? 'Viewed patients' : null}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
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

          
        </div>
      </div>
    </div>
  );
}



export default DoctorDashboard;
