import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import bell from "../../../assets/bell.svg";
import profilepic from "../../../assets/profilepic.svg";
import "./Navbar.css";
// import Hamburger from "./Hamburger";

const Searchbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/NotificationPage");
  };
  return (
     <div className="flex">
          <div className="bg-white lg:w-[14%]">
          <img className=" m-auto " src={logo} alt="" />
        </div>
    <div className="block lg:flex justify-between items-center p-2 w-[fit-content] xd:w-[90%] md:w-[auto] lg:w-[76%]  bg-[#07939B]">
     
        <div className=" flex md:flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
            <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
            <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
          </div>

          <div className={isNavOpen ? "" : "hidden"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-2"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            ></div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col ml-4 items-center justify-between text-[12px] ">
              <li className=" my-4  ">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className=" my-2 ">
                <a href="/Users">Users</a>
              </li>
              <li className=" my-2 ">
                <a href="/Features">Places</a>
              </li>
              <li className=" my-2 ">
                <a href="/Faq">Event</a>
              </li>
              <li className=" my-2">
                <a href="/Faq">Event </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <img className="flex md:hidden" src={logo} alt="logo" /> */}
      {/* </div> */}
      
      <form className=" pt-4 md:pt-1 w-[] lg:w-[auto]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-[706px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
      <div className="hidden md:flex items-center ">
        <img src={profilepic} alt="profilepicture" />
        <img onClick={handleSubmit} src={bell} alt="notificationbell" />
      </div>
    </div>
     </div>
  );
};

export default Searchbar;
