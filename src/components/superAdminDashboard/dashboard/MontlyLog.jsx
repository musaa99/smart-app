import React from "react";
import piechart from "../../../assets/piechart.svg";
import './Dashboard.css'
const MontlyLog = () => {
  return (
    <div className=" bg-white m-auto p-2  w-[auto]  rounded-[10px] h-auto md:h-[auto] shadow">
      <div className=" text-center md:text-justify">
        <h1 className=" text-[20px] md:text-[30px] font-bold leading-[45px]">
          Monthly Log
        </h1>
        <p>Monthly record of employees</p>
      </div>
      <div className="block md:flex  mt-[40px]">
        <img className=" h-[100px] m-auto  lg:h-[187px]" src={piechart} alt="" />
        <div className="grid  lg:ml-[4rem] w-[auto] grid-cols-2 gap-6 lg:gap-5">
          <div>
            <h3 className="">Fingerprint</h3>
            <p>25% of employees used Fingerprint</p>
          </div>
          <div>
            <h3>RFID Card</h3>
            <p>20% of employees used RFID card</p>
          </div>
          <div>
            <h3>PIN</h3>
            <p>15% of employees used Pin</p>
          </div>
          <div>
            <h3>Mobile App</h3>
            <p>40% of employees used Mobile App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MontlyLog;
