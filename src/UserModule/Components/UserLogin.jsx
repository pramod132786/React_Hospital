import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";
import { useNavigate } from 'react-router-dom';

function UserLogin({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [accountLockedError, setAccountLockedError] = useState("");
     
        const navigate = useNavigate();

    const login = async () => {

        try {
            if (!email || !password) {
                setError("Email and password are required.");
                return;
            }
            console.log(email);
            console.log(password);

            const response = await UserService.userLogin({
                email: email,
                pazz: password,
            });

            console.log(response);

           

            if (response.status===200) {
                // console.log(data.message);
                 navigate(`/PatientDashbord?email=${email}`);
              
                

            } else {
                // setError(data.message);
            }
        } catch (err) {
            // localStorage.setItem('isLoggedIn', false);
            
            // setAccountLockedError(err.response.data);
            console.log(err);
            // setTimeout(() => {
            //     window.location.reload();
            // }, 3000);
        }
    };

    return (
        <>

            <div className="container-fluid login-container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <Link to="/" className="btn btn-secondary btn-sm">
                            <i className="bi bi-backspace"></i>
                            <span className="ms-1">Back</span>{" "}
                        </Link>
                    </div>
                </div>


                <div className="row justify-content-center ">
                    {error && (
                        <div className="error alert alert-danger text-center col-md-5" role="alert">
                            <span className="fw-semibold"> {error}</span>
                        </div>
                    )}
                    {accountLockedError && (
                        <div className="error alert alert-danger text-center col-md-5" role="alert">
                            <span className="fw-semibold"> {accountLockedError}</span>
                        </div>
                    )}
                </div>
                <div className="row justify-content-center login-form">
                    <div className="card col-md-4 mb-5 mt-5">
                        <div className="mt-1 mb-5">
                            <h2 className="text-center fw-semibold mt-3">Login</h2>
                            <form className="form">
                                <div className="form-floating mb-3 mt-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                            setError("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === ' ') {
                                                e.preventDefault();
                                            }
                                        }}
                                        required
                                    />
                                    <label htmlFor="email" className="form-label">Your Email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                            setError("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === ' ') {
                                                e.preventDefault();
                                            }
                                        }}
                                        required
                                    />
                                    <label htmlFor="password" className="form-label">Your Password</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="d-grid gap-2  w-50 ">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={login}
                                        >
                                            <strong>Login</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex justify-content-end mb-3">
                            <Link to='/userForgot'>
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLogin;
