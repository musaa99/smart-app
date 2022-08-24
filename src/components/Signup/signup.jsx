/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from "react";
import {  useNavigate } from "react-router-dom";
// import { NavLink, Form, FormGroup, Input, Label } from "reactstrap";
import Frame from "../../assets/Frame.svg"
import logo from "../../assets/logo.svg";

const Signup = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = () => {
      navigate("/Dashboard")
    }


   
    
  return (
   <div className="flex flex-1">
       
       
        <img className=" w-[50%] h-[700px]" src={Frame} alt="" />     
       {/* //forms */}
       <div className = "w-[auto]  px-8 pt-6 pb-8 mb-4">
           <img src={logo} alt="" />
           <h1 className="text-[40px]">Login</h1>
           <h2 className="text-[20px]">Please login to your account</h2>
           <form className="bg-white shadow-md rounded">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-[#148B92] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Enter email address"
              // value={email}
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
              // value={password}
            >
              Password
            </label>
            
            <input
              className="shadow appearance-none border  border-[#148B92] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
            <div className="flex justify-between">

            <p className=" text-[15px] ">
                <input type="checkbox" />
            Keep me logged in.
            </p>
            <a className="inline-block align-baseline font-bold text-sm text-[#09969F]">
              Forgot Password?
            </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-[#09969F] w-[200px] m-[auto]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              LOGIN
            </button>
            
          </div>
        </form>

       </div>
   </div>
  );
};

export default Signup;
