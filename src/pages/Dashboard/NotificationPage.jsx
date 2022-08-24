import React from "react";
import Searchbar from "../../components/standardDashboard/navbar/searchbar.jsx";
import Navbar from "../../components/standardDashboard/navbar/navbar";
import Notification from "../../components/standardDashboard/notification/Notification.jsx";


const NotificationPage = () => {
  return (
    <div className="flex">
    <div className="flex">
      <Navbar />
    </div>
    <div>
      <div className="grid grid-cols-1">
        <Searchbar />
        <Notification />
      </div>
    </div>
  </div>
  )
}

export default NotificationPage