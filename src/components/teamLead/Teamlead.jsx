import React from 'react'
import Teamleads from './Teamleads'
import profilepic from "../../assets/profilepic.svg";


const Teamlead = () => {
  return (
    <div className='bg-white border rounded'>
        <h1>All Leads</h1>
        <div>
            <Teamleads
             img={profilepic}
             header="Operation"
             text="Mather Grey"
            />
            <Teamleads
             img={profilepic}
             header="Operation"
             text="Mather Grey"
            />
            <Teamleads
             img={profilepic}
             header="Operation"
             text="Mather Grey"
            />
            <Teamleads
             img={profilepic}
             header="Operation"
             text="Mather Grey"
            />

        </div>
    </div>
  )
}

export default Teamlead