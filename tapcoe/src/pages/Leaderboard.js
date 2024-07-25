import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const LeaderBoard=()=>{


const [participant,setParticipantData]=useEffect('');
const [loading,setLoading]=useState('');
const[error,setError]=useState('');
    useEffect(() => {
        // Fetch eventId from localStorage
        const eventId = localStorage.getItem('eventId');

        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`https://tapcoe-backend.onrender.com/api/v1/getLeaderBoard`, {
                    method: 'POST', // Change method to POST
                    headers: {
                        'Content-Type': 'application/json',
                        'token': Cookies.get('token')
                    },
                    body: JSON.stringify({ eventId }) // Pass eventId in the request body
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data,"this is my event data");
                setParticipantData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        if (eventId) {
            fetchEventDetails();
        } else {
            setLoading(false);
        }
    }, []);
    return(<>

    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center pl-4 pr-4 gap-2 mt-10">
                    {participant?.map((value, index) => (
                        <div key={index}>
                            <div className="max-w-sm bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg w-[330px] h-[300px] object-cover" src={value?.image?.imageUrl} alt="" />
                                </a>
                                <div className="flex flex-row ml-4">
                                    <div className="flex p-3 justify-center items-center gap-2  border-gray-400">
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
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex gap-4 mt-4">
                                    <button
                                        className="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200"
                                        aria-label="Tap" onClick={() => {  localStorage.setItem("paticipant_id",value?._id) }}
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
                    ))}

                </div>
    </>)
}