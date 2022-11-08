import React from "react";
import Attendance from "../../components/manager/dashboard/Attendance";
import DashboardTop from "../../components/manager/dashboard/DashboardTop";
import MontlyLog from "../../components/manager/dashboard/MontlyLog.jsx";
import WeeklyStatus from "../../components/manager/dashboard/WeeklyStatus.jsx";
import Index from "../../components/manager/dashboard/DashboardMain";
import MSearchbar from "../../components/manager/navbar/searchbar";
import Navbar2 from "../../components/manager/navbar/navbar";

const Managerdashboard = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
    <div className="hidden lg:flex">
       <Navbar2 /> 
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <MSearchbar />
         <DashboardTop /> 
        <div className="block md:flex   ">
          <Index />
          <WeeklyStatus />
        </div>
        <div className=" block lg:flex">
          <Attendance />
          <MontlyLog />

        </div> 
      </div>
    </div>
  </div>
  );
};

export default Managerdashboard;
