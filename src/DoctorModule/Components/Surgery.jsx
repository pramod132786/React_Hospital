// src/Surgery.js
import React, { useState, useEffect } from 'react';
import './Surgery.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Surgery = () => {
  const [surgeries, setSurgeries] = useState([]);
  const [formData, setFormData] = useState({
    surgeryName: '',
    date: '',
    time: '',
    proceduralDescription: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchSurgeries();
  }, []);

  const fetchSurgeries = async () => {
    try {
      const response = await fetch('http://localhost:9001/surgery'); // Replace with your backend URL
      const data = await response.json();
      setSurgeries(data);
    } catch (error) {
      console.error('Error fetching surgeries:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.surgeryName || !formData.date || !formData.time || !formData.proceduralDescription) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:9001/surgeries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Surgery added successfully:', data);

      setSuccess('Surgery added successfully!');
      setError('');

      // Optionally, you can reset the form after successful submission
      setFormData({
        surgeryName: '',
        date: '',
        time: '',
        proceduralDescription: '',
      });

      // Fetch updated list of surgeries
      fetchSurgeries();

      // Show success toast message
      toast.success('Surgery added successfully!');
    } catch (error) {
      console.error('Error adding surgery:', error);
      setError('Error adding surgery. Please try again.');
      setSuccess('');

      // Show error toast message
      toast.error('Error adding surgery. Please try again.');
    }
  };

  return (
    <div className='surgeryData'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-4" style={{color:"red"}}>Add Surgery</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="surgeryName" className="form-label" style={{color:"red"}}>
                      Surgery Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="surgeryName"
                      value={formData.surgeryName}
                      onChange={(e) => setFormData({ ...formData, surgeryName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label" style={{color:"red"}}>
                      <i className="fas fa-calendar-alt"></i> Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="time" className="form-label" style={{color:"red"}}>
                      <i className="fas fa-clock"></i> Time:
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="proceduralDescription" className="form-label" style={{color:"red"}}>
                      Procedural Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="proceduralDescription"
                      value={formData.proceduralDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, proceduralDescription: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Surgery
                  </button>
                  {error && <div className="text-danger mt-2">{error}</div>}
                  {success && <div className="text-success mt-2">{success}</div>}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-4" style={{color:"red"}}>Surgery List</h2>
                <ul className="list-group">
                  {surgeries.map((surgery) => (
                    <li key={surgery.surgeryId} className="list-group-item">
                      SurgeryName:{surgery.surgeryName} <br></br> SurgeryDate:{surgery.date} <br></br> SurgeryTime:{surgery.time} <br></br>SurgeryProceduralDescription:{surgery.proceduralDescription}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surgery;
