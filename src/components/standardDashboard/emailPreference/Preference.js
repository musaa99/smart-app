import React from 'react'
import Toogle from './Toogle'

const Preference = (props) => {
    const { header , text, } = props
  return (
    <div className='flex justify-between border-b-2 w-[850px]'>
        <div className=' my-[30px]'>
            <h1 className='font-bold text-[24px] leading-[36px]'>{header}</h1>
            <p className='text-[20px]  leading-3'>{text}</p>
        </div>
        <Toogle/>

    </div>
  )
}

export default Preference