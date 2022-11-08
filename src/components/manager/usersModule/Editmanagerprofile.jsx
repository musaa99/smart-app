import React, { useState } from "react";
// import profilepic from "../../../assets/profilepic.svg";
import profilepic from "../../../assets/data/table/joey.svg";
import Editprofile from "./Editprofile";
// import Profile from "./Profile";
import { useSelector } from "react-redux";

const Editmanagerprofile = () => {
  const [edit, SetEdit] = useState("");
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <main className="m-4 border-b-4  ">
        <h1 className="text-[30px] font-bold leading-[45px] w-[100px] m-auto lg:w-full ">
          Profile
        </h1>
        <div className="lg:grid lg:grid-cols-2 pt-[45px]">
          <div className="block lg:flex mb-[30px] ">
            <img
              className="w-[150px] h-[150px] m-auto lg:m-0 "
              src={profilepic}
              alt=""
            />
            <div className=" text-center lg:text-start  ">
              <h1 className="text-[24px]  font-[500px] leading-[36px]">
                Profile Photo
              </h1>
              <p className="mt-[10px]">This helps users recognize </p>
            </div>
          </div>
          <div className="w-[170px] lg:w-auto m-auto lg:ml-[150px]">
            <button className=" button w-[148px]   h-[58px]">Edit Photo</button>
          </div>
        </div>
      </main>
      {edit ? (
       
        <div className="m-6 border-b-4  lg:w-[full]">
          <h1 className="text-[24px]  font-[500px]  leading-[36px]">Name</h1>
          <div className="flex">
            <input
              className=" editinput w-[600px] border-2 border-slate-100  py-4 bg-[#F5F5F5]"
              type="text"
              placeholder= "user.first_name"
            />
            <div className="flex item-center ">
              <button
                className="button w-[85px] ml-[100px]    h-[58px]"
                onClick={() => SetEdit(false)}
              >
                Cancel
              </button>
              <button
                className=" w-[85px] bg-[#37A7AE] rounded ml-4  h-[58px]"
                onClick={() => SetEdit(false)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Editprofile
          header="Name"
          text={user.first_name}
          lastname={user.last_name}
          button={<div onClick={() => SetEdit(true)}>Edit</div>}
        />
      )}

      <Editprofile header="Email Address" text={user.email} button="Edit" />

      <Editprofile header="Department" text="Opreations" button="Edit" />

      <Editprofile header="Position" text="N/A" button="Edit" />
    </>
  );
};

export default Editmanagerprofile;
