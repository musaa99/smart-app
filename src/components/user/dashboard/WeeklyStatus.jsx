import React from 'react'
import bar from '../../../assets/barchart.svg'


const WeeklyStatus = () => {
  return (
    <div className='w-[360px] m-[auto] lg:w-auto lg:m-auto'>
        {/* <div className='m-4'>
            <h1>Weekly status</h1>
            <h5>From 1 Aug - 12 Aug</h5>
        </div> */}
      <img className="lg:w-[451px]" src={bar} alt="" />


    </div>
  )
}

export default WeeklyStatus