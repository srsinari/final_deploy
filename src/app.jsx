import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Thankyou from './pages/thankyou';
import PasswordProtection from './pages/psw';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (password) => {
    // Replace 'yourPassword' with the actual password you want to set.
    if (password === "@sunny'sbaby") {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="section"></div>
      <Router>
        <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clone_website" element={<Home />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        ) : (
          <PasswordProtection onPasswordSubmit={handlePasswordSubmit} />
        )}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;



