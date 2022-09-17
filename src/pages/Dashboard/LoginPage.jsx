import React from 'react'
import Login from '../../components/standardDashboard/logins/Login'
import Navbar from '../../components/standardDashboard/navbar/navbar'
import Searchbar from '../../components/standardDashboard/navbar/searchbar'

const LoginPage = () => {
  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
      <Navbar />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Login/>
      </div>
    </div>
  </div>
  )
}

export default LoginPage