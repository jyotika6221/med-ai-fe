import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const MedicineReminder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
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
          dose: formData.dose,
          medicineName: formData.medicineName,
          time: formData.time,
          phoneNumber: formData.phoneNumber,
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://20.40.46.106:8000/api/twilio/sendReminders",
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Enter the details</h2>
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
  );
};
export default MedicineReminder;
