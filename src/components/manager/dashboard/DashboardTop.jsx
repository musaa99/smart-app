import React from "react";
import { useSelector } from "react-redux";

const DashboardTop = () => {
   const {user} = useSelector((state) => state.auth);

  return (
        <div className=" w-fit text-center md:text-justify md:w-[auto] lg:w-[auto] md:flex md:justify-between md:p-6 lg:p-0  m-auto lg:m-4">
          <main className="">
            <h1 className=" text-[20px] lg:text-[30px] font-bold leading-[45px]">
            {user.organization_id}
            </h1>
            <p>Hello, {user.first_name} <span>{user.last_name}</span>  </p> 
          </main>
          <div className="text-[#37A7AE]">
            <h4>New York</h4>
            <h5>22 Aug 2022</h5>
          </div>
        </div>
  );
};

export default DashboardTop;
