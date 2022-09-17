import React from "react";
import profilepic from "../../../assets/profilepic.svg";
import { Userprofileboard } from "../../../assets/data/Userprofileboard";
import { Link } from "react-router-dom";

 import "./userProfile.css";

const UsersProfile = () => {
  return (
    <main className=" w-auto">
      <div className="pt-6 ">

      <div className=" md:flex text-center  md:text-justify w-[300px] m-auto md:m-0 items-center">
        <img className=" h-[150px] m-auto pt-4  lg:ml-4" src={profilepic} alt="" />
        <div>

          <h1 className="text-[24px] font-[500px] leading-[36px]">
            Sarah Edem
          </h1>
          <h4>New York</h4>
          <p>Standard User</p>
        </div>
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
                  <div></div>
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
