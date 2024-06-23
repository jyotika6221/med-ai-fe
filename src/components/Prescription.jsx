import React, { useState } from "react";
import axios from "axios";

const Prescription = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [apiResponse, setApiResponse] = useState(null); // State to store API response

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Convert selected file to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];

        // Make API request to your backend
        const response = await axios.post(
          "http://localhost:8000/api/gemini/summarize",
          {
            imageBase64: base64String,
          }
        );

        // Handle successful response
        setLoading(false);
        setSuccessMessage("Image uploaded successfully!");
        setApiResponse(response.data); // Store API response in state
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        setLoading(false);
        setError("Please select a file to upload.");
      }
    } catch (error) {
      // Handle error
      setLoading(false);
      setError("Error uploading the file. Please try again.");
      console.error("Error uploading the file:", error);
    }
  };

  return (
    <div className="upload-prescription">
      <h2>Upload Prescription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
        {successMessage && (
          <p className="text-success mt-3">{successMessage}</p>
        )}
      </form>

      {apiResponse && (
        <div className="response mt-3">
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Prescription;
