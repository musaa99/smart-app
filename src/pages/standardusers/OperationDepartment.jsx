import React from 'react'
import Navbar from '../../components/user/navbar/navbar'
import Searchbar from '../../components/user/navbar/searchbar'
// import Operation from '../../components/user/Team/Department/Operation'
 import Operation from '../../components/Team/Department/Operation'
import { useSelector } from 'react-redux';
import Navbar2 from '../../components/manager/navbar/navbar';


const OperationDepartment = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" bg-[#F7F8F9] lg:flex">
     <div className="hidden lg:flex">
    {(user?.user_type?.toLowerCase() === '!employee') ?  <Navbar /> : <Navbar2 /> }
     
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Operation/>
      </div>
    </div>
  </div>
  )
}

export default OperationDepartment