import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Navbar from "./Navbar";

const GenerateReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');

  const handleGenerateReport = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://med-ai-be.onrender.com/api/report/generateDoc",
        { username },
        { responseType: "arraybuffer" }
      );

      const pdfBuffer = response.data;
      const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });
      saveAs(pdfBlob, "patient_report.pdf");

      setLoading(false);
    } catch (error) {
      setError("Failed to generate report. Please try again.");
      console.error("Error generating report:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container report">
        <h2>Generate Report</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />
        <button
          className="btn btn-primary"
          onClick={handleGenerateReport}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Report"}
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>

      <div className="Emergency_contact">
        <div className="Emergency_contact_inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="single_emergency">
                  <div className="info">
                    <span>We are here for you</span>
                    <h3>Book Appointment</h3>
                  </div>
                  <div className="info_button">
                    <a href="#" className="boxed-btn3-white">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_emergency align-items-center d-flex justify-content-end">
                  <div className="icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="info">
                    <span>Emergency Medical Care</span>
                    <h3>911</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateReport;
