import React from 'react'
import Searchbar from '../../components/standardDashboard/navbar/searchbar.jsx'
import Attendance from '../../components/standardDashboard/dashboard/Attendance'
import DashboardMain from '../../components/standardDashboard/dashboard/DashboardMain'
import DashboardTop from '../../components/standardDashboard/dashboard/DashboardTop'
import Navbar from '../../components/standardDashboard/navbar/navbar'

const Dashboard = () => {
  return (
    <div className='flex'>
    <div className='flex'>
      <Navbar/>
    </div>
    <div>
      <div className='grid grid-cols-1'>
        <Searchbar/>
        <DashboardTop/>
        <DashboardMain/>
        <Attendance/>
      </div>
    </div>
   
    </div>
  )
}

export default Dashboard