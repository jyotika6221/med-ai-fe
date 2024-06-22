import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Navbar() {
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
    // setLoading(true);
    // setError(null);

    console.log(
      docName,
      patientName,
      phoneNumber,
      appointmentDate,
      appointmentTime
    );
    try {
      // Make API request to your backend
      const response = await axios.post(
        "http://20.40.46.106:8000/api/twilio/appointment",
        {
          docName,
          patientName,
          phoneNumber,
          appointmentDate,
          appointmentTime,
        }
      );

      setLoading(false);
      setSuccessMessage("Appointment booked successfully!");
      console.log(response.data); 
    } catch (error) {

      setLoading(false);
      setError("Failed to book appointment. Please try again.");
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div>
      <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3">
                  <h2 className="text-white">Med-AI</h2>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="menu_wrap d-none d-lg-block">
                    <div className="menu_wrap_inner d-flex align-items-center justify-content-end">
                      <div className="main-menu">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link to="/home">home</Link>
                            </li>
                            <li>
                              <Link to="/reminder">Medicine Reminder</Link>
                            </li>
                            <li>
                              <Link to="/prescription">Upload Prescription</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="book_room">
                        <div className="book_btn">
                          <button
                            type="button"
                            className="btn btn-dark"
                            data-toggle="modal"
                            data-target="#appointmentModal"
                          >
                            Book Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className="modal fade"
        id="appointmentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="appointmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div style={{zIndex: '100'}} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">
                Book an Appointment
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="default-select">Doctor</label>
                  <select
                    className="form-control"
                    id="default-select"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                  >
                    <option value="" disabled>
                      Please select doctor to visit
                    </option>
                    <option value="Lewis Hamilton">Lewis Hamilton</option>
                    <option value="Sarah Lionel">Sarah Lionel</option>
                    <option value="Emanuel Robert">Emanuel Robert</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="patientName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientName"
                    placeholder="Please type your name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentDate">Appointment Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    placeholder="Appointment Date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentTime">Appointment Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="appointmentTime"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary">
                  {loading ? "Booking..." : "Book Appointment"}
                </button>
                {error && <p className="text-danger mt-3">{error}</p>}
                {successMessage && (
                  <p className="text-success mt-3">{successMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
