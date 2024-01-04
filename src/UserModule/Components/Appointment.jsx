


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    doctor_specialty: '',
    patient_name: '',
    patient_phone: '',
    appointment_date: '',
    selected_doctor: '',
  });
  const [doctorSpecialties, setDoctorSpecialties] = useState([]);
  const [doctorsBySpecialty, setDoctorsBySpecialty] = useState([]);
  const [minAppointmentDate, setMinAppointmentDate] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchDoctorSpecialties();
    setMinAppointmentDate(getFormattedCurrentDate());
    document.title = 'Add Appointment';
  }, []);

  const fetchDoctorSpecialties = async () => {
    try {
      const response = await axios.get('http://localhost:9000/specialty/all');
      setDoctorSpecialties(response.data);
    } catch (error) {
      console.error('Error fetching specialties:', error.message);
    }
  };

  const fetchDoctorsBySpecialty = async (specialtyId) => {
    try {
      const response = await axios.get(`http://localhost:9000/doctor/${specialtyId}`);
      setDoctorsBySpecialty(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));

    if (name === 'patient_phone') {
      validatePhoneNumber(value);
    } else if (name === 'patient_name') {
      validatePatientName(value);
    } else if (name === 'doctor_specialty') {
      fetchDoctorsBySpecialty(value);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const isValid = /^[6789][0-9]{9}$/.test(phoneNumber);
    setPhoneError(!isValid);
  };

  const validatePatientName = (name) => {
    const isValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);
    setNameError(isValid ? '' : 'Please enter a valid name with only letters and spaces.');
  };

  const handleTimeSlotSelect = (timeSlot) => {
    const selectedDateTime = new Date(`${input.appointment_date} ${timeSlot}`);
    const currentDateTime = new Date();
  
    if (selectedDateTime <= currentDateTime) {
      setMessage('Cannot select past or current date and time');
    } else {
      setSelectedTimeSlot(timeSlot);
      setMessage('');
    }
  };
  
  const handleSubmit = async () => {
    if (phoneError || nameError || !selectedTimeSlot || message) {
      setMessage('Invalid input or missing time slot');
      return;
    }

    try {
      const selectedSpecialty = doctorSpecialties.find(
        (spec) => spec.id === parseInt(input.doctor_specialty, 10)
      );

      const response = await axios.post('http://localhost:9000/doctor/save', {
        name: input.patient_name,
        phone: input.patient_phone,
        appointment: input.appointment_date,
        timeSlot: selectedTimeSlot,
        speciality: selectedSpecialty?.specialty,
        doctor: input.selected_doctor,
      });

      if (response.status === 200) {
        setMessage(`Success! Serial Number: ${response.data.serialNumber}`);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setMessage(`Error: ${response.data.error}`);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error('Error during submission:', error.message);
      setMessage('Error during submission. Please check mobile number.');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!input.doctor_specialty || !input.patient_name || !input.patient_phone || !input.appointment_date || !selectedTimeSlot || !input.selected_doctor) {
      setMessage('Please fill in all required fields');
      return;
    }

    if (phoneError || nameError || message) {
      setMessage('Invalid input or missing time slot');
      return;
    }

    handleSubmit();
  };

  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const availableTimeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="container mt-4" >
      <div className="card p-4" >
        <form onSubmit={handleFormSubmit}>
          <h2 className="mb-4">Add Appointment</h2>

          <div className="row g-3">
            <div className="col-6">
              <label htmlFor="doctorSpecialty" className="form-label">
                Select Doctor Specialty
              </label>
              <select
                className="form-select"
                id="doctorSpecialty"
                name="doctor_specialty"
                value={input.doctor_specialty}
                onChange={handleChange}
                required
              >
                <option value="">Select a specialty</option>
                {doctorSpecialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-6">
              <label htmlFor="doctor" className="form-label">
                Select Doctor
              </label>
              <select
                className="form-select"
                id="doctor"
                name="selected_doctor"
                value={input.selected_doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select a doctor</option>
                {doctorsBySpecialty.map((doctor) => (
                  <option key={doctor.id} value={doctor.doctorName}>
                    {doctor.doctorName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-6">
              <label htmlFor="patientName" className="form-label">
                Patient's Name
              </label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                id="patientName"
                name="patient_name"
                value={input.patient_name}
                onChange={handleChange}
                placeholder="Enter patient name"
                required
              />
              {nameError && (
                <div className="invalid-feedback">{nameError}</div>
              )}
            </div>

            <div className="col-6">
              <label htmlFor="patientPhone" className="form-label">
                Patient's Phone
              </label>
              <input
                type="tel"
                pattern="[6789][0-9]{9}"
                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                id="patientPhone"
                name="patient_phone"
                value={input.patient_phone}
                onChange={handleChange}
                placeholder="Enter patient phone"
                required
              />
              {phoneError && (
                <div className="invalid-feedback">
                  Please enter a valid phone number starting with 6, 7, 8, or 9.
                </div>
              )}
            </div>

            <div className="col-6">
              <label htmlFor="appointmentDate" className="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                className="form-control"
                id="appointmentDate"
                name="appointment_date"
                value={input.appointment_date}
                onChange={handleChange}
                placeholder="Enter appointment date"
                min={minAppointmentDate}
                required
              />
            </div>

            <div className="col-6">
              <label htmlFor="timeSlot" className="form-label">
                Select Time Slot
              </label>
              <select
                className="form-select"
                id="timeSlot"
                name="time_slot"
                value={selectedTimeSlot}
                onChange={(e) => handleTimeSlotSelect(e.target.value)}
                required
              >
                <option value="">Select a time slot</option>
                {availableTimeSlots.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button style={{ marginLeft: "50px", width: "80px" }}
                type="button"
                className="btn btn-secondary "
                onClick={handleBackButtonClick}
              >
                Back
              </button>
            </div>

            <div className="col-12 mt-4">
              {message && (
                <div
                  className={`alert ${
                    message.includes('Success') ? 'alert-success' : 'alert-danger'
                  }`}
                  role="alert"
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
