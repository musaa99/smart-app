import React from 'react'
import EmailPreference from '../../components/standardDashboard/emailPreference/EmailPreference'
import Navbar from '../../components/standardDashboard/navbar/navbar'
import Searchbar from '../../components/standardDashboard/navbar/searchbar'

const EmailPreferencePage = () => {
  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
      <Navbar />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <EmailPreference/>
      </div>
    </div>
  </div>
  )
}

export default EmailPreferencePage