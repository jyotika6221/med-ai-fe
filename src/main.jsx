import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from './components/SignIn.jsx';
import Appointment from './components/Appointment.jsx';
import SignUp from './components/SignUp.jsx';
import MedicineReminder from './components/MedicineReminder.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<App />} />
          <Route path="/reminder" element={<MedicineReminder />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <footer>
        </footer>
      </div>
    </Router>
  </React.StrictMode>,
)
