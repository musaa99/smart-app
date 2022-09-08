import React, {useState} from "react";
import profilepic from "../../../assets/profilepic.svg";
import Edit from "./Edit";
import {  useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [changePassword, ChangePassword] = useState(false);
  const [twoFactor, TwoFactor] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate ("/Edit")
    
  }
  return (
    <>
      {/* <div className="m-4 border-b-4  ">
        <h1 className="text-[30px] font-bold leading-[45px] ">Profile</h1>
        <main className="grid grid-cols-2 pt-[45px]">
          <div className="flex mb-[30px] ">
            <img className="w-[150px] h-[150px] " src={profilepic} alt="" />
            <div className="  ml-[40px]">
              <h1 className="text-[24px]  font-[500px] leading-[36px]">
                Profile Photo
              </h1>
              <p className="mt-[10px]">This helps users recognize you </p>
            </div>
          </div>
          <div className=" ml-[150px]">
            <button className=" w-[148px]  h-[58px]">Edit Photo</button>
          </div>
        </main>
      </div>
      <div className="grid grid-cols-2 border-b-4 mb-[30px] ">
        <div className=" mb-[30px]  ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">Name</h1>
          <p className="mt-[10px]">Sarah Edem </p>
        </div>
        <div className=" ml-[220px]">
          <button className=" w-[85px]   h-[58px]">Edit</button>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-4 mb-[30px] ">
        <div className="mb-[30px]  ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">
            Email Address
          </h1>
          <p className="mt-[10px]">Sarahedem@Chevrontech.com </p>
        </div>
        <div className=" ml-[220px]">
          <button className=" w-[85px]  rounded shadow  h-[58px]">Edit</button>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-4 mb-[30px] ">
        <div className="mb-[30px]  ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">
            Department
          </h1>
          <p className="mt-[10px]">Opreations</p>
        </div>
        <div className=" ml-[220px]">
          <button className=" w-[85px]  rounded shadow  h-[58px]">Edit</button>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-4  ">
        <div className=" mb-[30px] ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">Position</h1>
          <p className="mt-[10px]">N/A </p>
        </div>
        <div className=" ml-[220px]">
          <button className=" w-[85px]  rounded shadow  h-[58px]">Edit</button>
        </div>
      </div> */}
      <div  className="m-4 border-b-4  ">
      <h1 className="text-[30px] font-bold leading-[45px] ">Profile</h1>
      <main className="grid grid-cols-2 pt-[45px]">
          <div className="flex mb-[30px] ">
            <img className="w-[150px] h-[150px] " src={profilepic} alt="" />
            <div className="  ml-[40px]">
              <h1 className="text-[24px]  font-[500px] leading-[36px]">
                Profile Photo
              </h1>
              <p className="mt-[10px]">This helps users recognize you </p>
            </div>
          </div>
          <div className=" ml-[150px]">
            <button onClick={handleSubmit} className="   w-[148px]  h-[58px]">Edit Photo</button>
          </div>
        </main>

      </div>
      <div>

      <Edit
      
      title ="Name"
      text = "Sarah Edem"
      margin='5px '
      />
      </div>
      <Edit
      title ="Email Address"
      text = "Sarahedem@Chevrontech.com"
      margin=' '
      />
      <Edit
      title ="Department"
      text = "Operations"
      margin=' '
      />
      <Edit
      title ="Position"
      text = "N/A"
      margin='ml- '
      />
      <Edit
      title ="Name"
      text = "Sarah Edem"
      margin=' '
      />
    </>
  );
};

export default EditProfile;