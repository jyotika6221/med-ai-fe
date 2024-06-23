import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Prescription = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];

        const response = await axios.post(
          "https://med-ai-be.onrender.com/api/gemini/summarize",
          {
            imageBase64: base64String,
          }
        );

        setLoading(false);
        setSuccessMessage("Image uploaded successfully!");
        setApiResponse(response.data);

        console.log("Response Text:", response.data);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        setLoading(false);
        setError("Please select a file to upload.");
      }
    } catch (error) {
      setLoading(false);
      setError("Error uploading the file. Please try again.");
      console.error("Error uploading the file:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container my-5 upload-prescription">
        <h3>Upload Prescription and get the summarized version of it by Google Gemini</h3>
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
            {loading ? "Uploading..." : "Get my prescription summarized"}
          </button>
          {error && <p className="text-danger mt-3">{error}</p>}
          {successMessage && (
            <p className="text-success mt-3">{successMessage}</p>
          )}
        </form>

        {apiResponse && (
          <div markdown="1" className="response mt-3">

            {apiResponse.summary}
            
          </div>

        )}
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

export default Prescription;
