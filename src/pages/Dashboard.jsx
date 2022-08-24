import React from 'react'
import Navbar from '../components/navbar/navbar'
 import Searchbar from '../components/navbar/searchbar'

const Dashboard = () => {
  return (
    <>
    <div className=''>
           <Searchbar/> 
         <div className='flex'>
         <Navbar/>
         <div className=' m-4 w-[400px] shadow'>
        <div className='m-4 '>
            <h1>Overview</h1>
            <p>Branch: Abuja</p>
        </div>
        <div>
            <h1>4</h1>
            <p>Departments</p>

        </div>
        <div>
            <h1>4</h1>
            <p>Departments</p>

        </div>
        <div>
            <h1>4</h1>
            <p>Departments</p>

        </div>
      </div>
         </div>

    </div>
    </>
  )
}

export default Dashboard