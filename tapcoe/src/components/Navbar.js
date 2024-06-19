import { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar({ handleMenuState }) {

    const [isMenu, setIsMenu] = useState(false);
    const [active, setActive] = useState('')
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    // Function to handle toggle of logout button visibility
    const toggleLogout = () => {
        setShowLogout(!showLogout);
        console.log(Cookies.get('token'),"ggggggg")

    
    };

    const [profileImg, setProfileImg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            setIsLoggedIn(true);

            const storedProfileImg = localStorage.getItem('profileImg');
            const storedName = localStorage.getItem('name');
            const storedEmail = localStorage.getItem('email');

            setProfileImg(storedProfileImg);
            setName(storedName);
            setEmail(storedEmail);

         
        } else {
            setIsLoggedIn(false);
        }
    }, [Cookies.get('token')]);

    const menuItems = [
        {
            title: "Home",
            redirecturl: "/"
        },
        {
            title: "About Us",
            redirecturl: "/Aboutus"
        },
        {
            title: "Host An Event ",
            redirecturl: "/hostEvent"
        },
        {
            title: "Campus Ambassadors",
            redirecturl: "/Campusambassadors"
        },
        {
            title: "Advertise with us",
            redirecturl: "Advertisewithus"
        },
        {
            title: "Winners",
            redirecturl: ""
        }

    ];
    const handleMenuItemClick = (title, redirecturl) => {
        setActive(title);
        navigate(redirecturl);
        setIsMenu(false); // Close the menu
        handleMenuState(); // Notify the parent or global state
    };
    return (
        <div className="flex justify-center items-center p-4 bg-[#4b4c4c] h-[100px]">
            <div className="flex sm:gap-[80px] gap-0 ">
                <div className=""><img src="https://tapcoe.com/source/assets/img/taplg.png" alt="loading..." /> </div>

                <div className="flex gap-10 ">
                    {menuItems?.map((val, i) => {
                        return (
                            <div key={i} onClick={() => { setActive(val.title); navigate(val.redirecturl) }} className={`sm:block hidden mt-1 cursor-pointer flex text-white uppercase ${active === val.title ? "text-sky-400 underline" : 'text-yellow-400'}  text-[13px]`}>{val.title}</div>
                        )
                    })}
                </div>
            </div>

            <div>



             {/* {isLoggedIn ? (
    <div className="relative ml-4 mt-3 flex items-center gap-2">
        <div className="group flex gap-2 items-center">
            <img
                src={profileImg}
                alt="Profile"
                className="rounded-full h-10 w-10"
            />
            <p className="text-white">{email}</p>
            <button
                onClick={handleLogout}
                className="absolute right-0 mt-12 bg-red-500 p-2 px-4 rounded-sm text-white hidden group-hover:block"
            >
                Logout
            </button>
        </div>
    </div>
) : (
    <div className="ml-[100px] mt-4">
        <a href="https://tapcoe-backend.onrender.com/api/v1/auth/google">
            <button className="sm:block hidden bg-blue-500 p-2 px-6 rounded-sm text-white">
                Login with Google
            </button>
        </a>
    </div>
)} */}
{isLoggedIn ? (
    <div className="relative ml-4 mt-3 flex items-center gap-2">
        <div className="group flex gap-2 items-center">
            <img
                src={profileImg}
                alt="Profile"
                className="rounded-full h-10 w-10"
            />
            <p className="text-white">{email}</p>
            <button
                 onClick={() => {
                    // Implement logout functionality here
                   
                    setShowLogout(false); 
                    Cookies.remove('token');
                    localStorage.clear();
                   
                    window.location.reload();// Hide logout button after logout
                    navigate("/")
                }}
                className="absolute right-0 mt-12 bg-red-500 p-2 px-4 rounded-sm text-white hidden group-hover:block"
            >
                Logout
            </button>
        </div>
    </div>
) : (
    <div className="ml-[100px] mt-4">
        <a href="https://tapcoe-backend.onrender.com/api/v1/auth/google">
            <button className="sm:block hidden bg-blue-500 p-2 px-6 rounded-sm text-white">
                Login with Google
            </button>
        </a>
    </div>
)}




                <div className="">
                    <button
                        className="menu-bar"
                        onClick={() => { setIsMenu(true); handleMenuState() }}
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
                    <div onClick={() => { setIsMenu(false); handleMenuState() }}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                </div>
                <div className="bar-menu">
                    {menuItems.map((item, index) => (
                        <div className="m-2" key={index} onClick={() => handleMenuItemClick(item.title, item.redirecturl)}>
                            <div className="slider">
                                <div className="" > {item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                {isLoggedIn ? <div className="relative flex flex-col items-center ml-4">
            <div
                className="flex flex-row gap-2 items-center"
                onClick={toggleLogout} // Toggle logout button on div click
            >
                <div>
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="rounded-full h-10 w-10"
                    />
                </div>
                <div>
                    <p className="loginButton">{email}</p>
                </div>
            </div>
            {/* Logout button */}
            <div className={`mt-2 ${showLogout ? 'block' : 'hidden'}`}>
                <button
                    onClick={() => {
                        // Implement logout functionality here
                       
                        setShowLogout(false); 
                        Cookies.remove('token');
                        localStorage.clear();
                        navigate("/")
                        window.location.reload();// Hide logout button after logout
                    }}
                    className="bg-red-500 p-2 text-white rounded-sm hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>:<a href="https://tapcoe-backend.onrender.com/api/v1/auth/google"> <button className=" mt-4 bg-blue-500 p-2 px-6 rounded-sm" >Login with google</button> </a>}


            </div>
        </div>
    )

}
export default Navbar;