import React from "react";
import MontlyLog from "./MontlyLog";

const DashboardMain = () => {
  return (
    <div className="flex">
      <div className=" bg-white m-4 w-[465px] h-[325px] rounded shadow">
        <div className="m-4 ">
          <h1 className="text-[30px] mb-[16px]  font-bold leading-[45px]">
            Overview
          </h1>
          <p>Branch: Abuja</p>
        </div>
        {/* <div className='flex m-4 mb-[24px] justify-between'> */}
        <div className="grid grid-cols-4 gap-[180px] m-4">
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">4</h1>
            <p className="text-[20px] font-normal leading-[30px]">
              Departments
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">80</h1>
            <p className="text-[20px] font-normal leading-[30px]">Employees</p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">3</h1>
            <p className="text-[20px] font-normal leading-[30px]">Admins</p>
          </div>
        </div>
        {/* <div className='flex m-4  justify-between'> */}
        <div className="grid grid-cols-4 gap-[180px] pt-6 m-4">
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">4</h1>
            <p className="text-[20px] font-normal leading-[30px]">
              Credentials
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">3</h1>
            <p className="text-[20px] font-normal leading-[30px]">Users</p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold leading-[36px]">8</h1>
            <p className="text-[20px] font-normal leading-[30px]">Devics</p>
          </div>
        </div>
      </div>
      <MontlyLog />
    </div>
  );
};

export default DashboardMain;
