import React from 'react'
import Navbar2 from '../../components/manager/navbar/navbar'
import Event from '../../components/user/eventHistory/Event'
import Navbar from '../../components/user/navbar/navbar'
import Searchbar from '../../components/user/navbar/searchbar'
import { useSelector } from 'react-redux';


const EventPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" bg-[#F7F8F9] lg:flex">
<div className="hidden lg:flex">
    {(user?.user_type?.toLowerCase() === '!employee') ?  <Navbar /> : <Navbar2 /> }
     
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Event/>
      </div>
    </div>
  </div>
  )
}

export default EventPage