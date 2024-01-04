import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Registration.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Registration() {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const[genderError,setGenderError] =useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [errmail, setErrMail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [addressError, setAddressError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const validGenders = ["male", "female", "others"];
  const[bloodGroup,setBloodGroup] = useState("");
  const[bloodGroupError,setBloodGroupError] = useState("");
  async function save(event) {
    event.preventDefault();
    if (!isValidEmail || addressError) {
      setErrMail(true); // Show the error message
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/v1/user/save", {
        name: customerName,
        phoneNumber: mobileNumber,
        userEmail: emailId,
        pazzwd: password,
        address: address,
        gender:gender,
        bloodGroup:bloodGroup
      });
      setRegistrationSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      // Handle registration failure
      console.error(err);
      setErr(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  const handleMobileNumberChange = (event) => {
    const newMobileNumber = event.target.value;

    // Ensure the entered value is numeric
    if (!isNaN(newMobileNumber)) {
      setMobileNumber(newMobileNumber);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in|net|org)$/i;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmailId(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleGenderChange = (event) => {
    const updatedValue = event.target.value.toLowerCase();
    setGender(updatedValue);
    setGenderError(!validGenders.includes(updatedValue));
  };

  

  return (
    <div className="china">
      <Navbar expand="lg" fixed="top" className='navbarstyle'>
        <Container fluid>
          <Navbar.Brand href="#home">
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>

            <div className="navbar-collapse justify-content-end">
              <a className="nav-link" href="#">
                <i class="bi bi-house homeIcon text-black"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="mt-4 d-flex justify-content-center" style={{ marginTop: "10vh" }}>
        <section class="vh-50" >
          <div class="container h-50">
            <div class="row d-flex justify-content-center align-items-center h-50">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                  <div className=" d-flex justify-content-center mt-3">
                    {registrationSuccess && (
                      <div
                        className="success alert alert-success text-center col-md-5"
                        role="alert"
                      >
                        <span className="fw-semibold">Registration success</span>
                      </div>
                    )}

                    {err && (
                      <div
                        className="error alert alert-danger text-center col-md-5"
                        role="alert"
                      >
                        <span className="fw-semibold">Mobile number or Email Already exists</span>
                      </div>
                    )}
                  </div>

                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

                        <form class="mx-1 mx-md-4" onSubmit={save}>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input
                            type="text"
                           id="customerName"
                           class="form-control"
                           value={customerName}
                           onChange={(event) => {
                            const updatedValue = event.target.value;
                             setCustomerName(updatedValue);
                            }}
                             pattern="^[a-zA-Z\s]{5,25}$"
                           title="Customer name must be between 5 to 25 characters."
                           onInput={(e) => {
                              e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                             e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
                           }}
                             onKeyDown={(e) => {
                           if (e.key === ' ' && e.target.selectionStart === 0) {
                               e.preventDefault();
                             }
                             }}
                           required
                               />

                              <label class="form-label" for="customerName" >Your Name</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="emailId"
                                class={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
                                value={emailId}
                                onChange={handleEmailChange}
                                pattern="[a-zA-Z0-9._%+-]+@(gmail\.com)[a-zA-Z0-9.-]+\.(com|in|org|net)"
                               title="Invalid email. Please use a Gmail address ending with .com, .in, .org, or .net."
                                onInput={(e) => {
                                 e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
                               }}
                                 onKeyDown={(e) => {
                               if (e.key === ' ') {
                                   e.preventDefault();
                                 }
                                 }}
                                
                                required
                              />
                              <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fa-solid fa-mobile-screen fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="mobileNumber"
                                class="form-control"
                                value={mobileNumber.slice(0, 10)} 
                                onChange={handleMobileNumberChange}
                                onKeyDown={(e) => {
                                  if (e.key === ' ') {
                                    e.preventDefault();
                                  }
                                }}
                                pattern="^[6-9]{1}[0-9]{9}"
                                title="Enter 10 digit mobile number"
                                required
                              />
                              <label class="form-label" for="form3Example1c">Your Phone Number</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fa-solid fa-map-location-dot fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="address"
                                class={`form-control ${addressError ? 'is-invalid' : ''}`}
                                value={address}
                                onChange={(event) => {
                                  const updatedValue = event.target.value;
                                  setAddress(updatedValue);
                                  setAddressError(updatedValue.length < 20);
                                }}
                                pattern="^[a-zA-Z0-9\.,/-()]{25,}$"
                                title="Address must be at least 25 characters."
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s.,-/()]/g, '');
                                  e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === ' ' && e.target.selectionStart === 0) {
                                      e.preventDefault();
                                    }
                                    }}
                                required
                              />
                              <label class="form-label" for="address">Your Address</label>
                              {addressError && (
                                <div className="invalid-feedback">
                                  Please enter an address with at least 20 characters.
                                </div>
                              )}
                            </div>
                          </div>
                    

                          <div className="d-flex flex-row align-items-center mb-4">
      <i className="fas fa-venus-mars fa-lg me-3 fa-fw"></i>
      <div className="form-outline flex-fill mb-0">
        <input
          type="text"
          id="gender"
          className={`form-control ${genderError ? 'is-invalid' : ''}`}
          value={gender}
          onChange={handleGenderChange}
          pattern="^[a-zA-Z\s]{1,}$"
          title="Gender must not be empty."
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
            e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' && e.target.selectionStart === 0) {
              e.preventDefault();
            }
          }}
          required
        />
        <label className="form-label" htmlFor="gender">
          Your Gender
        </label>
        {genderError && (
          <div className="invalid-feedback">
            Please enter a valid gender (male, female, others).
          </div>
        )}
      </div>
    </div>

    <div className="d-flex flex-row align-items-center mb-4">
      <i className="fa-solid fa-heartbeat fa-lg me-3 fa-fw"></i>
      <div className="form-outline flex-fill mb-0">
        <input
          type="text"
          id="bloodGroup"
          className={`form-control ${bloodGroupError ? 'is-invalid' : ''}`}
          value={bloodGroup}
          onChange={(event) => {
            const updatedValue = event.target.value.toUpperCase();
            setBloodGroup(updatedValue);
            // setBloodGroupError(
            //   !/^(A|B|AB|O+|\s*I\s*DONT\s*KNOW\s*|NO)[\s+-]*$/i.test(updatedValue)
            // );
            // setBloodGroupError(
            //   !/^(A|B|AB|O)([+-]|(\s*I\s*DONT\s*KNOW\s*)|NO)$/i.test(updatedValue)
            // );
            setBloodGroupError(
              !/^(A|B|AB|O)([+-](\s*I\s*DONT\s*KNOW\s*)?)?$/i.test(updatedValue)
            );
            
            
          }}
          pattern="^(A|B|AB|O|\s*I\s*DONT\s*KNOW\s*|NO)[\s+-]*$"
          title="Blood group must be in the format A+, B-, AB+, I DON'T KNOW Enter NO, etc."
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/[^ABO+\-\sI\sDONT\sKNOW\sNO]/gi, '') // Allow only A, B, AB, O, +, -, I, spaces, 'I DONT KNOW', and 'NO'
              .replace(/(\s+)/g, ' '); // Replace consecutive spaces with a single space
          }}
          required
        />
        <label className="form-label" htmlFor="bloodGroup">
          Your Blood Group
        </label>
        {bloodGroupError && (
          <div className="invalid-feedback">
            Please enter a valid blood group in the format A+, B-, AB+, I DON'T KNOW, NO, etc.
          </div>
        )}
      </div>
    </div>
                         
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="password"
                                class="form-control"
                                value={password}
                                onChange={(event) => {
                                  setPassword(event.target.value);
                                }}
                                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                                title="Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long."
                                onKeyDown={(e) => {
                                  if (e.key === ' ') {
                                    e.preventDefault();
                                  }
                                }}
                                required
                              />
                              <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" class="btn btn-primary btn-lg">Register</button>
                          </div>
                          <div className="d-flex flex-row">
                            <div class="p-2 mt-2"><p>if you have an account please sign-In?</p> </div>
                            <div class="p-2"><Link
                              to='/login'
                              className='btn btn-primary border w-40 '
                            >
                              Login
                            </Link></div>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          class="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </div>
  );
}

export default Registration;
