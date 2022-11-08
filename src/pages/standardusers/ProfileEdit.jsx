import React from "react";
import Searchbar from "../../components/user/navbar/searchbar.jsx";
import Navbar from "../../components/user/navbar/navbar";
import EditProfile from "../../components/user/usersModule/EditProfile.jsx";
import { useSelector } from 'react-redux';
import Navbar2 from "../../components/manager/navbar/navbar";

const ProfileEdit = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
    {(user?.user_type?.toLowerCase() === '!employee') ?  <Navbar /> : <Navbar2 /> }
     
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
