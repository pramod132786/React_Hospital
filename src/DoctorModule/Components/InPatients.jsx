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
    faEye,

} from "@fortawesome/free-solid-svg-icons";
import InPatientBody from "./InPatientBody";
import InPatientsReports from "./InPatientsReports";
import DoctorDashboard from "./DoctorDashBoard";


const InPatients = () => {
    const { doctorId } = useParams();
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

                        {!sidebarCollapsed ? 'In-Patient Dashboard' : null}
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

                    <li>
                        <Link to="/appointments">
                            <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 me-2 " />
                            <span className="text-black">
                                {!sidebarCollapsed ? 'Appointments' : null}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to= {`/in-patient-reports/${doctorId}`}>
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
                            <FontAwesomeIcon icon={faEye} className="mr-2 me-2" />
                            <span className="text-black">
                                {!sidebarCollapsed ? 'Viewed patients' : null}
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

                <div  className="container-fuild">
                    <InPatientBody/>
                    </div>
                
            </div>
        </div>
        </div>
    );
}

export default InPatients;