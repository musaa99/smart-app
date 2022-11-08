import React from 'react'

const Editprofile = (props) => {
  const { header, text, lastname, button } = props;

  return (
    <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
    <div className=" mb-[30px] items-center  lg:ml-[40px]">
      <h1 className="text-[24px]  font-[500px] leading-[36px]">{header}</h1>
      <div className='flex gap-2'>

      <p className="mt-[10px]">{text} </p>
      <p className="mt-[10px]">{lastname} </p>
      </div>
    </div>
    <div className=" md:ml-auto lg:ml-[220px]">
      <button  className=" button w-[85px]   h-[58px]">{button}</button>
    </div>
  </div>
  )
}

export default Editprofile