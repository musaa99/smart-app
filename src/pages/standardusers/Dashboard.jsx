import React from "react";
import Searchbar from "../../components/user/navbar/searchbar.jsx";
import Attendance from "../../components/user/dashboard/Attendance";
import DashboardMain from "../../components/user/dashboard/DashboardMain";
import DashboardTop from "../../components/user/dashboard/DashboardTop";
import Navbar from "../../components/user/navbar/navbar";
import MontlyLog from "../../components/user/dashboard/MontlyLog.jsx";
import WeeklyStatus from "../../components/user/dashboard/WeeklyStatus.jsx";

const Dashboard = () => {
  return (
    <div className="lg:flex">
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <Searchbar />
           <DashboardTop /> 
          <div className="block md:flex   ">
            <DashboardMain />
            <MontlyLog />
          </div>
          <div className=" block lg:flex">
            <Attendance />
            <WeeklyStatus />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
