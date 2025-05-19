import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="app-container">
      {!userId ? (
        <Login onLogin={(hash) => setUserId(hash)} />
      ) : (
        <div className="text-green-400 text-center mt-10 font-mono">
          ✅ Logged in as: <br />
          <code className="text-xs">{userId}</code>
        </div>
      )}
    </div>
  );
}

export default App;

 
