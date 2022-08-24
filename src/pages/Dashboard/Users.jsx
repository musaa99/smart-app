import React from 'react'
import Searchbar from '../../components/standardDashboard/navbar/searchbar.jsx'
import Navbar from '../../components/standardDashboard/navbar/navbar'
import UsersProfile from '../../components/standardDashboard/usersModule/UsersProfile.jsx'

const Users = () => {
  return (
    <div className='flex'>
    <div className='flex'>
      <Navbar/>
    </div>
    <div>
      <div className='grid grid-cols-1'>
        <Searchbar/>
        <UsersProfile/>
        
      </div>
    </div>
   
    </div>
  )
}

export default Users