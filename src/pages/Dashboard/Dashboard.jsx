import React from "react";
import Searchbar from "../../components/standardDashboard/navbar/searchbar.jsx";
import Attendance from "../../components/standardDashboard/dashboard/Attendance";
import DashboardMain from "../../components/standardDashboard/dashboard/DashboardMain";
import DashboardTop from "../../components/standardDashboard/dashboard/DashboardTop";
import Navbar from "../../components/standardDashboard/navbar/navbar";
import MontlyLog from "../../components/standardDashboard/dashboard/MontlyLog.jsx";
import WeeklyStatus from "../../components/standardDashboard/dashboard/WeeklyStatus.jsx";

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
