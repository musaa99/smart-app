import React from "react";
import Searchbar from "../../components/user/navbar/searchbar.jsx";
import Editmanagerprofile from "../../components/manager/usersModule/Editmanagerprofile.jsx";
import Navbar2 from "../../components/manager/navbar/navbar.jsx";

const ManagerProfileEdit = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
    <div className="hidden lg:flex">
      <Navbar2 />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Editmanagerprofile/>
      </div>
    </div>
  </div>
  );
};

export default ManagerProfileEdit;
