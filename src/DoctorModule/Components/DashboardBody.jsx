// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeartCirclePlus, faBedPulse, faBed, faCalendarCheck, faArrowsUpDown, faSliders, faBell, faCheck, faUserDoctor, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import "./DashboardBody.css"

// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useParams } from 'react-router-dom';

// function getGreeting() {

//     const currentHour = new Date().getHours();

//     if (currentHour >= 0 && currentHour < 12) {
//         return "Good Morning";
//     } else if (currentHour >= 12 && currentHour < 15) {
//         return "Good Afternoon";
//     } else {
//         return "Good Evening";
//     }
// }


// const Calendar = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];

//     const handlePrevMonth = () => {
//         setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
//     };

//     const handleNextMonth = () => {
//         setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
//     };

//     const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
//     const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

//     const calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

//     return (
//         <div className="DoctorDash">
//                 {/* <div className="card p-4 mt-2 rounded-5 shadow">
//                     <div className="d-flex justify-content-between mb-3">
//                         <button className="btn btn-link" onClick={handlePrevMonth}>
//                             {"<"}
//                         </button>
//                         <h5>{`${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}</h5>
//                         <button className="btn btn-link" onClick={handleNextMonth}>
//                             {">"}
//                         </button>
//                     </div>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 {weekdays.map((day) => (
//                                     <th key={day}>{day}</th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Array.from({ length: daysInMonth }).map((_, index) => {
//                                 const day = index + 1;
//                                 const isFirstDayOfWeek = (index + firstDayOfMonth) % 7 === 0;

//                                 if (isFirstDayOfWeek) {
//                                     return (
//                                         <tr key={`week-${Math.ceil((index + firstDayOfMonth) / 7)}`}>
//                                             <td>{day}</td>
//                                         </tr>
//                                     );
//                                 }

//                                 return <td key={`day-${index}`}>{day}</td>;
//                             })}
//                         </tbody>
//                     </table>
//                 </div> */}
//         </div>
//     );
// };


// function DashboardBody() {

//     const { doctorId } = useParams();
//     const [appointments, setAppointments] = useState([
//         {
//             id: 1,
//             patientName: "John Doe",
//             age: 30,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         {
//             id: 2,
//             patientName: "Pramod",
//             age: 31,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         {
//             id: 3,
//             patientName: "srikanth",
//             age: 30,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         {
//             id: 4,
//             patientName: "Naveen",
//             age: 30,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         {
//             id: 5,
//             patientName: "Sunil",
//             age: 30,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         {
//             id: 6,
//             patientName: "Hussen",
//             age: 30,
//             location: "Hyd",
//             date: "10-12-2023",
//             time: "10:00 AM",
//             status: "Active"
//         },
//         // Add more dummy data as needed
//     ]);

//     const greeting = getGreeting();

//     const [searchTerm, setSearchTerm] = useState("");
//     const [filteredReports, setFilteredReports] = useState([]);

//     useEffect(() => {
//         // Filter reports based on the search term when searchTerm changes
//         const filtered = appointments.filter(
//             (appointment) =>
//                 appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 appointment.id.toString().includes(searchTerm)
//         );
//         setFilteredReports(filtered);
//     }, [searchTerm, appointments]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get("YOUR_BACKEND_API_ENDPOINT");
//             setAppointments(response.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         // Fetch data from the backend and trigger the search when the form is submitted
//         fetchData();
//     };

//     return (
//         <>
//             <div className="DoctorDash">
//                 <div className="row container-fluid">


//                     <div className="col-md-12 col-sm-12 col-xs-12 col-lg-">


//                         <nav className="navbar">
//                             <div className="container-fluid">

//                                 <form className="d-flex mb-2" onSubmit={handleSearch}>
//                                     <input
//                                         className="form-control me-2 "
//                                         type="search"
//                                         placeholder="Search Appointments "
//                                         aria-label="Search"
//                                         value={searchTerm}
//                                         onChange={(e) => setSearchTerm(e.target.value)}
//                                     />
//                                 </form>

