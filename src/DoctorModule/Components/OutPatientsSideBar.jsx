import React from "react";
import "./DoctorDashBoard.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
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
import OutPatientBody from "./OutPatientBody";

const OutPatientSideBar=()=>{
  const { doctorId } = useParams();

    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

return(
  <div className="DoctorSide">
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
            <Link to={`/doctor/${doctorId}`}>
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
            <Link to="/out-patients-report">
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

        <div className="container-fuild">

          <OutPatientBody/>
        </div>

       
      </div>
    </div>
    </div>
  );
}







export default OutPatientSideBar;