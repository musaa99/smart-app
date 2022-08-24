import React from "react";
import logo from "../../assets/logo.svg";
import bell from "../../assets/bell.svg";
import profilepic from "../../assets/profilepic.svg";
import { MdSearch } from "react-icons/md";

const Searchbar = () => {
  return (
    <div className="flex md:w-[1080px] lg:w-[1150px] bg-[#07939B]">
      <div className="search">
        <MdSearch className="search-icons" size="1.6em" />
        <input type="text" placeholder="search" />
      </div>
      <div className="grid grid-cols-2 p-4 items-center lg:ml-[210px] ">
        <img src={bell} alt="" />
        <img src={profilepic} alt="" />
      </div>
    </div>
  );
};

export default Searchbar;
