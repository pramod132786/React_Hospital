
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from  './back.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt, faVenusMars,faShieldAlt, faEnvelope,faExclamationTriangle, faCalendar, faHeartbeat, faWeight, faAddressCard, faTint, faIdCard, faPhone, faHeart, faUserMd, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    age: '',
    gender: '',
    email: '',
    bloodGroup: '',
    aadhar: '',
    emergencyContact: '',
    diabetics: '',
    bp: '',
    thyroid: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState({
    patientName: '',
    phoneNumber: '',
    age: '',
    gender: '',
    email: '',
    bloodGroup: '',
    aadhar: '',
    emergencyContact: '',
    diabetics: '',
    bp: '',
    thyroid: '',
    address: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the corresponding error when the user types
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:9008/addPatient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage('Form submitted successfully!');
          setErrorMessage('');
          console.log('Form submitted successfully:', formData);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          setErrorMessage(`Error submitting form: ${response.statusText}`);
          setSuccessMessage('');
          console.error('Error submitting form:', response.statusText);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        setErrorMessage(`Error submitting form: ${error.message}`);
        setSuccessMessage('');
        console.error('Error submitting form:', error.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;

    const validatePhone = () => {
      const regex = /^[6789]\d{9}$/;
      if (!formData.phoneNumber.match(regex)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: 'Please enter a valid phone number starting with 6, 7, 8, or 9.',
        }));
        isValid = false;
      }
    };

    const validateAge = () => {
      if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          age: 'Please enter a valid age as a positive number.',
        }));
        isValid = false;
      }
    };

    const requiredFields = [
      'patientName',
      'phoneNumber',
      'age',
      'gender',
      'email',
      'bloodGroup',
      'aadhar',
      'emergencyContact',
      'diabetics',
      'bp',
      'thyroid',
      'address',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [field]: 'This field is required.',
        }));
        isValid = false;
      }
    }
    if (formData.patientName && formData.patientName.length < 4) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        patientName: 'Patient name must be at least 4 characters long.',
      }));
      isValid = false;
    }
    if (formData.aadhar && !/^[2-9]\d{11}$/.test(formData.aadhar)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        aadhar: 'Invalid Aadhar number. Please enter a valid 12-digit Aadhar number.',
      }));
      isValid = false;
    }
    // Assuming formData.bloodGroup is the field for blood group
    if (formData.bloodGroup && !/^(A|B|AB|O)[\+-]$/.test(formData.bloodGroup)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        bloodGroup: 'Invalid blood group. Please enter a valid blood group (A, B, AB, O) with an optional Rh factor (+ or -).',
      }));
      isValid = false;
    }


    if (formData.emergencyContact && !/^[6-9]{1}[0-9]{9}$/.test(formData.emergencyContact)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emergencyContact: 'Invalid emergency contact. Please enter a valid 10-digit emergency contact number starting with a digit between 6 to 9.',
      }));
      isValid = false;
    }
    // Assuming formData.email is the field for the email address
    if (formData.email && !/^[a-zA-Z0-9._%+-]+@gmail\.(com|in|net|org)$/i.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address. Please enter a valid Gmail address with domain (com, in, net, org).',
      }));
      isValid = false;
    }
    // Assuming formData.age is the field for the age
    if (
      formData.age === '' ||               // Check if the age is not empty
      isNaN(formData.age) ||               // Check if the age is not NaN (non-numeric)
      formData.age < 1 || formData.age > 100 // Check if the age is within the range [1, 100]
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        age: 'Please enter a valid age between 1 to 100.',
      }));
      isValid = false;
    }

    // Assuming formData.address is the field for the address
    if (!formData.address) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: 'Please enter a valid address.',
      }));
      isValid = false;
    }





    validatePhone();
    validateAge();

    return isValid;
  };

  return (
    <div className="container-fluid login-container" style={{ background: 'linear-gradient(to right, #E1E1E1, #D3D3D3)' ,marginTop:"0px"}}>
       <div className="row" >
                 
                 <div className="col-md-12 d-flex justify-content-end">
                    
                     <Link to="/" className="btn btn-secondary btn-sm">
                        
                         <i className="bi bi-arrow-left text-info"></i>
                     </Link>
                 </div>
                 </div>
    <div className="container mt-4" >
      <h2 >Patient Registration</h2>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-4">


          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="patientName" className="form-label">
              <FontAwesomeIcon icon={faUser} style={{ color: 'blue' }} /> Patient Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.patientName ? 'is-invalid' : ''}`}
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                pattern="^[a-zA-Z\s]$"

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
              {formErrors.patientName && (
                <div className="invalid-feedback">{formErrors.patientName}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
              <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'green' }} />  Phone
              </label>
              <input
                type="tel"
                className={`form-control ${formErrors.phoneNumber ? 'is-invalid' : ''}`}
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber.slice(0, 10)}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (!/^\d$/.test(e.key) && e.key !== 'Backspace') {
                    e.preventDefault();
                  }
                }}
                pattern="^[6-9]{1}[0-9]{9}"
                required
              />
              {formErrors.phoneNumber && (
                <div className="invalid-feedback">{formErrors.phoneNumber}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
              <FontAwesomeIcon icon={faCalendar} style={{ color: 'purple' }} /> Age
              </label>
              <input
                type="number"
                className={`form-control ${formErrors.age ? 'is-invalid' : ''}`}
                id="age"
                name="age"
                min={1}
                max={100}
                value={formData.age}
                onChange={handleChange}
                required
              />
              {formErrors.age && <div className="invalid-feedback">{formErrors.age}</div>}
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
              <FontAwesomeIcon icon={faVenusMars} style={{ color: 'purple' }} /> Gender
              </label>
              <select
                className={`form-select ${formErrors.gender ? 'is-invalid' : ''}`}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {formErrors.gender && (
                <div className="invalid-feedback">{formErrors.gender}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'red' }} /> Email
              </label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                  }
                }}
                required
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="bloodGroup" className="form-label">
              <FontAwesomeIcon icon={faTint} style={{ color: 'orange' }} />  Blood Group
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.bloodGroup ? 'is-invalid' : ''}`}
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                  }
                }}
                required
              />
              {formErrors.bloodGroup && (
                <div className="invalid-feedback">{formErrors.bloodGroup}</div>
              )}
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="aadhar" className="form-label">
              <FontAwesomeIcon icon={faIdCard} style={{ color: 'brown' }} /> Aadhar
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.aadhar ? 'is-invalid' : ''}`}
                id="aadhar"
                name="aadhar"
                value={formData.aadhar.slice(0, 12)}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (!/^\d$/.test(e.key) && e.key !== 'Backspace') {
                    e.preventDefault();
                  }
                }}
                pattern='/^[2-9]\d{11}$/'
                required
              />
              {formErrors.aadhar && (
                <div className="invalid-feedback">{formErrors.aadhar}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="emergencyContact" className="form-label">
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'orange' }} />  Emergency Contact
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.emergencyContact ? 'is-invalid' : ''}`}
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact.slice(0, 10)}
                onChange={handleChange}

                onKeyDown={(e) => {
                  if (!/^\d$/.test(e.key) && e.key !== 'Backspace') {
                    e.preventDefault();
                  }
                }}
                pattern="^[6-9]{1}[0-9]{9}"
                required

              />
              {formErrors.emergencyContact && (
                <div className="invalid-feedback">{formErrors.emergencyContact}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="diabetics" className="form-label">
              <FontAwesomeIcon icon={faHeartbeat} style={{ color: 'red' }} />  Diabetics
              </label>
              <select
                className={`form-select ${formErrors.diabetics ? 'is-invalid' : ''}`}
                id="diabetics"
                name="diabetics"
                value={formData.diabetics}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {formErrors.diabetics && (
                <div className="invalid-feedback">{formErrors.diabetics}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="bp" className="form-label">
              <FontAwesomeIcon icon={faWeight} style={{ color: 'green' }} />  Blood Pressure
              </label>
              <select
                className={`form-select ${formErrors.bp ? 'is-invalid' : ''}`}
                id="bp"
                name="bp"
                value={formData.bp}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
              {formErrors.bp && <div className="invalid-feedback">{formErrors.bp}</div>}
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="thyroid" className="form-label">
              <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'green' }} /> Thyroid
              </label>
              <select
                className={`form-select ${formErrors.thyroid ? 'is-invalid' : ''}`}
                id="thyroid"
                name="thyroid"
                value={formData.thyroid}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="normal">Normal</option>
                <option value="hyperthyroidism">Hyperthyroidism</option>
                <option value="hypothyroidism">Hypothyroidism</option>
              </select>
              {formErrors.thyroid && (
                <div className="invalid-feedback">{formErrors.thyroid}</div>
              )}
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              <FontAwesomeIcon icon={faAddressCard} style={{ color: 'navy' }} /> Address
              </label>
              <textarea
                className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9\.,/-()]$"

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
              ></textarea>
              {formErrors.address && (
                <div className="invalid-feedback">{formErrors.address}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="text-center col-md-12">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="row">
                <div className="col-md-6 mb-3 text-center" >
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{marginLeft:"500px"}}>
                        Register
                    </button>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="text-center fs-6">
                    <span style={{ fontFamily: 'Your Custom Font', fontSize: '18px', color: '#333', marginRight: '10px' }}>
                    You have an account, please
            </span>

            <a href="/PatientLogin" className="btn btn-success" style={{ marginLeft: '0px', fontFamily: 'Your Custom Font' }}>
                Sign In
            </a>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
    </div>
  );
};

export default PatientRegistration;
