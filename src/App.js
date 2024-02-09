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
import Footer from './Home/Footer';
import DoctorAppointmentBoard from './DoctorModule/Components/DoctorAppointmentBoard';
import DoctorProfile from './DoctorModule/Components/DoctorProfile';
import Head from './Home/Head';
import Contact from './Home/Contact';
import Surgery from './DoctorModule/Components/Surgery';
import DoctorDetails from './DoctorModule/Components/DoctorDetails';
import Appointments from './DoctorModule/Components/Appointments';
import MyPatients from './DoctorModule/Components/MyPatients';
import PatientHistory from './DoctorModule/Components/PatientHistory';
import MedicalTestReport from './DoctorModule/Components/MedicalTestReport';
import OutPatientsReports from './DoctorModule/Components/OutPatientsReport';
import TechnicianProfile from './TechnicianProfile';
import DialysisWeeklySheet from './TechnicianModule/Component/DailysisWeeklySheet';
import InPatients from './DoctorModule/Components/InPatients';






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
        <Route path="/PatientDashbord/:patinetId/*" element={<PatientHome></PatientHome>}/>
        <Route path="/book-medical/:patinetId/*" element={<BookMedicalService></BookMedicalService>}/>
        {/* <Route path="/doctor" element={<DoctorDashboard></DoctorDashboard>}/> */}
        <Route path="/doctor/:doctorId/*" element={<DoctorDashboard />} />
        <Route path="/in-patient/:doctorId/*" element={<InPatients />} />
        <Route path="/out-patient/:doctorId/*" element={<OutPatientSideBar />} />
        <Route path="/inpatinet-appointment/:patinetId/*" element={<DoctorAppointmentBoard />} />
        <Route path="/in-patient-reports/:doctorId/*" element={<InPatientsReports />} />
        <Route path="/doctor-profile/:doctorId/*" element={<DoctorProfile></DoctorProfile>}/>
        <Route path="/footer" element={<Footer></Footer>}/>
        <Route path="/head" element={<Head></Head>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path="/surgery" element={<Surgery></Surgery>}/>
        <Route path="/doctordetails" element={<DoctorDetails></DoctorDetails>}/>
        <Route path="/appointments" element={<Appointments></Appointments>}/>
        <Route path="/my-patients" element={<MyPatients></MyPatients>}/>
        <Route path="/patients-history" element={<PatientHistory/>}/>
          
        <Route path="/MedicalTestReport" element={<MedicalTestReport/>}/>
        <Route path="/out-patients-report" element={<OutPatientsReports/>}/>
        <Route path='/technician-profile' element={<TechnicianProfile/>}/>
         <Route path='/weekly-report' element={<DialysisWeeklySheet/>}/>  

       </Routes>
       <Footer></Footer>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