//                                 <div className="d-flex justify-content-end">


//                                     <button className="btn btn-outline-warning me-2"><FontAwesomeIcon icon={faSliders} className="mr-2" /></button>
//                                     <button className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faBell} className="mr-2" /></button>

//                                     <div className="card rounded-circle shadow ">
//                                         <FontAwesomeIcon icon={faUserDoctor} className="p-2 text-primary" />

//                                     </div>
//                                 </div>
//                             </div>

//                         </nav>
//                     </div>
//                     <div className="col-md-8 col-sm-7 col-lg- ">
//                         <body>
//                             <div className="col-md-11 col-sm-10 col-lg- mt-3 ms-3 ">
//                                 <div className="card p-4  mt-4 ms-1 rounded-5 shadow " style={{ backgroundColor: '#5646eb', color: 'white' }} >
//                                     <h4 className="text-start text-greet">{`${greeting},  Doc!`}</h4>
//                                     <p className="text-start fw-lighter font-monospace">Have a nice day at work.!</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="fs-4 fw-semibold text-md-start text-sm-start text-lg-start text-xl-start mt-3 ms-2">Reports</p>
//                             </div>
//                             <div className="row  report-cards">


//                                 <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
//                                     <div className="card  rounded-4 shadow">
//                                         <FontAwesomeIcon icon={faBedPulse} className="fs-4 mb-3 mt-4 rounded-2 p-1 icon-card" style={{ backgroundColor: '#5646eb', margin: '50px', color: 'white' }} />
//                                         <p className="fs-6 fw-medium">Total Patients</p>
//                                         <div className="mt-1 rounded-3" style={{ backgroundColor: '#5646eb', color: 'white' }}>
//                                             <p className="fs-6 fw-medium text-center">400</p>
//                                         </div>
//                                     </div>

//                                 </div>

//                                 <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
//                                     <div className="card  rounded-4 shadow bordershadow">
//                                         <FontAwesomeIcon icon={faBed} className="fs-4 p-1 mb-3 mt-4 rounded-2 bg-warning bg-opacity-75 icon-card" style={{ margin: '50px', color: 'white' }} />
//                                         <p className="fs-6 fw-medium">In-Patients</p>
//                                         <div className="mt-1 rounded-3" >
//                                             <p className="fs-6 fw-medium text-center">400</p>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
//                                     <div className="card  rounded-4 shadow ">
//                                         <FontAwesomeIcon icon={faFaceSmile} className="fs-4 mb-3 p-1 mt-4 rounded-2 icon-card bg-info" style={{ margin: '50px', color: 'white' }} />
//                                         <p className="fs-6 fw-medium">Out-Patients</p>
//                                         <div className="mt-1 " >
//                                             <p className="fs-6 fw-medium ">400</p>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
//                                     <div className="card  rounded-4 shadow">
//                                         <FontAwesomeIcon icon={faCalendarCheck} className="fs-4 p-1 mb-3 mt-4 rounded-2 bg-success bg-opacity-75   icon-card" style={{ margin: '50px', color: 'white' }} />
//                                         <p className="fs-6 fw-medium">Appointments</p>
//                                         <div className="mt-1 rounded-3" >
//                                             <p className="fs-6 fw-medium text-center">400</p>
//                                         </div>
//                                     </div>

//                                 </div>

//                             </div>
//                             <div className="row">
//                                 <p className="fs-4 fw-semibold text-md-start text-sm-start text-lg-start text-xl-start mt-2">My Appointments</p>
//                             </div>

//                             <div className="row mt-1">
//                                 <div className="col-md-12">
//                                     <table className="table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Name <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
//                                                 <th>Age <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
//                                                 <th>Location <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
//                                                 <th>Dates <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
//                                                 <th>Time <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>

