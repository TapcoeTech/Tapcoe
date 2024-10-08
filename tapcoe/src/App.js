import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Eventhost from './pages/Hostevent';
import { Eventdetails } from './components/Eventdetails';
import Navbar from './components/Navbar';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Campus } from './pages/Campus_ambassadors';
import { Advertise } from './pages/Advertisewithus';
import { LeaderBoard } from './pages/Leaderboard';


function App() {

  const [isMenu, setMenu] = useState(false);
  const [tab, setTab] = useState({
    eventId: "",
    startTime: "",
    eventName:"",
    eventAddress:""
});

const handlechange=(date, id,name,eventAddress )=> {
  
    setTab(prevState => ({
        ...prevState,
        eventId: date,
        startTime:id,
        eventName:name,
        eventAddress:eventAddress
    }));
}
 const handleMenuState = () => {
  setMenu(!isMenu);

}

//   const events = [
//     {
//       eventId:"1",
//         startTime: "2024-10-10T02:30:00",
//         eventName: "The Friends",
//         eventAddress: "Kankarbgh,patna",
//         image: './images/event.png',
//         iconImg: './images/iconImg.png',
//     },
//     {
//       eventId:"2",
//         startTime: "2024-10-11T08:00:00",
//         eventName: "Mr. & Miss Flex",
//         eventAddress: "Delhi,karolBagh",
//         image: './images/event.png',
//         iconImg: './images/iconImg.png',
//     },
//     {  eventId:"3",
//         startTime: "2024-10-12T14:45:00",
//         eventName: "Chacha Contest",
//         eventAddress: "Gurgaon, sector 47",
//         image: './images/event.png',
//         iconImg: './images/iconImg.png',
//     },
// ];
  return (
    <div className=''>
         <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
      <Router>
      <Navbar handleMenuState={handleMenuState} />
        <Routes>
          <Route path="/" element={<Home  isMenu={isMenu} handlechange={handlechange} />} />
          <Route path="/hostEvent" element={<Eventhost  isMenu={isMenu}/>} />
          <Route path="/leaderBoard" element={<LeaderBoard/>} />
          <Route path="/Eventdetails" element={<Eventdetails  isMenu={isMenu} tab={tab} name={tab.eventName} address={tab.eventAddress}/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Aboutus" element={<About/>} />
          <Route path="/Campusambassadors" element={<Campus/>} />
          <Route path="/Advertisewithus" element={<Advertise/>}/>
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
