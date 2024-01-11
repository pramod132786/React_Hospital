import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import UserLogin from './UserModule/Components/UserLogin';
import Registration from './Home/Registration';
import Appointment from './UserModule/Components/Appointment';
import PatientRegistration from './Patient/PatientRegistration';
import PatientHome from './PatientDashboard/PatientHome';
import PatientLogin from './Patient/PatientLogin';

import InPatientBody from './DoctorModule/Components/InPatientBody';
import DoctorDashboard from './DoctorModule/Components/DoctorDashBoard';
import OutPatientSideBar from './DoctorModule/Components/OutPatientsSideBar';
import BookMedicalService from './Patient/Components/BookMedicalService';
import CommanLogin from './CommanLogin/CommanLogin';
import InPatientsReports from './DoctorModule/Components/InPatientsReports';


function App() {
  return (
    <div className="App">

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/commanLogin" element={<CommanLogin></CommanLogin>}/>
        <Route path="/login" element={<UserLogin></UserLogin>}/>
        <Route path="/appointment" element={<Appointment></Appointment>}/>
        <Route path="/Register" element={<Registration></Registration>}/>
        <Route path="/PatientRegister" element={<PatientRegistration></PatientRegistration>}/>
        <Route path="/PatientLogin" element={<PatientLogin></PatientLogin>}/>
        <Route path="/PatientDashbord" element={<PatientHome></PatientHome>}/>
        <Route path="/book-medical" element={<BookMedicalService></BookMedicalService>}/>
        <Route path="/doctor" element={<DoctorDashboard></DoctorDashboard>}/>
        <Route path="/in-patient" element={<InPatientBody />} />
        <Route path="/out-patient" element={<OutPatientSideBar />} />
        <Route path="/in-patient-reports" element={<InPatientsReports />} />
        
       </Routes>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
