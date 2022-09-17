import React from "react";
import { leaderboard } from "../../../assets/data/leaderboard";
// import WeeklyStatus from "./WeeklyStatus";

const Attendance = () => {
  return (
      <div className=" w-[auto] lg:w-[auto] h-[auto] lg:h-[auto] rounded-[4px] m-3 bg-white shadow ">
        <div className="table__section">
          <h1 className="text-[20px] font-bold w-[270px] lg:w-[auto]  leading-[30px]">
            Time and Attendance
          </h1>
          <p>Branch: Abuja</p>

          <div className=" grid grid-cols-3 w-[auto] lg:w-[auto] text-[12px] lg:mb-[-30px] lg:m-4 gap-[7.5rem]  lg:gap-40 lg:text-[20px] font-semibold leading-[30px]">
            <h2>Department</h2>
            <h2>Employee</h2>
            <h2>Status</h2>
          </div>
          {/* Table container */}
          <table className=" grid">
            <tbody className=" ">
              {leaderboard.map((leader) => (
                <tr className="grid grid-cols-3 w-[auto]  lg:w-[auto] text-[12px] lg:text-[18px] my-4 lg:my-8  items-center">
                  <td>
                    <div className="lg:m-4 ">{leader.department}</div>
                  </td>
                  <td>
                    <div className=" ml-10  lg:ml-[50px]">{leader.employee}</div>
                  </td>
                  <td>
                    <div className="ml-20 lg:ml-[100px]">{leader.status}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Attendance;
