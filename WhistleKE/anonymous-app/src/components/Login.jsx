import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = ({ onLogin }) => {
  const [passphrase, setPassphrase] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deriveHashedID = async (passphrase) => {
    try {
      const encoder = new TextEncoder();
      const salt = encoder.encode("Fixed-salt"); // Application-wide constant salt
      const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        encoder.encode(passphrase),
        { name: "PBKDF2" },
        false,
        ["deriveBits"]
      );
      const hashedBuffer = await window.crypto.subtle.deriveBits(
        {
          name: "PBKDF2",
          salt,
          iterations: 100000,
          hash: "SHA-256",
        },
        keyMaterial,
        256
      );
      return Array.from(new Uint8Array(hashedBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    } catch (err) {
      console.error("Hashing failed:", err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passphrase.trim()) {
      setError("Please enter a passphrase");
      return;
    }

    try {
      let sessionId;
      if (rememberMe) {
        sessionId = await deriveHashedID(passphrase);
      } else {
        sessionId = window.crypto.randomUUID();
      }
      
      onLogin(sessionId);
      navigate("/Home");
    } catch (err) {
      setError("Sytem error during login");
      console.error(err);
    }
  };


  return (
      <div className="login-container" >
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <h1>Whistle KE</h1>
        <h2>Speak truth. Stay anonymous.</h2>
        <div className="form-group">
        <input
          type="password"
          placeholder="Enter a one-time passphrase"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          className="login-input"
          required
                  
          />
          </div>
        <p>No account needed. Each submission is untraceable.</p>
        <div className="form-group checkbox-group">
        <label>
          <input type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)} />
          <span>Enable persistent anonymous ID</span>
          </label>
        </div>

        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
        <button type="submit" className="login-button">
          Login
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Login;

