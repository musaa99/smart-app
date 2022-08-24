import React from "react";
import notification from "../../../assets/Notificationlogo.svg";
import { Icon } from "@iconify/react";

const Notification = () => {
  return (
      <>
      <h1 className="text-[30px] font-bold leading-[45px] ">Notification</h1>
    <div className=" flex m-4">
      <img src={notification} alt="" />
      <div className=" border-b-4 mb-[30px] ">
        <div className=" grid grid-cols-2 mb-[30px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">
            ILUCHISMART
          </h1>
          <Icon icon="quill:meatballs-h" />
        </div>
        <div className=" ">
          <p className="mt-[10px]">
            Hi Sarah, welcome onboard! we hope your presence will greatly impact
            the growth and expansion of the company.
          </p>
          <button className=" w-[85px]   h-[58px]">Reply</button>
        </div>
      </div>
    </div>
      </>
  );
};

export default Notification;
