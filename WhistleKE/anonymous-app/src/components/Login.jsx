import React, { useState } from "react";
import crypto from "crypto-js";

const Login = ({ onLogin }) => {
  const [passphrase, setPassphrase] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedId = crypto.SHA256(passphrase).toString();
    onLogin(hashedId);
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-100"
            style={{ backgroundColor: "#000000", fontFamily: "Courier New", color:"#ffffff"}}>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-400">
          Enter Burner Passphrase
        </h1>
        <input
          type="password"
          placeholder="e.g. green lizard tape"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
                  className="w-full p-3 bg-black border border-gray-800 rounded mb-6 focus:outline-none focus:border-purple-500 text-white"
                  style={{ fontFamily: "Courier New"}}
        />
        <button
          type="submit"
                  className="w-full bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition-colors duration-200"
                  style={{ fontFamily:"Courier New"}}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

