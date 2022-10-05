import React from 'react'

const Dashboardmain = (props) => {
    const { header,  employee, credential, admin, standard, department  } = props

  return (
        <div className='m-4 '>
            <h1 className='font-bold text-[24px] leading-[36px]'>{header}</h1>
            <h6 className='text-[20px] w-[auto] lg:w-[504px]  leading-[30px]'> {department}</h6>
            <h6 className='text-[20px] w-[auto] lg:w-[504px]  leading-[30px]'> {employee}</h6>
            <h6 className='text-[20px] w-[auto] lg:w-[504px]  leading-[30px]'> {admin}</h6>
            <h6 className='text-[20px] w-[auto] lg:w-[504px]  leading-[30px]'> {standard}</h6>
            <h6 className='text-[20px] w-[auto] lg:w-[504px]  leading-[30px]'> {credential}</h6>
        </div>
  )
}

export default Dashboardmain