import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";

const MedicineReminder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    dose: "",
    medicineName: "",
    time: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const reminderData = {
      reminders: [
        {
          username: formData.username,
          dose: formData.dose,
          medicineName: formData.medicineName,
          time: formData.time,
          phoneNumber: formData.phoneNumber,
        },
      ],
    };

    try {
      const response = await axios.post(
        "https://med-ai-be.onrender.com/api/twilio/sendReminders",
        reminderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Reminder sent successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage("Error sending reminder. Please try again later.");
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

    <Navbar />

      <div className="container mt-5 reminder">
        <h2 className="text-center mt-5">Enter the details</h2>
        <Form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Form.Group controlId="dose">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="usernmae"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="dose">
            <Form.Label>Dose</Form.Label>
            <Form.Control
              type="text"
              name="dose"
              value={formData.dose}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="medicineName">
            <Form.Label>Medicine Name</Form.Label>
            <Form.Control
              type="text"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber" style={{ marginBottom: "20px" }}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="d-block mx-auto"
            style={{ width: "200px" }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reminder"}
          </Button>
          {message && <p className="mt-3 text-center">{message}</p>}
        </Form>
        <div id="google_translate_element" className="mt-5 text-center"></div>
      </div>

      <div className="Emergency_contact">
        <div className="Emergency_contact_inner ">
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
export default MedicineReminder;
