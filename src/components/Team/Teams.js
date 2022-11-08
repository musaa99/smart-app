import React from "react";
// import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import dotsThreeVertical from '@iconify/icons-entypo/dots-three-vertical';

const Teams = (props) => {
  const { header, text, img,button,} = props;
  

  return (
    <div    className=" hover: items-center lg:w-[639px] h-[118px] mx-5 p-[45px] mt-5 items-center text-center  bg-white rounded-[10px] border-2 flex justify-between">
      <main className="text-left">
        <h2>{header}</h2>
        <h5>{text}</h5>
      </main>
      <div className="flex justify-between ">
        <div className="flex ">

        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
        <img src={img} alt="profilepicture" />
      <button >{button}</button>
        </div>
      <Icon className="ml-5" icon={dotsThreeVertical} />

      </div>
    </div>
  );
};

export default Teams;
