import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const GenerateReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateReport = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://20.40.46.106:8000/api/report/generateDoc",
        { responseType: "blob" }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, "patient_report.pdf");

      setLoading(false);
    } catch (error) {
      setError("Failed to generate report. Please try again.");
      console.error("Error generating report:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Generate Report</h2>
      <button
        className="btn btn-primary"
        onClick={handleGenerateReport}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Report"}
      </button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default GenerateReport;
