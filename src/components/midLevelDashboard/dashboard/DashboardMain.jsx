import React from "react";
// import MontlyLog from "./MontlyLog";

const DashboardMain = () => {
  return (
    <div className=" bg-white m-4 w-[auto] md:w-[auto] lg:w-[auto] h-[auto] lg:h-[325px] rounded shadow">
      <div className="  w-[auto] text-center md:text-justify m-auto lg:w-auto lg:m-4 ">
        <h1 className="  m-auto lg:w-[auto] lg:text-[30px] lg:mb-[16px]  font-bold leading-[45px]">
          Overview
        </h1>
        <p className=" w-[auto] m-auto lg:w-[auto]">Branch: Lagos</p>
      </div>
      <main className="grid grid-cols-3 p-1 gap-3 text-center md:text-justify md:p-4 md:gap-[3.5rem]">
        <div>
          <h1 className="text-[24px] font-semibold leading-[36px]">4</h1>
          <p className="text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Departments
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-semibold leading-[36px]">80</h1>
          <p className=" text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Employees
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-semibold leading-[36px]">3</h1>
          <p className="text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Admins
          </p>
        </div>

        <div>
          <h1 className="text-[24px] font-semibold leading-[36px]">4</h1>
          <p className="text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Credentials
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-semibold leading-[36px]">3</h1>
          <p className="text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Users
          </p>
        </div>
        <div className="">
          <h1 className="text-[24px] font-semibold leading-[36px]">8</h1>
          <p className="text-[15px] lg:text-[20px] font-normal leading-[30px]">
            Devics
          </p>
        </div>
      </main>

    </div>
  );
};

export default DashboardMain;
