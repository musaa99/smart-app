import React from 'react'
import MSearchbar from '../../components/manager/navbar/searchbar.jsx'
import Navbar2 from '../../components/manager/navbar/navbar'
import ManagerProfile from '../../components/manager/usersModule/UsersProfile.jsx'

const ManagerPage = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <ManagerProfile/>
        </div>
      </div>
    </div>
  )
}

export default ManagerPage