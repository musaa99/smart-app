import React, { useState } from "react";
import profilepic from "../../../assets/profilepic.svg";
import Editprofile from "./Editprofile";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const {user} = useSelector((state)=> state.auth) 
  const [edit, SetEdit] = useState("");
 


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
              <p className="mt-[10px]">This helps users recognize you </p>
            </div>
          </div>
          <div className="w-[170px] lg:w-auto m-auto lg:ml-[150px]">
            <button className=" button w-[148px]   h-[58px]">Edit Photo</button>
          </div>
        </div>
      </main>
      {edit ? (
         
          <Profile
            header="Name"
            text= {  (user.first_name.toUpperCase())}
            button={
              <div className="flex item-center ">
                 <button className="button w-[85px] ml-[100px]    h-[58px]" onClick={() => SetEdit(false)}>Cancel</button>
                 <button className=" w-[85px] bg-[#37A7AE] rounded ml-4  h-[58px]" onClick={() => SetEdit(false)}>Send</button>

               </div>
            }
          />
      ) : (
        <Editprofile
          header="Name"
          text={user.first_name} 
          button={<div onClick={() => SetEdit(true)}>Edit</div>}
        />
      )}

    

      <Editprofile
        header="Email Address"
        text={user.email}
        button="Edit"
      />

      <Editprofile header="Department" text="Opreations" button="Edit" />

      <Editprofile header="Position" text="N/A" button="Edit" />
    </>
  );
};

export default EditProfile;
