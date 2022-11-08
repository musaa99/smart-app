import React from 'react'
import Login from '../../components/user/logins/Login'
import Navbar from '../../components/user/navbar/navbar'
import Searchbar from '../../components/user/navbar/searchbar'

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