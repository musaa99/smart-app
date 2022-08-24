import React from "react";
import Searchbar from "../../components/standardDashboard/navbar/searchbar.jsx";
import Navbar from "../../components/standardDashboard/navbar/navbar";
import EditProfile from "../../components/standardDashboard/usersModule/EditProfile.jsx";

const ProfileEdit = () => {
  return (
    <div className="flex">
      <div className="flex">
        <Navbar />
      </div>
      <div>
        <div className="grid grid-cols-1">
          <Searchbar />
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
