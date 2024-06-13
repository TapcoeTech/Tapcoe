import Countdown from "../components/countDown"

export const Profile = () => {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap justify-center items-center md:gap-8 gap-4 p-4 mt-10">

            <div>
                <div class="max-w-sm bg-white  rounded-3xl shadow dark:bg-gray-800  min-w-[400px] sm:min-w-auto flex flex-col mb-4">
                    <div class="max-w-full">
                        <a href="#">
                            <img class="rounded-t-lg min-w-[400px] min-h-[400px] w-full h-auto object-cover" src="/images/event.png" alt="Event" />
                        </a>
                    </div>

                    <div class="flex flex-row p-4 items-center">
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
                        <div>Total Tap: 62</div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center pb-4">

                        <div className="text-center">
                            <p style={{ color: "#666" }}>
                                Lorem is a simple to showcase the text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div>
                                <p>
                                    <strong>Uploaded</strong> By: Sakshi
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Uploaded Time</strong>: 11:50:36 20/04/24
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 ">
                            <button
                                className="flex flex-row items-center bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200"
                                aria-label="Tap" onClick={() => { "" }}
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



            <div className="flex flex-col  md:flex-row gap-4 justify-center items-center pl-4 bg-white border border-gray-500 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                <div className="">
                    <img className="  object-cover" src="images/iconImg.png" alt="Icon" />
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                    <div className="flex flex-col items-center gap-2 sm:gap-4">
                        <div className="text-4xl font-semibold font-montserrat text-green-800 whitespace-nowrap">
                            The friends
                        </div>
                        <span className="font-normal font-montserrat text-green-800 text-base">
                            Gurgaon, Sector 47
                        </span>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <Countdown startTime={"2024-10-10T02:30:00"} />
                </div>
            </div>
        </div>

    )
}