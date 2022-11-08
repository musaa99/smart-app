import React from "react";
import Country from "../../country/Country";
import Index from "./Index";

const Setup = () => {
  return (
    <div className="m-4">
      <div className="  flex justify-between ">
        <h1 className="leading-[39px] text-[26px] font-bold">
          Organization Setup
        </h1>
        <Country />
      </div>
      <div className="bg-white p-4 lg:w-[1080px]">
        <h1 className="leading-[39px] text-[26px] font-bold">Fingerprint</h1>
        <div className="flex justify-around ml-[20rem] mt-2 ">
          <h1 className="leading-[39px] text-[26px] ">Employees</h1>
          <h1 className="leading-[39px]  text-[26px] ">Administrator</h1>
        </div>
        <div className="flex  border-b-2 items-center">
          <Index header="Frontdoor" />
          
        </div>
        <div className="flex items-justify  border-b-2 items-center">
          <Index header="Operations Office" />
          
        </div>
        <div className="flex items-justify  border-b-2 items-center">
          <Index header="Marketing Office" />
          
        </div>
        <div className="flex items-justify  border-b-2 items-center">
          <Index header="Human Resources Office" />
          
        </div>
        <div className="flex items-justify  border-b-2 items-center">
          <Index header="Technology Office" />
          
        </div>
      </div>
    </div>
  );
};

export default Setup;
