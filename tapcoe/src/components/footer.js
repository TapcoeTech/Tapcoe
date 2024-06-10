import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export function Footer() {
    return (
        <div className=" flex md:flex-row gap-20 flex-col justify-center  mt-4">
            <div className="">
                <p className="text-black font-[Montserrat] text-[20px] not-italic font-normal leading-normal">
                    Here's all the fame you need for all the talent you've got, the work <br /> you do and how amazingly you flaunt your content. Here you go, <br /> Tap the best you think with tapcoe.
                </p>
                <div className="flex  space-x-6 mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF className="text-blue-600 hover:text-blue-800 w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-blue-400 hover:text-blue-600 w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-pink-500 hover:text-pink-700 w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn className="text-blue-700 hover:text-blue-900 w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="text-red-600 hover:text-red-800 w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                </div>
            </div>
            <div>

                <p className='text-black font-bold text-base ml-2'>Userfull Links</p>
                <ul className="list-none ml-2 ">
                    <li><a href="#home" className="text-blue-600 hover:text-blue-800">Home</a></li>
                    <li><a href="#about" className="text-blue-600 hover:text-blue-800">About Us</a></li>
                    <li><a href="#privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
                    <li><a href="#terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:text-blue-800">FAQ</a></li>
                    <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact Us</a></li>
                    <li><a href="#career" className="text-blue-600 hover:text-blue-800">Career</a></li>
                </ul>

            </div>
            <div className='flex flex-col ml-2 md:ml-0'>
                <div>
                    <p className='text-black font-bold text-base  '>Mail Us:</p>
                    <p className='text-black font-medium text-sm"'>teamtapcoe@gmail.com</p>
                </div>
                <div>
                    <p className='text-black font-bold text-base   md:ml-0 '>Subscribe</p>
                    <p className='text-black font-medium text-sm"'>Don’t miss to subscribe to our new feeds,<br />
                        kindly fill the form below.</p>
                    <div class="flex items-center">
                        <input type="email" class="border border-yellow-400 rounded-l py-2 px-4" placeholder="Enter your email" />
                        <button type="submit" class="bg-yellow-400 border border-yellow-400 rounded-r py-2 px-4 ml-2">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}