import React from "react";
import Searchbar from "../../components/user/navbar/searchbar.jsx";
import Navbar from "../../components/user/navbar/navbar";
import Notification from "../../components/user/notification/Notification.jsx";


const NotificationPage = () => {
  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
      <Navbar />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Notification/>
      </div>
    </div>
  </div>
  )
}

export default NotificationPage