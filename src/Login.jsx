import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [terminal, setTerminal] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [passKey, setPassKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!terminal || !contactNumber || !passKey) {
      setError("All fields are required.");
      return;
    }

    if (contactNumber.length < 10) {
      setError("Contact number must be at least 10 digits.");
      return;
    }

    onLogin(terminal, contactNumber, passKey);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign in to your account</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="terminal" className="login-label">
            Terminal Access Id
          </label>
          <input
            id="terminal"
            type="text"
            placeholder="Enter Terminal Access Id"
            value={terminal}
            onChange={(e) => setTerminal(e.target.value)}
            className="login-input"
            autoFocus
          />

          <label htmlFor="contactNumber" className="login-label">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            placeholder="Enter Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="login-input"
          />

          <label htmlFor="passKey" className="login-label">
            PassKey
          </label>
          <input
            id="passKey"
            type="password"
            placeholder="Enter PassKey"
            value={passKey}
            onChange={(e) => setPassKey(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <a href="/register" className="register-link">
            Go to Registration
          </a>
        </p>
      </div>
    </div>
  );
}
