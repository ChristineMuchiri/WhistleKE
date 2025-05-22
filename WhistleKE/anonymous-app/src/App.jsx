import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './pages/Home.jsx';
import Leak from './pages/Leak.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* redirecting root path (/) to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)}/>} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path='/leak' element={isLoggedIn ? <Leak /> : <Navigate to="/login" replace/>} />
      </Routes>
    </Router>
  );
}

export default App;

 
