import React from 'react'
import Searchbar from '../../components/user/navbar/searchbar.jsx'
import Navbar from '../../components/user/navbar/navbar'
import UsersProfile from '../../components/user/usersModule/UsersProfile.jsx'

const Users = () => {
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

export default Users