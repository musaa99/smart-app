import React from "react";
import "./Login.css";

const ConfirmPassword = () => {
  return (
    <React.Fragment>
      <div className="bg-white border justify-evenly shadow w-[auto] h-[455px] flex flex-col items-center ">
        <h1 className="font-semibold text-[30px] leading-[45px]">
          Confirm your Current Password
        </h1>
        <p className="pt-[10px]">Please confirm your password </p>
        <h6 className="mr-[38rem] font-medium text-[24px] leading-[36px]">
          {" "}
          Password
        </h6>
        <input className="border shadow  w-[715px] h-[60px]" type="password" />
        <div className="grid grid-cols-2 gap-[37px]">
          <button className="button w-[300px] h-[60px] rounded-[12px]">
            Cancel
          </button>
          <button className="bg-[#37A7AE] w-[300px] h-[60px] rounded-[12px]">
            Confirm Password
          </button>
        </div>
        <p>Forgot Password?</p>
      </div>
    </React.Fragment>
  );
};

export default ConfirmPassword;
