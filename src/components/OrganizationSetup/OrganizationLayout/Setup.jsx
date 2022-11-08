import React from "react";
import logo from "../../../assets/branch.svg";
// import Country from "../../country/Country";

const Setup = () => {
  return (
    <div className="m-4">
      <div className="flex justify-between">
      <h1 className="leading-[39px] text-[26px] font-bold">Organization Setup</h1>
      {/* <Country/> */}

      </div>
      <p className="leading-[45px] text-[30px] font-normal">Branches</p>
      <div className="grid w-[auto] gap-[20px] m-auto grid-cols-2 m-4">
        <img src={logo} alt="abuja" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Setup;
