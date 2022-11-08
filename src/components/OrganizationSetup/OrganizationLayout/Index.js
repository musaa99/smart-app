import React, { useState } from "react";
import Toogle from "../../user/emailPreference/Toogle";

const Preference = (props) => {
  const { header} = props;

  return (
    <div className="grid grid-cols-3 justigy-between items-center justify-between border-b-2 lg:w-[950px]">
      <div className=" my-[15px] lg:my-[30px]">
        <h1 className="font-normal  lg:text-[24px] text-[] leading-[36px]">{header}</h1>
      </div>
      <div className="flex ml-[120px]">
          <Toogle />

      </div>
          <Toogle />
             
    </div>
  );
};

export default Preference;
