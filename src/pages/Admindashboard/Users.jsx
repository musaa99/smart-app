import React from 'react'
import Searchbar from '../../components/superAdminDashboard/navbar/searchbar.jsx'
import Navbar from '../../components/superAdminDashboard/navbar/navbar'
import UsersProfile from '../../components/superAdminDashboard/usersModule/UsersProfile.jsx'

const AdminUsers = () => {
  return (
    <div className="lg:flex">
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <Searchbar />
         <UsersProfile/>
        </div>
      </div>
    </div>
  )
}

export default AdminUsers