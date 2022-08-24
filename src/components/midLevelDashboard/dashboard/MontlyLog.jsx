import React from "react";
import piechart from "../../../assets/piechart1.svg";
const MontlyLog = () => {
  return (
    <div className="m-auto">
      {/* <div className=" bg-white m-4 w-[669px] rounded-[10px] h-[325px] shadow">
        <div className="m-4 ">
          <h1 className="text-[30px] font-bold leading-[45px]">Monthly Log</h1>
          <p>Monthly record of employees</p>
        </div>

        <img
          className="w-[187px] h-[187px] m-4"
          src={piechart}
          alt="piechart"
        />
      </div> */}
      <img className="h-[325px]" src={piechart} alt="" />
    </div>
  );
};

export default MontlyLog;
