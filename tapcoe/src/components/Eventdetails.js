import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSync, FaTrophy, FaUpload } from 'react-icons/fa';
import Navbar from "./Navbar";
import Countdown from "./countDown";
import UploadModal from '../components/uploadModel';
import Loader from "./Loader";


const eventDetails = {
    eventDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    participates: [
        { rank: "58", tabID: "FRNC567" },
        { rank: "42", tabID: "ABC123" },
        { rank: "75", tabID: "XYZ789" },
        { rank: "21", tabID: "DEF456" },
        { rank: "33", tabID: "GHI789" },
        { rank: "10", tabID: "JKL012" },
        { rank: "89", tabID: "HK763" },
        { rank: "90", tabID: "JKL892" }
    ]
};

export function Eventdetails({ tab, name, address }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
 

    useEffect(() => {
        const eventId = localStorage.getItem('eventId');
        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`https://tapcoe-backend.onrender.com/api/v1/getEventById`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ eventId })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setEvent(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        if (eventId) {
            fetchEventDetails();
        }
    }, []);

    const handleUploadClick = () => {
        setModalOpen(true);
    };

    const handleSave = (data) => {
        console.log('Image:', data.image);
        console.log('Event Name:', data.eventName);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    // const handleShareClick = (participantId) => {
    //     const eventId = localStorage.getItem('eventId'); // Assuming eventId is stored in localStorage
    //     const shareUrl = `${window.location.origin}/profile?participantId=${participantId}&eventId=${eventId}`;
    //     setOpenShare(participantId);  // Track the clicked participant ID
    //     setShareUrl(shareUrl);  // Save the generated share URL to be used in ShareButtons
    // }; 

    return (
        <>
            {loading ? <Loader /> : <>
                <div className="overflow-x-hidden">
                    <div className="flex flex-col justify-center items-center mt-4">
                        <p className="font-semibold text-3xl">Event Details</p>
                        <div className="max-w-3xl text-center">
                            <p className="font-basic text-lg">
                                {event?.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col sm:flex-row justify-between rounded-lg overflow-hidden shadow-xl bg-white border border-gray-200 m-4 transition-transform duration-300 ease-in-out hover:scale-105 items-center">
                            <div>
                                <img
                                    className="w-auto h-auto object-cover"
                                    src="images/iconImg.png"
                                    alt=""
                                    style={{ maxWidth: "100%" }}
                                />
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <div>
                                    <p className="text-4xl font-semibold font-montserrat text-green-800">{event?.eventName}</p>
                                    <span className="font-normal font-montserrat text-green-800 text-base">Gurgaon</span>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <Countdown startTime={event?.startDate} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center pl-4 pr-4 gap-2 mt-10">
                        {event?.participants?.map((value, index) => (
                            <div key={index}>
                                <div className="max-w-sm bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                    <a href="#" onClick={() => { navigate("/Profile"); localStorage.setItem("paticipant_id", value?._id) }}>
                                        <img className="rounded-t-lg w-[330px] h-[300px] object-cover" src={value?.image?.imageUrl} alt="" />
                                    </a>
                                    <div className="flex flex-row ml-4 justify-center items-center">
                                        <div className="flex p-3 justify-center items-center gap-2 border-gray-400">
                                            <img src="/images/pointer.png" alt="" />
                                            <p className="text-[12px] font-montserrat text-[#004F4A]">Tap ID: {value?.userId}</p>
                                        </div>
                                        <div className="border-l border-gray-400 h-[45px] self-stretch mt-2 ml-2"></div>
                                        <div className="flex flex-row p-3 ml-3 justify-center items-center gap-2">
                                            <img src="/images/ranking.png" className="w-6" alt="" />
                                            <p className="text-[12px] font-montserrat text-[#004F4A]">Rank: {value?.rank}</p>
                                        </div>
                                    </div>
                                    <div><hr /></div>
                                    <div className="flex gap-4 justify-center items-center mt-2 py-2">
                                        <img src="./images/heart.png" />
                                        <div>Total Tap: {value?.likes.length}</div>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <div className="flex gap-4 mt-4">
                                            <button
                                                className="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200"
                                                aria-label="Tap"
                                                //  onClick={() => { navigate("/Profile"); localStorage.setItem("paticipant_id", value?._id) }}
                                            >
                                                <img src="./images/heart.png" alt="Heart icon" className="mr-2" />
                                                <div>Tap</div>
                                            </button>
                                            <button
                                                className="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200"
                                                aria-label="Share"
                                               
                                            >
                                                <img src="./images/share.png" alt="Share icon" className="mr-2" />
                                                <div>Share</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                        ))}
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white z-50 flex justify-around items-center py-3">
                    <button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer" onClick={() => { navigate("/") }}>
                        <FaHome className="text-xl" />
                        <span className="inline">Home</span>
                    </button>

                    <button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer" onClick={() => { window.location.reload(); }}>
                        <FaSync className="text-xl" />
                        <span className="inline">Refresh</span>
                    </button>

                    <button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer" onClick={() => { navigate("/leaderBoard") }}>
                        <FaTrophy className="text-xl" />
                        <span className="inline">Leaderboard</span>
                    </button>

                    <div className="p-2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 rounded hover:bg-gray-600 cursor-pointer mb-2 sm:mb-0 sm:ml-5" onClick={handleUploadClick}>
                        <FaUpload className="text-lg" />
                        <span className="ml-2">Upload</span>
                    </div>
                </div>

                <UploadModal isOpen={isModalOpen} onRequestClose={handleModalClose} onSave={handleSave} events={""} />
            </>}
        </>
    );
}
