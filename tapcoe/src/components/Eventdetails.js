import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Countdown from "./countDown";
import { FaHome, FaSync, FaTrophy, FaUpload } from 'react-icons/fa';
import { useEffect, useState } from "react";
// export function Eventdetails({tab}) {
//     return (<>
// {console.log(tab,"llllllllllll")}
//         {/* <div>
// <div className="flex flex-col justify-center items-center">
// <p className="font-semibold text-[30px] ">Event Details</p>
// <div style={{width:"800px"}} className="flex flex-row  text-center">
// <p className="font-basic text-[20px] " >
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
// Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
// unknown printer took a galley of type and scrambled it to make a type specimen book.
// It has survived not only five centuries, but also the leap into electronic typesetting,
// remaining essentially unchanged. It was popularised in the 1960s with the release of
// Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
// publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// </p>
// </div>
// </div>
// <div className=" rounded-lg overflow-hidden shadow-xl bg-white border border-gray-200 m-4 transition-transform duration-300 ease-in-out hover:scale-105 flex flex-row justify-center items-center min-w-[24rem]">
//     <img className="w-auto  h-56 object-cover" src="https://via.placeholder.com/400x200" alt={""} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2">Card Title 1</div>
//       <p className="text-gray-700 text-base">This is a simple card component</p>
//     </div>
//     <div className="px-6 pt-4 pb-2">
//       <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
//         Action
//       </button>
//     </div>
//   </div>

// </div> */}
//         <div className="overflow-x-hidden">
//             <div>
//                 <div className="flex flex-col justify-center items-center">
//                     <p className="font-semibold text-3xl">Event Details</p>
//                     <div className="max-w-3xl text-center">
//                         <p className="font-basic text-lg">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//                             scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
//                             electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
//                             Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
//                             PageMaker including versions of Lorem Ipsum.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex justify-center  min-h-screen bg-gray-50">
//                     <div className=" flex flex-row justify-between rounded-lg overflow-hidden shadow-xl bg-white border border-gray-200 m-4 transition-transform duration-300 ease-in-out hover:scale-105 flex flex-row justify-center items-center w-[900px] h-[155px] flex-shrink-0">
//                        <div>
//                        <img
//                             className="w-auto h-56 object-cover"
//                             src="images/iconImg.png"
//                             alt=""
//                             style={{ maxWidth: "100%" }}
//                         />
//                        </div>
//                        <div className="flex flex-col">
//                        <div className="px-6 py-4">
//                             <Countdown startTime={tab.startTime}/>
//                         </div>
//                         <div className="px-6 pt-4 pb-2">
//                             <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
//                                 Action
//                             </button>
//                         </div>
//                        </div>
//                     </div>
//                 </div>

//             </div>
//         </div>



//     </>)
// }

const eventDetails = {
    eventDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    participates: [
        {
            rank: "58",
            tabID: "FRNC567"
        },
        {
            rank: "42",
            tabID: "ABC123"
        },
        {
            rank: "75",
            tabID: "XYZ789"
        },
        {
            rank: "21",
            tabID: "DEF456"
        },
        {
            rank: "33",
            tabID: "GHI789"
        },
        {
            rank: "10",
            tabID: "JKL012"
        },
        {
            rank: "89",
            tabID: "HK763"
        },
        {
            rank: "90",
            tabID: "JKL892"
        }
    ]
};


export function Eventdetails({ tab, name, address }) {

    const navigate = useNavigate();

   
    const [event, setEvent] = useState(null);
    useEffect(() => {
        // Fetch eventId from localStorage
        const eventId = localStorage.getItem('eventId');

        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`https://tapcoe-backend.onrender.com/api/v1/events/${eventId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ eventId:eventId })
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
        } else {
            setLoading(false);
        }
    }, []);
    return (
        <>
            {/* Content */}
            <div className="overflow-x-hidden">
                <div>

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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center pl-4 pr-4 gap-2 mt-10">
                    {event?.participants?.map((value, index) => (
                        <div key={index}>
                            <div className="max-w-sm bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg max-w-[330px] max-h-[300px] object-cover" src={value?.imageUrl} alt="" />
                                </a>
                                <div className="flex flex-row ml-4">
                                    <div className="flex p-3 justify-center items-center gap-2  border-gray-400">
                                        <img src="/images/pointer.png" alt="" />
                                        <p className="text-[12px] font-montserrat text-[#004F4A]">Tap ID: {value?.userId}</p>
                                    </div>
                                    <div className="border-l border-gray-400 h-[45px] self-stretch mt-2 ml-2"></div>
                                    <div className="flex flex-row p-3 ml-3 justify-center items-center gap-2">
                                        <img src="/images/ranking.png" className="w-6" alt="" />
                                        <p className="text-[12px] font-montserrat text-[#004F4A]">Rank: 1</p>
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
                                        aria-label="Tap" onClick={() => { navigate("/Profile") }}
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

            </div>
            <div className="fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white z-50 flex justify-around items-center py-3">

{/* Home Button */}
<button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer" onClick={()=>{navigate("/")}}>
  <FaHome className="text-xl" />
  <span className="inline">Home</span> {/* Always show text */}
</button>

{/* Refresh Button */}
<button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer" onClick={()=>{window.location.reload();}}>
  <FaSync className="text-xl" />
  <span className="inline">Refresh</span> {/* Always show text */}
</button>

{/* Leaderboard Button */}
<button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer">
  <FaTrophy className="text-xl" />
  <span className="inline">Leaderboard</span> {/* Always show text */}
</button>

{/* Upload Button */}
<button className="p-2 flex flex-col items-center bg-gray-400 bg-opacity-50 rounded hover:bg-opacity-70 cursor-pointer">
  <FaUpload className="text-xl" />
  <span className="inline">Upload</span> {/* Always show text */}
</button>

</div>


        </>
    );
}


{/* <div className="flex flex-col md:flex-row">
  <div className="bg-green-200 flex-1 p-4 order-2 md:order-1">

  <div className="w-full overflow-hidden ">
  <img
    src="https://static01.nyt.com/images/2018/02/08/t-magazine/08tmag-models-slide-9EPC/08tmag-models-slide-9EPC-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    alt="Responsive Image"
    className="w-full h-full object-cover"
  />
</div>


  </div>
  <div className="bg-blue-200 flex-1 p-4 order-1 md:order-2">Second Div</div>
</div> */}