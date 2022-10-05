import React from "react";
import Dashboardmain from "./Dashboard";
// import MontlyLog from "./MontlyLog";

const DashboardMain = () => {
  return (
    <div className=" bg-white m-4 w-[auto] md:w-[auto] lg:w-[465px] h-[auto] lg:h-[fit-content]  rounded-[10px] shadow">
      <div className="  w-[auto] text-center md:text-justify m-auto lg:w-auto lg:p-4 ">
        <h1 className="  m-auto lg:w-[auto] lg:text-[30px]   font-bold leading-[45px]">
          Overview
        </h1>
      </div>
      <main className="grid grid-cols-2">
        <Dashboardmain
        header="New York"
        department=' 4 Departments'
        employee='80 Employee'
        admin='2 Administrators'
        standard='4 Standard Users'
        credential='4 Credentials'
        />
        <Dashboardmain
        header="Abuja"
        department=' 4 Departments'
        employee='80 Employee'
        admin='2 Administrators'
        standard='4 Standard Users'
        credential='4 Credentials'
        />
        <Dashboardmain
        header="Florida"
        department=' 4 Departments'
        employee='80 Employee'
        admin='2 Administrators'
        standard='4 Standard Users'
        credential='4 Credentials'
        />
        <Dashboardmain
        header="Lagos"
        department=' 4 Departments'
        employee='80 Employee'
        admin='2 Administrators'
        standard='4 Standard Users'
        credential='4 Credentials'
        />
        

      </main>

    </div>
  );
};

export default DashboardMain;
