import React from "react";
import Searchbar from "../../components/standardDashboard/navbar/searchbar.jsx";
import Navbar from "../../components/standardDashboard/navbar/navbar";
import EditProfile from "../../components/standardDashboard/usersModule/EditProfile.jsx";

const ProfileEdit = () => {
  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
      <Navbar />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <EditProfile/>
      </div>
    </div>
  </div>
  );
};

export default ProfileEdit;
