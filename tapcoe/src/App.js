import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Eventhost from './pages/Hostevent';


function App() {
  return (
    <div className='bg-white'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostEvent" element={<Eventhost/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
