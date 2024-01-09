import React from "react";
import "./DoctorDashBoard.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faList,
  faSyringe,
  faCalendarCheck,
  faChartLine,
  faTableList,
  
} from "@fortawesome/free-solid-svg-icons";
import InPatientBody from "./InPatientBody";

const OutPatientSideBar=()=>{

    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

return(
    <div className={`wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <nav id="sidebar" className={` ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className="text-secondary-emphasis">
           
            {!sidebarCollapsed ? 'Out-Patient Dashboard' : null}
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

          {/* <li class=" dropdown  ">
            <Link class=" dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faHospital} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Patients' : null}
              </span>
            </Link>
            <ul class="dropdown-menu  patient-dropdown " style={{ backgroundColor: '#5646eb', borderRadius: '10px' }}   >
              <li><Link to="/in-patient" className="dropdown-item">
                <span className="text-black"> In Patient</span>
              </Link></li>
              <li><Link to="/out-patient" className="dropdown-item">
                <span className="text-black">Out Patient</span>
              </Link></li>

            </ul>
          </li> */}





          
          <li>
            <Link to="/appointments">
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 me-2 " />
              <span className="text-black">
                {!sidebarCollapsed ? 'Appointments' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/doctor-profile">
            <FontAwesomeIcon icon={faList} className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Test Reports' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/surgeries">
            <FontAwesomeIcon icon={faSyringe} className="  mr-2 me-2" />
              <span className="text-black">
              
                {!sidebarCollapsed ? 'Surgeries' : null}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/patient-viewed">
            <FontAwesomeIcon icon={faTableList}  className="mr-2 me-2" />
              <span className="text-black">
                {!sidebarCollapsed ? 'Procedures' : null}
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

        <div className="container-fluid">

          <Routes>
            {/* <Route path="/" element={<DashboardBody />} /> */}
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/in-patient" element={<InPatientBody />} />
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
const Dashboard = () => <h2> </h2>;
const PatientDetails = () => <h2>Patient Details</h2>;

const OutPatient = () => <h2>Out Patient</h2>;
const DoctorProfile = () => <h2>Doctor Profile</h2>;
const Appointments = () => <h2>Doctor Appointments</h2>;
const Surgeries = () => <h2>Surgeries</h2>;
const PatientViewed = () => <h2>Patient Viewed</h2>;
const Logout = () => <h2>Logout</h2>;






export default OutPatientSideBar;