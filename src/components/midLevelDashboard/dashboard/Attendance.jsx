import React from "react";
import { Places } from "../../../assets/data/Places";
import { Link } from "react-router-dom";

// import WeeklyStatus from "./WeeklyStatus";

const Attendance = () => {
  return (
      <div className=" w-[465px] lg:w-[auto] h-[auto] lg:h-[auto] rounded-[4px] m-3 bg-white shadow ">
        <div className="table__section">
          <h1 className="text-[20px] font-bold w-[270px] lg:w-[auto]  leading-[30px]">
            Time and Attendance
          </h1>
          <p>Branchs</p>


          {/* Table container */}
          <div>
          <ul className=" justify-center m-[20px] md:m-0 pt-3  lg:pt-[60px]">
        {Places.map((item, index) => {
          return (
            <li key={index} className={item.cName} >
              <Link to={item.path} >
                <div className=" ">
                  <div className=" flex items-center md:flex md:justify-between m-4 lg:ml-2 mt-[28px] lg:mt-[20px] ">
                    <div className=" text-[red]">{item.title}</div>
                    <div className=" ml-[120px] lg:ml-[315px]">{item.icon}</div>
                  </div>
                  <div></div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
          </div>
        </div>
      </div>
  );
};

export default Attendance;
