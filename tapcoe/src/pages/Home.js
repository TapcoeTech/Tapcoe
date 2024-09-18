// Home.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar';
import Swipper from '../components/Swipper';
import Timer4 from '../components/Timer4';
import { Footer } from '../components/footer';
import { FaCalendarPlus, FaCalendarCheck, FaUpload } from 'react-icons/fa';
import UploadModal from '../components/uploadModel';
import '../App.css';
import Loader from '../components/Loader';

const Home = ({ isMenu, handlechange }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const[_id,set_id]=useState();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenParam = searchParams.get('token');
    const emailParam = searchParams.get('email');
    const nameParam = searchParams.get('name');
 
    const _id = searchParams.get('_id');
    const profilePicParam = searchParams.get('profilePic');

    if (tokenParam) {
      setToken(tokenParam);
      Cookies.set('token', tokenParam, { expires: 7 });
    }
    if (emailParam) {
      setEmail(emailParam);
      localStorage.setItem('email', emailParam);
    }
    if (nameParam) {
      setName(nameParam);
      localStorage.setItem('name', nameParam);
    }
    if (profilePicParam) {
      setProfilePic(profilePicParam);
      localStorage.setItem('profileImg', profilePicParam);
     
    }

    if(localStorage.getItem('eventId') && localStorage.getItem('paticipant_id'))
    {
      console.log(localStorage.getItem('eventId'),localStorage.getItem('paticipant_id'),"jjjjjjjjjjj" );
      navigate('/profile');
    }
    if(_id)
    {
set_id(_id);
localStorage.setItem('_id',_id);
console.log('_id',_id);
navigate('/');
    }

   
  }, [location.search, navigate]);

  const handleUploadClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = (data) => {
    console.log('Image:', data.image);
    console.log('Event Name:', data.eventName);
    // Add your image upload logic here
  };
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(events);
  useEffect(() => {
      // Function to fetch events from the API
      const fetchEvents = async () => {
          try {
              const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/getallEvent'); // Adjust the API URL as needed
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setEvents(data); // Set the events in state
              setLoading(false); // Set loading to false once data is fetched
          } catch (error) {
              setError(error);
              setLoading(false);
          }
      };

      fetchEvents();
  }, []); // Empty dependency array to run the effect only once on mount

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    
    <div>
     
 

     <div className={`header ${isMenu ? 'opacity-25' : ''}`}>
        <Swipper />

        <div className="fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white z-50 flex justify-center sm:justify-around items-center py-3">
          <div
            className="p-2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 rounded hover:bg-gray-600 cursor-pointer mb-2 sm:mb-0 sm:ml-5"
            onClick={() => {
              navigate('/hostEvent');
            }}
          >
            <FaCalendarPlus className="text-lg" />
            <span className="ml-2">Host Event</span>
          </div>
          <div className="p-2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 rounded hover:bg-gray-600 cursor-pointer mb-2 sm:mb-0 sm:ml-5">
            <FaCalendarCheck className="text-lg" />
            <span className="ml-2">My Event</span>
          </div>
          <div
            className="p-2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 rounded hover:bg-gray-600 cursor-pointer mb-2 sm:mb-0 sm:ml-5"
            onClick={handleUploadClick}
          >
            <FaUpload className="text-lg" />
            <span className="ml-2">Upload</span>
          </div>
        </div>

        <div className="p-4 md:flex grid justify-center items-center gap-10 mt-[100px]">
          <div>
            <img src="images/experience.png" alt="Experience Tapcoe" />
          </div>
          <div className="md:-mt-[100px]">
            <h1 className="font-semibold text-[30px] mt-6 md:grid flex justify-center">Experience Tapcoe</h1>
            <p className="md:w-[600px] md:grid flex justify-center">
              Are you a brand or an organization that wants to boost the engagement in the most creative way. Engage
              your users through our events in different category. Easily create interesting contest and events that
              would help your brand to reach the masses and to create zeal and enthusiasm amongst them.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="font-semibold text-[30px] mt-6 md:grid flex justify-center">Events</h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8">
          {events?.map((value, item) => {
            return (
              <div
                key={item}
                onClick={() => {
                  // handlechange logic here
                }}
              >
                <Timer4
                  startTime={value.startDate}
                  eventName={value?.eventName}
                  eventAddress={value?.eventAddress}
                  handlechange={handlechange}
                  eventId={value?._id}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <h1 className="font-semibold text-[30px] md:grid flex justify-center">Story So Far</h1>
        <div className="flex md:flex-row flex-col gap-20 justify-center items-center bg-custom-gradient">
          <div className="border-solid flex flex-row gap-2 transition-transform transform hover:scale-105 duration-300">
            <div className="flex flex-row">
              <div>
                <img src="./images/ballot1.png" alt="Total Votes" />
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold">1200+</h2>
                <h2 className="text-xl">Total Votes</h2>
              </div>
            </div>
          </div>
          <div className="border-solid flex flex-row">
            <div className="flex flex-row gap-2 transition-transform transform hover:scale-105 duration-300">
              <div>
                <img src="./images/group.png" alt="Total Users" />
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold">1200+</h2>
                <h2 className="text-xl">Total Users</h2>
              </div>
            </div>
          </div>
          <div className="border-solid flex flex-row gap-2 transition-transform transform hover:scale-105 duration-300">
            <div className="flex flex-row pb-2">
              <div>
                <img src="./images/cloudcomputing.png" alt="Total Uploads" />
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold">1200+</h2>
                <h2 className="text-xl">Total Uploads</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img className="max-w-full h-auto" src="images/howWork.png" alt="How Work" />
      </div>

      <div className="mt-4 flex pl-6 justify-center items-center">
        <h1 className="font-semibold text-[30px]">Rewards</h1>
      </div>
      <div className="bg-[#F7F7F7] flex flex-col justify-center items-center">
        <div className="flex flex-wrap">
          <p className="text-black text-center font-montserrat text-[24px] not-italic font-normal leading-normal">
            There is always a reward for the winners of the competitions hosted on tapcoe, so get exciting rewards and
            enjoy the event with all the fun elements and enthusiasm.
          </p>
        </div>
      </div>

      <Footer />

      <UploadModal isOpen={isModalOpen} onRequestClose={handleModalClose} onSave={handleSave} events={events} />
    </div>
  );
};

export default Home;
