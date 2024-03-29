import React, { useState } from 'react';
import './Home.css';
import medi from './medical-team.png';
import Body from './Body';
import UserLogin from '../UserModule/Components/UserLogin';
import { Link } from 'react-router-dom';
import Footer from './Footer'


const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <div className='head'>
        <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
            <img src={medi} width={"60px"} height={"60px"} style={{ marginLeft: "10px" }} alt="logo"></img>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Specialities
                  </a>
                  <ul className="dropdown-menu active">
                  <li><a className="dropdown-item" href="#">Cancare</a></li>
                    <li><a className="dropdown-item" href="#">Child Care</a></li>
                    <li><a className="dropdown-item" href="#"> Gynaecology</a></li>
                    <li><a className="dropdown-item" href="#">ENT</a></li>
                    <li><a className="dropdown-item" href="#">General medicine</a></li>
                    <li><a className="dropdown-item" href="#"> Neurology</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Our Doctors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Emergency Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/PatientLogin">
                    Patience Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/commanLogin" onClick={openLoginModal}>
                    Login
                  </a>
                </li>
              </ul>
            </div>
            {/* <button type="button" className="btn btn-primary" style={{ padding: "10px" }}>
              Make an Appointment
            </button> */}
             <button type="button" className="btn btn-primary" style={{ padding: "10px" }}>
        <Link to="/appointment" style={{ color: 'white', textDecoration: 'none' }}>
          Make an Appointment
        </Link>
      </button>
          </div>
        </nav>
      </div>

      <div className='containers'>
        <Body />
      </div>
      <div className='containers'>
     
      </div>

      {showLoginModal && (
        <div className="modal-overlay" onClick={closeLoginModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-secondary" onClick={closeLoginModal}>
              Close
            </button>
            <UserLogin />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
