import React from 'react'
import EditYourProfile from '../../components/standardDashboard/editProfile/EditYourProfile'
import Navbar from '../../components/standardDashboard/navbar/navbar'
import Searchbar from '../../components/standardDashboard/navbar/searchbar'

const Editing = () => {
  return (
    <div className="flex">
    <div className="flex">
      <Navbar />
    </div>
    <div>
      <div className="grid grid-cols-1">
        <Searchbar />
        <EditYourProfile />
      </div>
    </div>
  </div>
  )
}

export default Editing