import React from 'react';
import './Home.css';
import medi from './medical-team.png';
import Body from './Body';

const Home = () => {
  
  return (
    <div>
    <div className='head'>
      <nav class="navbar navbar-expand-lg bg-body-primary">
       
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Hospital</a> */}
    <img src={medi} width={"60px"} height={"60px"} style={{marginLeft:"10px"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link  active"  href="#">About Us</a>
        </li>
       
        {/* <li class="nav-item">
          <a class="nav-link  active" href="#">Our Hospitals</a>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link   active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Specialities
          </a>
          <ul class="dropdown-menu active">
            <li><a class="dropdown-item" href="#">Cancare</a></li>
            <li><a class="dropdown-item" href="#">Child Care</a></li>
            <li><a class="dropdown-item" href="#">Department of Gynaecology</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Our Doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active" href="#">Emergency Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Patience Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"> Login</a>
        </li>
      </ul>
      
    </div>
    <button type="button" class="btn btn-primary " style={{padding:"10px"}}>Make an Appointment</button>
  </div>
</nav>
      
 </div>

    <div className='containers'>
    <Body></Body>
    </div>
    
    </div>
  );
};

export default Home;
