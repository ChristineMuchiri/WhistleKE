import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import crypto from "crypto-js";
import './Login.css';

const Login = ({ onLogin }) => {
  const [passphrase, setPassphrase] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passphrase.trim()) {
      alert("Please enter a passphrase");
      return;
    }
    const hashedId = crypto.SHA256(passphrase).toString();
    onLogin(hashedId);
    navigate("/Home");
  };

  return (
      <div className="login-container" >
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <h1>Whistle KE</h1>
        <h2>Speak truth. Stay anonymous.</h2>
        <input
          type="password"
          placeholder="Enter secret passphrase"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          className="login-input"
          required
                  
        />
        <p>Remember your passphrase with every login</p>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

