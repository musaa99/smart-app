import React from 'react'
// import { useSelector } from 'react-redux';
const Editprofile = (props) => {
  const { header, text, button } = props;
  // const {user} = useSelector((state)=> state.auth) 

  return (
    <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
    <div className=" mb-[30px] items-center  lg:ml-[40px]">
      <h1 className="text-[24px]  font-[500px] leading-[36px]">{header}</h1>
      <p className="mt-[10px]">{text} </p>
    </div>
    <div className=" md:ml-auto lg:ml-[220px]">
      <button  className=" button w-[85px]   h-[58px]">{button}</button>
    </div>
  </div>
  )
}

export default Editprofile