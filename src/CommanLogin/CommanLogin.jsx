


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./CommanLogin.css"; // Import your CSS file
// import profile from "./profile.png";

// function CommanLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       // Clear previous error messages
//       setError("");

//       if (!email || !password) {
//         setError("Email and password are required.");
//         setTimeout(() => {
//           window.location.reload();
//         }, 3000);
//         return;
//       }

//       const response = await axios.post("http://localhost:8080/api/v1/commonLogin", {
//         email: email,
//         pazz: password, // Fix the typo in 'pazz' to 'pazzwd'
//       });

//       console.log("response", response);

//       if (response.status === 200) {
//         const { message } = response.data;
//         console.log("message", message);

//         if (response.data === "Doctor login success") {
//           // Use the correct path for navigation
//           navigate(`/PatientDashbord?email=${email}`);
//         } if (response.data === "User login success") {
//           // Use the correct path for navigation
//           navigate(`/Register`);
//         }  if (response.data === "Login Fail") {
//           setError("Invalid email or password. Please try again.");
//           setTimeout(() => {
//             window.location.reload();
//           }, 3000);
//         } else {
//           setError("Unexpected response from the server.");
//         }
//       } else {
//         setError("Unexpected error. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="commanLogin">
//       <div className="container-fluid">
//         <div className="row main-content bg-success text-center">
//           <div className="col-md-4 text-center company__info">
//             <span className="company__logo">
//               <img src={profile} alt="Company Logo" width="200px" />
//             </span>
//           </div>
//           <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
//             <div className="container-fluid">
//               <div className="row" style={{ marginTop: "20px" }}>
//                 <h2>Log In</h2>
//               </div>
//               <div className="row">
//                 <form className="form-group">
//                   <div className="row">
//                     <input
//                       type="text"
//                       name="email"
//                       id="email"
//                       className="form__input"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="row">
//                     <input
//                       type="password"
//                       name="password"
//                       id="password"
//                       className="form__input"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="row">
//                     <input type="submit" value="Submit" className="btn" onClick={login} />
//                   </div>
//                 </form>
//               </div>
//               <div className="row">
//                 <p>
//                   Don't have an account? <a href="#">Register Here</a>
//                   {error && <div className="error-message">{error}</div>}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommanLogin;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CommanLogin.css";
import profile from "./profile.png";

function CommanLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      setError("");

      if (!email || !password) {
        setError("Email and password are required.");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        return;
      }

      const response = await axios.post("http://localhost:8080/api/v1/commonLogin", {
        email: email,
        pazz: password, // Fix the typo in 'pazz' to 'pazzwd'
      });

      console.log("response", response);

      if (response.status === 200) {
        const { message } = response.data;
        console.log("message", message);
        
        if (message === "Doctor login success") {
          console.log("obj",response.data.data.doctorId);
          navigate(`/doctor`);
        } else if (message === "User login success") {
          console.log("obj",response.data.data.userId);
          navigate(`/Register`);
        } else if (message === "Login Fail") {
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
      setError("Invalid email or password. Please try again..");
      console.error(err);
    }
  };

  return (
    <div className="commanLogin">
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <img src={profile} alt="Company Logo" width="200px" />
            </span>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row" style={{ marginTop: "20px" }}>
                <h2>Log In</h2>
              </div>
              <div className="row">
                <form className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form__input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <input type="button" value="Submit" className="btn" onClick={login} />
                  </div>
                </form>
              </div>
              <div className="row">
                <p>
                  Don't have an account? <a href="#">Register Here</a>
                 <span style={{color:"red"}}> {error && <div className="error-message">{error}</div>}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanLogin;
