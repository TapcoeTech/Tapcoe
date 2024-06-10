import { useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar({handleMenuState}) {

    const [isMenu, setIsMenu] = useState(false);
    const [active, setActive] = useState('')
const navigate=useNavigate();
    const menuItems = [
        {
            title: "Home",
            redirecturl:"/"
        },
        {
            title: "About Us",
            redirecturl:""
        },
        {
            title: "Host An Event ",
            redirecturl:"/hostEvent"
        },
        {
            title: "Campus Ambassadors",
            redirecturl:""
        },
        {
            title: "Advertise with us",
            redirecturl:""
        },
        {
            title: "Winners",
            redirecturl:""
        }

    ];

    return (
        <div className="flex justify-center items-center p-4 bg-[#4b4c4c] h-[100px]">
            <div className="flex sm:gap-[80px] gap-0 ">
                <div className=""><img src="https://tapcoe.com/source/assets/img/taplg.png" alt="loading..." /> </div>

                <div className="flex gap-10 ">
                    {menuItems?.map((val, i) => {
                        return (
                            <div key={i} onClick={() => {setActive(val.title); navigate(val.redirecturl)}} className={`sm:block hidden mt-1 cursor-pointer flex text-white uppercase ${active === val.title ? "text-sky-400 underline" : 'text-yellow-400'}  text-[13px]`}>{val.title}</div>
                        )
                    })}
                </div>
            </div>

            <div>
                <div className="ml-[100px] mt-4">
                    <button className="sm:block hidden bg-blue-500 p-2 px-6 rounded-sm text-white">Login with google</button>
                </div>

                <div className="">
                    <button
                        className="menu-bar"
                        onClick={() => {setIsMenu(true) ;handleMenuState()}}
                    >
                        <div className="ml-[200px] -mt-[30px] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            <div className={`${isMenu ? "menu-view" : "view_menu"} menu-bar bar`}>
                <div className="flex justify-between p-5">
                    <div>
                        <img src="https://tapcoe.com/source/assets/img/taplg.png" alt="loading..." />
                    </div>
                    <div onClick={() => {setIsMenu(false);handleMenuState() }}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                </div>
                <div className="bar-menu">
                    {menuItems.map((item, index) => (
                        <div className="m-2" key={index} onClick={()=>{navigate(item.redirecturl)}}>
                            <div className="slider">
                                <div className="" > {item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <button className=" mt-4 bg-blue-500 p-2 px-6 rounded-sm">Login with google</button>

            </div>
        </div>
    )

}
export default Navbar;