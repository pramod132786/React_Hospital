import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Patient.css';
import patient from './patient.png';
import medi from './medical-team.png';
import { Link } from 'react-router-dom';


function PatientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [user, setUser] = useState(null);

    const openLoginModal = () => {
      setShowLoginModal(true);
    };
  

    const navigate = useNavigate();

    const login = async () => {
        try {
            // Clear previous error messages
            setError("");

            if (!email || !password) {
                setError("Email and password are required.");
                setTimeout(() => {
                   
                    window.location.reload();
                  }, 3000);
                return;
            }

            const response = await axios.post("http://localhost:9008/login", {
                email: email,
                phoneNumber: password,
            });

           console.log("response", response.data);

            if (response.status === 200) {
                const { status, user } = response.data;
                const { message } = response.data;
                console.log("message", status);

                if (status  === "Login success") {
                    // Use the correct path for navigation
                    setUser(user);
                    console.log("user",user);
                    navigate(`/PatientDashbord?email=${email}`);
                } else if (status  === "Login failed") {
                    setUser(null);
                    setError("Invalid email or password. Please try again.");
                    setTimeout(() => {
                   
                        window.location.reload();
                      }, 3000);
                } else {
                    setError("Unexpected response from the server.");
                }
            } else {
                setError("Unexpected error. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
            console.error(err);
        }
    };
  

    return (
       <div className="patirntLogin">
        <div className="container-fluid login-container">
                 <div className="row" >
                 
                <div className="col-md-12 d-flex justify-content-end">
                   
                    <Link to="/" className="btn btn-secondary btn-sm">
                       
                        <i className="bi bi-arrow-left text-info"></i>
                    </Link>
                </div>
                </div>
        <div className="login">
            <div className="container-fluid">
                <div className="wrapper">
                    <div className="logo">
                        <img src={patient} alt=""   width="0px"/>
                    </div>
                    <div className="text-center mt-4 name">
                        Hi User
                    </div>
                    <form className="p-3 mt-3" onSubmit={(e) => { e.preventDefault(); login(); }}>
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn mt-3">Login</button>
                    </form>
                    <div className="text-center fs-6">
                        <a href="#">Forget password?</a> or <a href="/PatientRegister">Sign up</a>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default PatientLogin;
