

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    validatePhone();
    validateAge();

    return isValid;
  };

  return (
    <div className="container mt-4">
        <h2>Patient Registration</h2>
      <div className="row" style={{marginTop:"50px"}}>
        <div className="col-md-4">

            
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="patientName" className="form-label">
                Patient Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.patientName ? 'is-invalid' : ''}`}
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
              {formErrors.patientName && (
                <div className="invalid-feedback">{formErrors.patientName}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className={`form-control ${formErrors.phoneNumber ? 'is-invalid' : ''}`}
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {formErrors.phoneNumber && (
                <div className="invalid-feedback">{formErrors.phoneNumber}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className={`form-control ${formErrors.age ? 'is-invalid' : ''}`}
                id="age"
                name="age"
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
                Gender
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
                Email
              </label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.bloodGroup ? 'is-invalid' : ''}`}
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
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
                Aadhar
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.aadhar ? 'is-invalid' : ''}`}
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
              {formErrors.aadhar && (
                <div className="invalid-feedback">{formErrors.aadhar}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="emergencyContact" className="form-label">
                Emergency Contact
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.emergencyContact ? 'is-invalid' : ''}`}
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                required
              />
              {formErrors.emergencyContact && (
                <div className="invalid-feedback">{formErrors.emergencyContact}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="diabetics" className="form-label">
                Diabetics
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
                Blood Pressure
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
                Thyroid
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
                Address
              </label>
              <textarea
                className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
              {formErrors.address && (
                <div className="invalid-feedback">{formErrors.address}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="text-center">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default PatientRegistration;
