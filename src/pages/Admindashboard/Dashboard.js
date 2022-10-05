import React from "react";
import Searchbar from "../../components/superAdminDashboard/navbar/searchbar.jsx";
import Attendance from "../../components/superAdminDashboard/dashboard/Attendance";
import DashboardMain from "../../components/superAdminDashboard/dashboard/DashboardMain";
import DashboardTop from "../../components/superAdminDashboard/dashboard/DashboardTop";
import MontlyLog from "../../components/superAdminDashboard/dashboard/MontlyLog.jsx";
import WeeklyStatus from "../../components/superAdminDashboard/dashboard/WeeklyStatus.jsx";
 import Navbar from "../../components/superAdminDashboard/navbar/navbar.jsx";

const AdminDashboard = () => {
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

export default AdminDashboard;
