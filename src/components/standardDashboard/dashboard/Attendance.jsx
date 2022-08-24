import React from "react";
import { leaderboard } from "../../../assets/data/leaderboard";
// import WeeklyStatus from "./WeeklyStatus";
import bar from '../../../assets/barchart.svg'

const Attendance = () => {
  return (
    <div className="flex">
      <div className="w-[673px] h-[565px] rounded-[4px] m-3 bg-white shadow ">
        <div className="table__section">
          <h1 className="text-[20px] font-bold  leading-[30px]">Time and Attendance</h1>
          <p>Branch: Abuja</p>

          <div className="grid grid-cols-3 mb-[-30px] m-4 gap-40 text-[20px] font-normal leading-[30px]">
            <h2>Department</h2>
            <h2>Employee</h2>
            <h2>Status</h2>
          </div>
          {/* Table container */}
          <table className=" grid">
            <tbody>
              {leaderboard.map((leader,) => (
                <tr className="grid grid-cols-3 text-[18px] my-8 gap-38 items-center">
                  <td>
                    <div className="m-4">
                      {leader.department}
                    </div>
                  </td>
                  <td>
                    <div className="ml-[50px]" >
                      {leader.employee}
                    </div>
                  </td>
                  <td>
                    <div className="ml-[100px]" >
                      {leader.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <img className="w-[451px]" src={bar} alt="" />
      {/* <WeeklyStatus /> */}
    </div>
  );
};

export default Attendance;
