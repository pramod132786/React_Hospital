import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import UserLogin from './UserModule/Components/UserLogin';
<<<<<<< HEAD
import BookMedicalService from './PatientModule/Components/BookMedicalService';
import DoctorDashBoard from './DoctorModule/Components/DoctorDashBoard';
=======
>>>>>>> 26773b18ed24f9086e65a77b4f836182bfb10d5f


function App() {
  return (
    <div className="App">

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<UserLogin></UserLogin>}/>
<<<<<<< HEAD
        <Route path="/book-medical" element={<BookMedicalService></BookMedicalService>}/>
        <Route path="/doctor" element={<DoctorDashBoard></DoctorDashBoard>}/>
=======
>>>>>>> 26773b18ed24f9086e65a77b4f836182bfb10d5f
       </Routes>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
