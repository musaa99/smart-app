import React from 'react'
import Preference from './Preference'

const EmailPreference = () => {
  return (
    <div className='m-4 pt-4 w-[auto] '>
        <h1 className='text-[30px] font-bold leading-[45px]'>Email Preferences</h1>
        <div className='lg:pt-[50px]'>
            <div>
                <Preference
                header="Email Notifications"
                text="Recieve notifications on your email"
                />
            </div>
            
            <div>
                <Preference
                header="Recommendations"
                text="Check out our recommended devices"
                />
                
            </div>
            <div>
                <Preference
                header="Latest"
                text="Stay current with the latest features and product launches"
                />
            </div>
            <div>
                <Preference
                header="Special Occasions"
                text="Choose to recieve special day communications "
                />
            </div>
            <div>
                <Preference
                header="Unsubscribe From All"
                text="You will recieve no further updates"
                />
            </div>
        </div>
    </div>
  )
}

export default EmailPreference