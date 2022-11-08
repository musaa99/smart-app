import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
 import { Icon } from "@iconify/react";

import { Videodata } from '../../../../assets/data/VideoData';
import Checkbox from './Checkbox';

const VideoEvent = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Videodata);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  // console.log(isCheck);

  const Video = list.map(({ id, Month, log }) => {
    return (
        
      <div className='flex'>
      <div  className='flex items-center'>
        
      <div>
        <Checkbox
          key={id}
          type="checkbox"
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
      </div>
      <div className=" flex items-center justify-between bg-[#F7F8F9] rounded-[10px] mr-[115px] border w-[700px] p-2 my-[10px] ">

                    <div>
                      <div className="font-medium text-[22px] leading-[33px]">
                        {Month}
                      </div>
                      <div className="font-normal text-[18px] leading-[27px] text-black/60">
                        {log}
                      </div>
                    </div>
                    <Icon  icon="eva:arrow-ios-back-fill" rotate={2} />
                   
                  </div>
      </div>
      
      </div>
    );
  });
  return (
    <div className=' flex bg-white m-4'>
 <div className='flex pt-6 justify-between'>
        <h1>Weeks</h1>
        <Icon   className='mr-[90px]'  icon="eva:arrow-ios-back-fill" rotate={3} >  </Icon>
       
        </div>

    <div className=' '>
         
      <Checkbox 
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
        
        
      />
      
      {Video}
    </div>
    </div>
  );
}

export default VideoEvent