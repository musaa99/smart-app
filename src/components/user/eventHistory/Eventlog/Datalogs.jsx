import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { Videodata } from '../../../../assets/data/VideoData';
import Index from './Index';

const Datalogs = () => {
  const [ellipse, SetEllipse] = useState(false);
  return (
    <div  className=" bg-white m-4 rounded-[10px]" >
        <div className='flex pt-6 justify-between'>
        <h1>Weeks</h1>
        <Icon  onClick={() => SetEllipse((prev) => !prev)} className='mr-[90px]'  icon="eva:arrow-ios-back-fill" rotate={3} >  </Icon>
       
        </div>
        <div className={ellipse ? "" : "hidden"}>
      <Index />
      </div>
        <div className='flex justify-between'>
            <h1 className='mt-[177px]'>25th, September 2022</h1>
        <ul className="mt-[35px]">
          {Videodata.map((item, index) => {
            return (
              <li key={index}>
                <Link className="" to={item.path}>
                    <div className='flex items-center'>
                        <div className='p-5'>

                        </div>
                  <div className=" flex items-center justify-between bg-[#F7F8F9] rounded-[10px] mr-[115px] border w-[700px] p-2 my-[10px] ">
                    <div>
                      <div className="font-medium text-[22px] leading-[33px]">
                        {item.Month}
                      </div>
                      <div className="font-normal text-[18px] leading-[27px] text-black/60">
                        {item.log}
                      </div>
                    </div>
                    <Icon  icon="eva:arrow-ios-back-fill" rotate={2} />
                   
                  </div>
                    </div>
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
    </div>
  )
}

export default Datalogs