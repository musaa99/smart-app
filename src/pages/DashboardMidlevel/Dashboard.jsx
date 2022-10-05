import React from "react";
import Searchbar from "../../components/midLevelDashboard/navbar/searchbar.jsx";
import Attendance from "../../components/midLevelDashboard/dashboard/Attendance";
import DashboardMain from "../../components/midLevelDashboard/dashboard/DashboardMain";
import DashboardTop from "../../components/midLevelDashboard/dashboard/DashboardTop";
import MontlyLog from "../../components/midLevelDashboard/dashboard/MontlyLog.jsx";
import WeeklyStatus from "../../components/midLevelDashboard/dashboard/WeeklyStatus.jsx";
 import Navbar from "../../components/midLevelDashboard/navbar/navbar.jsx";

const DashboardMid = () => {
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

export default DashboardMid;
