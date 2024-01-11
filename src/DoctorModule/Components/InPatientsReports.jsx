import React, { useState, useEffect } from "react";
import "./InPatientsReport.css";
import { BsEye } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload, faArrowsUpDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import InPatients from "./InPatients";

const InPatientsReports = () => {
  const [testReports, setTestReports] = useState([
    {
      id: 1,
      patientName: "John Doe",
      age: 30,
      gender: "Male",
      testName: "Blood Test",
      testDate: "2024-01-10",
      testPdfUrl: "https://example.com/path/to/pdf1.pdf",
    },
    {
        id: 2,
        patientName: "Pramod",
        age: 31,
        gender: "Male",
        testName: "blood Test",
        testDate: "2024-01-10",
        testPdfUrl: "https://example.com/path/to/pdf1.pdf",
      },
      {
        id: 3,
        patientName: "srikanth",
        age: 30,
        gender: "Male",
        testName: "cancer test",
        testDate: "2024-01-10",
        testPdfUrl: "https://example.com/path/to/pdf1.pdf",
      },
      {
        id: 4,
        patientName: "Naveen",
        age: 30,
        gender: "Male",
        testName: "tyroid",
        testDate: "2024-01-10",
        testPdfUrl: "https://example.com/path/to/pdf1.pdf",
      },
      {
        id: 5,
        patientName: "Sunil",
        age: 30,
        gender: "Male",
        testName: "platelet count",
        testDate: "2024-01-10",
        testPdfUrl: "https://example.com/path/to/pdf1.pdf",
      },
      {
        id: 6,
        patientName: "Hussen",
        age: 30,
        gender: "Male",
        testName: "Lung",
        testDate: "2024-01-10",
        testPdfUrl: "https://example.com/path/to/pdf1.pdf",
      },
    // Add more dummy data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    // Filter reports based on the search term when searchTerm changes
    const filtered = testReports.filter(
      (report) =>
        report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.id.toString().includes(searchTerm)
    );
    setFilteredReports(filtered);
  }, [searchTerm, testReports]);

  const fetchData = async () => {
    try {
      // Replace "YOUR_BACKEND_API_ENDPOINT" with your actual backend API endpoint
      const response = await axios.get("YOUR_BACKEND_API_ENDPOINT");
      setTestReports(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const viewPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const downloadPdf = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "report.pdf";
    link.click();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Fetch data from the backend and trigger the search when the form is submitted
    await fetchData();
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="d-flex justify-content-end">
            <Link to="/in-patient">
              <button className="btn btn-secondary"><FontAwesomeIcon icon={faArrowLeft} className="fs-6 me-1"/>Back</button>
            </Link>
          </div>
          <h3 className="text-center fw-bold text-primary mb-4 in-patient-line">In-Patient Test Reports</h3>
        </div>
        <nav className="navbar">
          <div className="container-fluid d-flex justify-content-end">
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by patient name or ID"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </nav>
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Age <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Gender <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Test Name <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Test Date <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Test Report-PDF <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
                <th>Action <FontAwesomeIcon icon={faArrowsUpDown} className="text-warning" /></th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-secondary fw-bold">No reports found</td>
                </tr>
              ) : (
                filteredReports.map((report, index) => (
                  <tr key={report.id}>
                    <td>{index + 1}</td>
                    <td>{report.patientName}</td>
                    <td>{report.age}</td>
                    <td>{report.gender}</td>
                    <td>{report.testName}</td>
                    <td>{report.testDate}</td>
                    <td>
                      <a href={report.testPdfUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} className="fs-3 text-danger me-1" />
                        <strong>Report</strong>
                      </a>
                    </td>
                    <td className="tt-button">
                      <button className="btn btn-primary btn-sm me-2 t-button" onClick={() => viewPdf(report.testPdfUrl)}>
                        <BsEye className="fs-5" /> <strong>view</strong>
                      </button>
                      <button className="btn btn-warning btn-sm t-button" onClick={() => downloadPdf(report.testPdfUrl)}>
                        <FontAwesomeIcon icon={faDownload} className="fs-5 " /> <strong>download!</strong>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InPatientsReports;