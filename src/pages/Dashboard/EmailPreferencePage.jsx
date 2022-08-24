import React from 'react'
import EmailPreference from '../../components/standardDashboard/emailPreference/EmailPreference'
import Navbar from '../../components/standardDashboard/navbar/navbar'
import Searchbar from '../../components/standardDashboard/navbar/searchbar'

const EmailPreferencePage = () => {
  return (
    <div className="flex">
    <div className="flex">
      <Navbar />
    </div>
    <div>
      <div className="grid grid-cols-1">
        <Searchbar />
        <EmailPreference/>
      </div>
    </div>
  </div>
  )
}

export default EmailPreferencePage