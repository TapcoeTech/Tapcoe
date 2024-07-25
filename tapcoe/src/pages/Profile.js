import { useEffect, useState } from "react";
import Countdown from "../components/countDown"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
export const Profile = () => {
    const [participant, setParticipant] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchParticipant = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/getParticipantsById', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email:localStorage.getItem("email"), eventId:localStorage.getItem("eventId"), participantId:localStorage.getItem("paticipant_id") }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setParticipant(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchParticipant();
    }, []);
    const handleSubmit = async (event) => {
        // event.preventDefault();
     const formData={
        likerEmail: localStorage.getItem("email"),

        event_id: localStorage.getItem("eventId"),
        participant_id:localStorage.getItem("paticipant_id")
     }

        try {
            const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/likeEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'token': Cookies.get('token')
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                // Handle success
                console.log(result);
                toast.success("You Liked this participant successfully!");
                
            } else {
                // Handle error
              
    
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("error",error);
        }
    };
    return (
        <div class="flex flex-col md:flex-row justify-center items-center md:gap-8 gap-4 p-4 mt-10">


        <div class="max-w-sm bg-white rounded-3xl shadow dark:bg-gray-800 min-w-[400px] sm:min-w-auto flex flex-col mb-4">
            <div class="max-w-full">
                <a href="#">
                    <img class="rounded-t-lg min-w-[400px] min-h-[400px] w-full h-auto object-cover" src={participant?.participant?.image?.imageUrl} alt="Event" />
                </a>
            </div>
    
            <div class="flex flex-row p-4 justify-center items-center">
                <div class="flex p-3 items-center gap-2 border-gray-400">
                    <img src="/images/pointer.png" alt="Pointer" />
                    <p class="text-[12px] font-montserrat text-[#004F4A]">Tap ID: 3456</p>
                </div>
                <div class="border-l border-gray-400 dark:border-gray-700 h-12 self-stretch mx-4"></div>
                <div class="flex flex-row p-3 items-center gap-2">
                    <img src="/images/ranking.png" class="w-6" alt="Ranking" />
                    <p class="text-[12px] font-montserrat text-[#004F4A]">Rank: 22</p>
                </div>
            </div>
    
            <div class="border-t border-gray-400 dark:border-gray-700 mx-4"></div>
    
            <div class="flex gap-4 justify-center items-center mt-2 py-2">
                <img src="./images/heart.png" alt="Heart" />
                <div>Total Tap: {participant?.likesLength}</div>
            </div>
    
            <div class="flex flex-col gap-4 justify-center items-center pb-4">
                <div class="text-center p-4">
                    <p style={{color:"#666"}}>
                        Lorem is a simple to showcase the text of the printing and typesetting industry.
                    </p>
                </div>
                <div class="flex flex-row gap-4 items-center justify-center">
                    <div>
                        <p><strong>Uploaded</strong> By: {participant?.user?.name}</p>
                    </div>
                    <div>
                        <p><strong>Uploaded Time</strong>: 11:50:36 20/04/24</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <button class="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200" aria-label="Tap" onClick={() => {handleSubmit()}}>
                        <img src="./images/heart.png" alt="Heart icon" class="mr-2" />
                        <div>Tap</div>
                    </button>
                    <button class="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200" aria-label="Share">
                        <img src="./images/share.png" alt="Share icon" class="mr-2" />
                        <div>Share</div>
                    </button>
                </div>
            </div>
        </div>
    
      
        <div class="flex flex-col md:flex-row gap-4 justify-center items-center md:pl-4 bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
            <div class="">
                <img class="object-cover" src="images/iconImg.png" alt="Icon" />
            </div>
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                <div class="flex flex-col items-center gap-2 sm:gap-4">
                    <div class="text-4xl font-semibold font-montserrat text-green-800 whitespace-nowrap">
                        The friends
                    </div>
                    <span class="font-normal font-montserrat text-green-800 text-base">
                        Gurgaon, Sector 47
                    </span>
                </div>
            </div>
            <div class="px-6 py-4">
                <Countdown startTime={"2024-10-10T02:30:00"} />
            </div>
        </div>
    
    </div>
    

    )
}