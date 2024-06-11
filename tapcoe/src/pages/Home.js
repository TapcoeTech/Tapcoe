
import { useState } from "react"
import Navbar from "../components/Navbar"
import Swipper from "../components/Swipper"
import Timer4 from "../components/Timer4"
import '../App.css'
import { Footer } from "../components/footer"


const Home = ({isMenu,handlechange,events}) => {
 console.log(isMenu,"isMenu",events)
   

 

    return (
        <div>
            <div className='header'>
               
                <div className={`${isMenu ? " opacity-25" : ""}`}>
                    <Swipper />
                    {/* <div className="flex  flex-row justify-between items-center gap-8">
                        <div className="w-full w-[1/2] ml-4 md:ml-0 md:mr-2">
                            <img src="pic.png" className="w-full" alt="placeholder" />
                        </div>
                        <div className="flex flex-col items-center w-full md:w-[50%] justify-center md:mr-4">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <span className="font-bold md:text-4xl text-lg">Experience Tapcoe</span>
                                <p className="w-full w-[1/2] md:text-2xl text-lg justify-center">
                                    Are you a brand or an organization that wants to boost engagement in the
                                    most creative way? Engage your users through our events in different categories.
                                    Easily create interesting contests and events that would help your brand reach the masses
                                    and create zeal and enthusiasm amongst them.
                                </p>
                            </div>
                        </div>
                    </div> */}


                </div>

                <div className="p-4 md:flex grid justify-center items-center gap-10 mt-[100px]">
                    <div>
                        {/* <img src="pic.png" className="w-[60%]" alt="placeholder" /> */}
                        <img src="images/experience.png" />
                    </div>
                    <div className="md:-mt-[100px]">
                        <h1 className="font-semibold text-[30px] mt-6 md:grid flex justify-center">Experience Tapcoe</h1>
                        <p className="md:w-[600px] md:grid flex justify-center">
                            Are you a brand or an organization that wants to boost the
                            engagement in the most creative way. Engage your users
                            through our events in different category. Easily create
                            interesting contest and events that would help your brand
                            to reach the masses and to create zeal and enthusiasm
                            amongst them.
                        </p>


                    </div>


                </div>

            </div>
            {/* <div className="flex flex-wrap justify-center mt-4">
                {events?.map((value, index) => {
                    return (
                        <div className="flex mx-2 mb-2 " key={index}>
                            <Timer4 startTime={value?.startTime} eventName={value?.eventName} eventAddress={value?.eventAddress} />
                        </div>
                    );
                })}
            </div> */}


            {/* Events */}

            <div className="">
                <h1 className="font-semibold text-[30px] mt-6 md:grid flex justify-center">Events</h1>

         
                <div className="flex md:flex-row flex-col justify-center items-center gap-8">
                    {events?.map((value, item) => {
                        return (
                            <div className="" key={item} onClick={()=>{
                            //  handlechange(value.eventId,value.startTime,value?.eventName,value?.eventAddress);
                             
                            }}>

                                <Timer4 startTime={value.startTime} eventName={value?.eventName} eventAddress={value?.eventAddress}  handlechange={handlechange} eventId={value?.eventId} />
                            </div>
                        )
                    })}
                </div>

            </div>


            {/* Story  */}

            <div className="mt-12">
                {/* <h1 className="text-black font-montserrat text-[40px] not-italic font-semibold leading-normal mt-6 md:grid flex justify-center">Story So Far</h1> */}
                <h1 className="font-semibold text-[30px]  md:grid flex justify-center">Story So Far</h1>
                <div className="flex md:flex-row  flex-col gap-20 justify-center items-center  bg-custom-gradient ">

                    <div className="border-solid  flex flex-row gap-2 transition-transform transform hover:scale-105 duration-300">
                        <div className="flex flex-row">
                            <div>
                                <img src="./images/ballot1.png" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-full">
                                <h2 className="text-4xl font-bold">1200+</h2>
                                <h2 className="text-xl">Total Votes</h2>
                            </div>

                        </div>

                    </div>
                    <div className="border-solid  flex flex-row">
                        <div className="flex flex-row gap-2   transition-transform transform hover:scale-105 duration-300">
                            <div>
                                <img src="./images/group.png" />
                            </div>
                            <div className="flex flex-col items-center justify-center h-full">
                                <h2 className="text-4xl font-bold">1200+</h2>
                                <h2 className="text-xl">Total Users</h2>
                            </div>

                        </div>

                    </div>
                    <div className="border-solid  flex flex-row gap-2 transition-transform transform hover:scale-105 duration-300">
                        <div className="flex flex-row pb-2">
                            <div>
                                <img src="./images/cloudcomputing.png" />
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
                <img className="max-w-full h-auto" src="images/howWork.png"/>
            </div>
            <div className="mt-4 flex pl-6 justify-center items-center">
                    {/* <h1 className="ext-black font-montserrat text-[40px] not-italic font-semibold leading-none">Rewards</h1> */}
                    <h1 className="font-semibold text-[30px]  ">Rewards</h1>
                </div>
            <div className="bg-[#F7F7F7] flex flex-col  justify-center items-center ">
               
                <div className="flex flex-wrap">
                    <p className="text-black text-center font-montserrat text-[24px] not-italic font-normal leading-normal">
                        There is always a reward for the winners of the competitions hosted on tapcoe,
                        so get exciting rewards and enjoy the event with all the fun elements and enthusiasm.
                    </p>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Home