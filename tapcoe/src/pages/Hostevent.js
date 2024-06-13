import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

function Eventhost() {

    return (
        <div>
            <h1 className="flex justify-center mt-5 text-[22px]">HOST AN EVENT</h1>
            <div className="p-10 flex justify-center items-center">
                <div className="bg-white p-4 rounded-md">
                    <div>
                        <div className="mt-3 text-[22px]">Host An Events</div>
                        <p className="mt-2" style={{ fontFamily: "Abhaya Libres, serif", color: '#898B8C' }}>
                            Hosting an event can be a daunting task, but with our online voting-based event hosting website, it doesn't have to be. We offer a range of features and <br />tools to help you plan, promote, and execute a successful event that engages your audience and facilitates meaningful conversations and decisions.
                        </p>
                        <div className="mt-3 text-[22px]">How it works ?</div>
                        <p className="mt-2" style={{ fontFamily: "Abhaya Libres, serif", color: '#898B8C' }}>
                            Plan Your Event: Our platform allows you to create a customized event page with all the details your attendees need to know. You can add event <br />descriptions, agendas, speaker bios, and more. <br />
                            Promote Your Event: Our platform offers a range of marketing tools to help you promote your event and reach a wider audience. You can create<br /> custom email invitations, social media posts, and even set up paid advertising campaigns to attract more attendees.<br />
                            Host Your Event: Our platform offers a range of features to help you host your event online. You can set up live streams, video conferences, and even <br />virtual breakout rooms to facilitate meaningful conversations and collaboration. Our platform also allows you to set up online voting and decision- <br />making processes, so you can get feedback from your attendees and make informed decisions.<br />
                            Analyze Your Results: Our platform provides real-time analytics and reports on your event, so you can track attendance, engagement, and voting <br />results. You can use this data to improve your event planning and make more informed decisions in the future.<br />
                            Hosting an event has never been easier. With our online voting-based event hosting website, you can create a more inclusive, participatory, and <br /> engaging event experience that drives positive change in your community and beyond. So why wait? Sign up today and start hosting events that <br />matter.<br />
                            Fill the form below to connect with us -
                        </p>
                    </div>

                    <div className="mt-10">
                        <form class=" mx-auto">
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name*</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address*</label>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6 md:mt-4 mt-0">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number*</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Organization Name</label>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6 md:mt-4 mt-0">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Designation</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Event You Want To Host*</label>
                                </div>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <SunEditor
                                height='150px'
                                    setOptions={{
                                        buttonList: [
                                            ["bold", "italic", "underline", "hiliteColor"],
                                            ["list"],
                                            ["link"],
                                        ],
                                    }}
                                    spellChek={true}
                                />
                            </div>

                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eventhost;



