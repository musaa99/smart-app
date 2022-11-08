import React from 'react'

const Teamleads = (props) => {
  const { img, header, text, } = props;

  return (
    <div className=' h-[92px]'>
        <div className='flex items-center p-4'>
        <img src={img} alt='icon'/>
        <div>

            <h3 className='text-[#37A7AE]'>{header}</h3>
            <h3>{text}</h3>
        </div>
        </div>

    </div>
  )
}

export default Teamleads