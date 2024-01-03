import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import UserLogin from './UserModule/Components/UserLogin';

import BookMedicalService from './PatientModule/Components/BookMedicalService';
import DoctorDashBoard from './DoctorModule/Components/DoctorDashBoard';



function App() {
  return (
    <div className="App">

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<UserLogin></UserLogin>}/>

        <Route path="/book-medical" element={<BookMedicalService></BookMedicalService>}/>
        <Route path="/doctor" element={<DoctorDashBoard></DoctorDashBoard>}/>

       </Routes>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
