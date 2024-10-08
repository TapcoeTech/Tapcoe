import { useEffect, useState } from "react";
import Countdown from "../components/countDown"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from 'react-router-dom';
import ShareButtons from "../components/ShareButtons";
import Loader from "../components/Loader";
export const Profile = () => {
    const [participant, setParticipant] = useState(null);
    const [openShare, setOpenShare] = useState(null); // Track open share for a specific participant
    const [shareUrl, setShareUrl] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
console.log(participant?.rank,participant,"participant.rank");
const location = useLocation();
const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const participantId=searchParams.get('participantId');
        const eventId=searchParams.get('eventId');

      if(eventId && participantId){
        localStorage.setItem('eventId',eventId);
        localStorage.setItem('paticipant_id',participantId);
      }

      
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


            if(!participant?.participant?.likes.includes(localStorage.getItem('_id'))){
            




                const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/likeEvent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': Cookies.get('token')
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    const result = await response.json();
                    // Handle success
                    console.log(result);
                    toast.success("You Liked this participant successfully!");
                    window.location.reload();
                    
                } else {
                    // Handle error
                  toast.error("Please login to like the participant !");
        
                }
            }

         else{
            const unLikeresponse = await fetch('https://tapcoe-backend.onrender.com/api/v1/unLikeEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': Cookies.get('token')
                },
                body: JSON.stringify(formData),
            });

            if (unLikeresponse.ok) {
                const result = await unLikeresponse.json();
                // Handle success
                console.log(result);
                toast.success("You UnLiked this participant successfully!");
                window.location.reload();
                
            } else {
                // Handle error
              toast.error("Please login to like the participant !");
    
            }
         }
        } catch (error) {
            console.error("Error:", error);
            toast.error("error",error);
        }
    };

    const handleShareClick = () => {
        const eventId = localStorage.getItem('eventId');
        const participantId=localStorage.getItem('paticipant_id') // Assuming eventId is stored in localStorage
        const shareUrl = `${window.location.origin}/profile?participantId=${participantId}&eventId=${eventId}`;
        setOpenShare(participantId);  // Track the clicked participant ID
        setShareUrl(shareUrl);  // Save the generated share URL to be used in ShareButtons
    };
    return (
   <>
   {loading ? <Loader/> :     <div class="flex flex-col-reverse md:flex-row justify-center items-center md:gap-8 gap-4 p-4 mt-10">


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
            <p class="text-[12px] font-montserrat text-[#004F4A]">Rank: {participant?.participant?.rank}</p>
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
              

                {participant?.participant?.likes.includes(localStorage.getItem('_id')) ?    <img src="./images/save.png" alt="Heart icon" class="mr-2 h-5 w-5" />:  <img src="./images/heart.png" alt="Heart icon" class="mr-2" /> }
                <div>Tap</div>
            </button>
            <button class="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200" aria-label="Share"
            
            onClick={() => handleShareClick()}
            >
                <img src="./images/share.png" alt="Share icon" class="mr-2" />
                <div>Share</div>
            </button>
        </div>
        {openShare === localStorage.getItem('paticipant_id') && shareUrl && (
                            <div className="flex justify-center mt-4">
                                <ShareButtons shareUrl={shareUrl} />
                            </div>
                        )}
    </div>
</div>


<div class="flex flex-col md:flex-row gap-4 justify-center items-center md:pl-4 bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
    <div class="">
        <img class="object-cover" src={participant?.eventImage} alt="Icon" />
    </div>
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
        <div class="flex flex-col items-center gap-2 sm:gap-4">
            <div class="text-4xl font-semibold font-montserrat text-green-800 whitespace-nowrap">
              {participant?.eventName}
            </div>
            <span className="font-normal font-montserrat text-green-800 text-base">
{/* Render HTML content */}
<span dangerouslySetInnerHTML={{ __html: participant?.description }} />

</span>

        </div>
    </div>
    <div class="px-6 py-4">
        <Countdown startTime={participant?.endDate} />
    </div>
</div>

</div>}
   </>
    

    )
}