//                                                 <th>Status <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredReports.length === 0 ? (
//                                                 <tr>
//                                                     <td colSpan="8" className="text-center text-secondary fw-bold">No appointments found</td>
//                                                 </tr>
//                                             ) : (
//                                                 filteredReports.map((report, index) => (
//                                                     <tr key={report.id}>
//                                                         <td>{report.patientName}</td>
//                                                         <td>{report.age}</td>
//                                                         <td>{report.location}</td>
//                                                         <td>{report.date}</td>
//                                                         <td>{report.time}</td>
//                                                     </tr>
//                                                 ))
//                                             )}



//                                             {/* Add more rows as needed */}
//                                         </tbody>
//                                     </table>
//                                 </div>

//                             </div>
//                         </body>
//                     </div>
//                     <div className="col-md-4 col-sm-5 col-lg-">



//                         <nav class="navbar">
//                             <div class="container-fluid">

//                             </div>
//                         </nav>
//                         <div>
//                             <p className="fs-5 text-md-start text-sm-start text-lg-start text-xl-start  fw-semibold">Scheduled / Calender</p>
//                         </div>
//                         <div className="row mt-1">
//                             <div className="col-md-12">
//                                 <Calendar />
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default DashboardBody;

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faBedPulse,
  faBed,
  faCalendarCheck,
  faArrowsUpDown,
  faSliders,
  faBell,
  faCheck,
  faUserDoctor,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./DashboardBody.css";

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

const Calendar = () => {
  // ... (unchanged)
};

