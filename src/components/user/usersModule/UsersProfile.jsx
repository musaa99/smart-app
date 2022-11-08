import React from "react";
import profilepic from "../../../assets/profilepic.svg";
import { Userprofileboard } from "../../../assets/data/Userprofileboard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';

import "./userProfile.css";

const UsersProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <main className=" w-auto">
      <div className="flex justify-between items-center w-[300px] ">

<img className=" h-[150px] m-auto pt-4 rounded-[50%]  lg:ml-4" src={profilepic} alt="" />
  <div>
  <h1 className=" flex items-center  text-[24px] font-[500px] leading-[36px]">
  {user.first_name} <span className="ml-3"> {user.last_name}</span>
  </h1>
 
  <h4 className=" flex items-center text-black/60" > <Icon icon="carbon:location-filled" /> <span>Lagos</span></h4>
  <p className="text-black/60">{user.user_type}</p>

  </div>
</div>

      <ul className=" justify-center m-[20px] md:m-0 pt-3  lg:pt-[60px]">
        {Userprofileboard.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <div className=" ">
                  <div className=" grid grid-cols-2 md:flex md:justify-between m-4 lg:ml-2 mt-[28px] lg:mt-[20px] ">
                    <div className="">{item.title}</div>
                    <div className=" ml-[120px] lg:ml-[315px]">{item.icon}</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default UsersProfile;
