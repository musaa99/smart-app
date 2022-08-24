import React from "react";
import profilepic from "../../../assets/profilepic.svg";
import { Userprofileboard } from "../../../assets/data/Userprofileboard";
import { Link } from "react-router-dom";

import "./userProfile.css";

const UsersProfile = () => {
  return (
    <div>
      <div className="mt-[50px] flex items-center">
        <img className="w-[150px] h-[150px] ml-4" src={profilepic} alt="" />
        <div className="grid grid-cols-1 gap-6 ml-[28px]">
          <h1 className="text-[24px] font-[500px] leading-[36px]">
            Sarah Edem
          </h1>
          <h4>New York</h4>
          <small>Standard User</small>
        </div>
      </div>
      <ul className=" justify-center  pt-[60px]">
        {Userprofileboard.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <div className=" ">
                  <div className=" grid grid-cols-2 ml-2 mt-[20px] ">
                    <div className="">{item.title}</div>
                    <div className="ml-[315px]">{item.icon}</div>
                  </div>
                  <div></div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersProfile;
