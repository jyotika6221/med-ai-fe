import React, { useState } from "react";
import axios from "axios";

const Appointment = () => {
  const [docName, setDocName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make API request to your backend
      const response = await axios.post(
        "http://localhost:8000/api/twilio/appointment",
        {
          docName,
          patientName,
          phoneNumber,
          appointmentDate,
          appointmentTime,
        }
      );

      // Handle successful response
      setLoading(false);
      setSuccessMessage("Appointment booked successfully!");
      console.log(response.data); // Optional: Log the response from backend
    } catch (error) {
      // Handle error
      setLoading(false);
      setError("Failed to book appointment. Please try again.");
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="docName" className="form-label">
            Doctor's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="docName"
            required
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="patientName"
            required
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">
            Appointment Date
          </label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            required
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">
            Appointment Time
          </label>
          <input
            type="time"
            className="form-control"
            id="appointmentTime"
            required
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
        {successMessage && (
          <p className="text-success mt-3">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Appointment;
