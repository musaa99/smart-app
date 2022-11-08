import React from "react";
import Navbar2 from "../../components/manager/navbar/navbar";
import MSearchbar from "../../components/manager/navbar/searchbar";
import ManagerNotification from "../../components/manager/usersModule/managerslayout/notification/Notification";

const ManagerNotifications = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <ManagerNotification/>
        </div>
      </div>
    </div>
  );
};

export default ManagerNotifications;
