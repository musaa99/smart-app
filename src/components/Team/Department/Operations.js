import React from "react";

const Operations = ({
  heading,
  position,
  email,
  status,
  credential,
  margin,
}) => {
  return (
    <div className="flex   items-center">
      <div
        className={`  grid  grid-cols-5  gap-[40px] m-1 py-4 my-2  w-[auto]  lg:w-[auto]   ${margin}`}
      >
        <h1>{heading}</h1>
        <p>{position}</p>
        <p>{email}</p>
        <p className="ml-[6rem]">{status}</p>
        <p className="ml-[]">{credential}</p>
      </div>
    </div>
  );
};

export default Operations;
