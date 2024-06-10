import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Eventhost from './pages/Hostevent';
import { Eventdetails } from './components/Eventdetails';
import Navbar from './components/Navbar';


function App() {

  const [isMenu, setMenu] = useState(false);
  const handleMenuState = () => {
      setMenu(!isMenu);

  }
 
  const events = [
    {
      eventId:"1",
        startTime: "2024-10-10T02:30:00",
        eventName: "The Friends",
        eventAddress: "Kankarbgh,patna",
        image: './images/event.png',
        iconImg: './images/iconImg.png',
    },
    {
      eventId:"2",
        startTime: "2024-10-11T08:00:00",
        eventName: "Mr. & Miss Flex",
        eventAddress: "Delhi,karolBagh",
        image: './images/event.png',
        iconImg: './images/iconImg.png',
    },
    {  eventId:"3",
        startTime: "2024-10-12T14:45:00",
        eventName: "Chacha Contest",
        eventAddress: "Gurgaon, sector 47",
        image: './images/event.png',
        iconImg: './images/iconImg.png',
    },
];
  return (
    <div className='bg-white'>
      <Router>
      <Navbar handleMenuState={handleMenuState} />
        <Routes>
          <Route path="/" element={<Home  isMenu={isMenu} events={events}/>} />
          <Route path="/hostEvent" element={<Eventhost  isMenu={isMenu}/>} />
          <Route path="/Eventdetails" element={<Eventdetails  isMenu={isMenu}/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