function DashboardBody() {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReports, setFilteredReports] = useState([]);

  const greeting = getGreeting();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/doctors/${doctorId}`
        );
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [doctorId]);

  useEffect(() => {
    const filtered = appointments.filter(
      (appointment) =>
        (appointment.name &&
          appointment.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (appointment.id &&
          appointment.id.toString().includes(searchTerm)) ||
        (appointment.timeSlot &&
          appointment.timeSlot.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredReports(filtered);
  }, [searchTerm, appointments]);

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/doctors/${doctorId}`
      );
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const completeAppointment = async (id) => {
    try {
      const apiUrl = `http://localhost:9000/update/${id}`;
      const response = await axios.put(apiUrl, { appointmentStatus: 'COMPLETE' });

      // Assuming your backend returns the updated appointment object
      const updatedAppointment = response.data;

      // Update the state with the updated appointment
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === updatedAppointment.id ? updatedAppointment : appointment
        )
      );
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <>
      <div className="DoctorDash mb-3">
        <div className="row container-fluid">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-">
            <nav className="navbar">
              <div className="container-fluid">
                <form className="d-flex mb-2" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2 w-4"
                    type="search"
                    placeholder="Search Appointments "
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-warning me-2">
                    <FontAwesomeIcon icon={faSliders} className="mr-2" />
                  </button>
                  <button className="btn btn-outline-primary me-2">
                    <FontAwesomeIcon icon={faBell} className="mr-2" />
                  </button>
                  <div className="card rounded-circle shadow ">
                    <FontAwesomeIcon icon={faUserDoctor} className="p-2 text-primary" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-8 col-sm-7 col-lg- ">
            <body>
              <div className="col-md-11 col-sm-10 col-lg- mt-3 ms-3 ">
                <div className="card p-4 mt-4 ms-1 rounded-5 shadow " style={{ backgroundColor: '#5646eb', color: 'white' }} >
                  <h4 className="text-start text-greet">{`${greeting},  Doc!`}</h4>
                  <p className="text-start fw-lighter font-monospace">Have a nice day at work.!</p>
                </div>
              </div>
              <div>
                <p className="fs-4 fw-semibold text-md-start text-sm-start text-lg-start text-xl-start mt-3 ms-2">Reports</p>
              </div>
              <div className="row  report-cards">
                <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
                  <div className="card  rounded-4 shadow">
                    <FontAwesomeIcon icon={faBedPulse} className="fs-4 mb-3 mt-4 rounded-2 p-1 icon-card" style={{ backgroundColor: '#5646eb', margin: '50px', color: 'white' }} />
                    <p className="fs-6 fw-medium">Total Patients</p>
                    <div className="mt-1 rounded-3" style={{ backgroundColor: '#5646eb', color: 'white' }}>
                      <p className="fs-6 fw-medium text-center">400</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
                  <div className="card  rounded-4 shadow bordershadow">
                    <FontAwesomeIcon icon={faBed} className="fs-4 p-1 mb-3 mt-4 rounded-2 bg-warning bg-opacity-75 icon-card" style={{ margin: '50px', color: 'white' }} />
                    <p className="fs-6 fw-medium">In-Patients</p>
                    <div className="mt-1 rounded-3" >
                      <p className="fs-6 fw-medium text-center">400</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
                  <div className="card  rounded-4 shadow ">
                    <FontAwesomeIcon icon={faFaceSmile} className="fs-4 mb-3 p-1 mt-4 rounded-2 icon-card bg-info" style={{ margin: '50px', color: 'white' }} />
                    <p className="fs-6 fw-medium">Out-Patients</p>
                    <div className="mt-1 " >
                      <p className="fs-6 fw-medium ">400</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm- col-lg-4 col-xl-3 mb-1">
                  <div className="card  rounded-4 shadow">
                    <FontAwesomeIcon icon={faCalendarCheck} className="fs-4 p-1 mb-3 mt-4 rounded-2 bg-success bg-opacity-75   icon-card" style={{ margin: '50px', color: 'white' }} />
                    <p className="fs-6 fw-medium">Appointments</p>
                    <div className="mt-1 rounded-3" >
                      <p className="fs-6 fw-medium text-center">{filteredReports.length}</p>
                    </div>
                  </div>
                </div>
              </div>

            </body>
          </div>
          <div className="col-md-4 col-sm-5 col-lg-">
            <nav class="navbar">
              <div class="container-fluid">
                {/* Navigation content */}
              </div>
            </nav>
            <div className="text-center">
              <p className="fs-4 mb-4 fwt-itaian  fw-bold text-primary">Profile </p>
            </div>
            <div className="row mt-1">
              <div className="col-md-12">
                <div class="container">

                  <div class="card profile-card p-3 py-4">

                    <div class="text-center">

                      <img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle" />

                      <h3 class="mt-2">Maria Smantha</h3>
                      <span class="mt-1 clearfix">Android Developer</span>
                      <small class="mt-4">I am an android developer working at google Inc at california,USA</small>

                      <div class="social-buttons mt-5">
                        <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button>
                        <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button>
                        <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button>
                        <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
                        <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
                      </div>

                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-" >
          <div className="row">
            <p className="fs-4 fw-semibold text-md-start text-sm-start text-lg-start text-xl-start mt-2">My Appointments</p>
          </div>
          <div className="row mt-1">
            <div className="col-md-12 table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                    <th>phone <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                    {/* <th>Location <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th> */}
                    <th>Dates <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                    <th>Time <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                    <th>Status <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                    <th>Grant <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center fst-italic fs-5 text-danger fw-semibold">No appointments found</td>
                    </tr>
                  ) : (
                    filteredReports.map((report, index) => (
                      <tr key={report.id}>
                        <td>{report.name}</td>
                        <td>{report.phone}</td>
                        {/* <td>{report.location}</td> */}
                        <td>{report.appointment}</td>
                        <td>{report.timeSlot}</td>
                        {/* <td>{report.appointmentStatus}</td> */}
                        <td className={report.appointmentStatus === 'COMPLETE' ? 'text-success' : 'text-danger'}>
                          {report.appointmentStatus}
                        </td>
                        {/* <td> <button type="button" class="btn btn-success btn-sm "  onClick={() => completeAppointment(report.id)}>Complete</button></td> */}
                        <td>
                          {report.appointmentStatus !== 'complete' ? (
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                              onClick={() => completeAppointment(report.id)}
                            >
                              Complete
                            </button>
                          ) : (
                            <button className="btn bg-success btn-sm">Complete</button>
                          )}
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardBody;

