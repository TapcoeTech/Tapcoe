
import Navbar from "../components/Navbar"
import Swipper from "../components/Swipper"
import Timer4 from "../components/Timer4"

const Home = () => {

    const events = [
        {
          startTime: "2024-06-10T02:30:00",
          eventName: "Event 1",
          eventAddress:"Kankarbgh,patna"
        },
        {
          startTime: "2024-06-11T08:00:00",
          eventName: "Event 2",
          eventAddress:"Delhi,karolBagh"
        },
        {
          startTime: "2024-06-12T14:45:00",
          eventName: "Event 3",
          eventAddress:"Gurgaon, sector 47"
        },
        {
          startTime: "2024-06-13T18:20:00",
          eventName: "Event 4",
          eventAddress:"Chennai, santhom high road"
        },
        {
          startTime: "2024-06-14T21:10:00",
          eventName: "Event 5",
          eventAddress:"Chennai, santhom high road"
        }
      ];
      
    return (
 <div>
           <div className='header'>
            <Navbar />
            <Swipper />
            <div className="flex  flex-row justify-between items-center gap-8">
  <div className="w-full w-[1/2] ml-4 md:ml-0 md:mr-2">
    <img src="pic.png" className="w-full" alt="placeholder" />
  </div>
  <div className="flex flex-col items-center w-full md:w-[50%] justify-center md:mr-4">
    <div className="flex flex-col gap-4 items-center text-center">
      <span className="font-bold text-4xl">Experience Tapcoe</span>
      <p className="w-full w-[1/2] text-md md:text-xl justify-center">
        Are you a brand or an organization that wants to boost engagement in the
        most creative way? Engage your users through our events in different categories.
        Easily create interesting contests and events that would help your brand reach the masses
        and create zeal and enthusiasm amongst them.
      </p>
    </div>
  </div>
</div>

        </div>
        <div className="flex flex-wrap justify-center mt-4">
  {events?.map((value, index) => {
    return (
      <div className="flex mx-2 mb-2 "  key={index}>
        <Timer4 startTime={value?.startTime} eventName={value?.eventName} eventAddress={value?.eventAddress} />
      </div>
    );
  })}
</div>
<div className="flex items-center justify-center text-center font-bold text-black-500 text-xl mt-8"><span>Story So Far</span></div>
<div className="flex flex-row justify-center items-center text-center ">
<div className="border-orange-600 border-8 bg-red w-[30%]">1dfghjkdfghjk</div>
<div className="w-[30%]">2</div>
<div className="w-[30%]">3</div>
</div>
 </div>
    )
}

export default Home