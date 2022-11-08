import React from "react";
import Searchbar from "../../components/user/navbar/searchbar.jsx";
import Navbar from "../../components/user/navbar/navbar";
 import Team from "../../components/Team/Team";
 import { useSelector } from 'react-redux';
import Navbar2 from "../../components/manager/navbar/navbar.jsx";


const Teampage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="lg:flex">
 <div className="hidden lg:flex">
    {(user?.user_type?.toLowerCase() === '!employee') ?  <Navbar /> : <Navbar2 /> }
     
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
        <Team/>
      </div>
    </div>
  </div>
  )
}

export default Teampage