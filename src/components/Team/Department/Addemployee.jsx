import React from "react";

const Addemployee = ({ onClickSave }) => {
  return (
    <main className=" my-[45px] mx-4 w-[706px] ">
      <div className= " bg-white px-4 w-[706px] ">
        <div className="w-[22.25rem] p-[24px]">

        <h1 className="text-[30px] font-medium">Add Employee</h1>
        <div className=" grid grid-cols-1 gap-5">
          <h3 className="pt-[32px]">Staff Id</h3>
          <input className=" p-2 text-[22px]  text-black border rounded-md outline-none focus:bg-white focus:border-[#cccccc]" placeholder="Staff Id" type="text" />
          <h3>Name</h3>
          <input className=" p-2 text-[22px]  text-black border rounded-md outline-none focus:bg-white focus:border-[#cccccc]" placeholder="Name" type="text" />
          <h3>Department</h3>
          <input className=" p-2 text-[22px]  text-black border rounded-md outline-none focus:bg-white focus:border-[#cccccc]" placeholder="Department" type="text" />
          <h3>Position</h3>
          <input className=" p-2 text-[22px]  text-black border rounded-md outline-none focus:bg-white focus:border-[#cccccc]" placeholder="Position" type="text" />
          <h3>Email Address</h3>
          <input className=" p-2 text-[22px]  text-black border rounded-md outline-none focus:bg-white focus:border-[#cccccc]" placeholder="Email Address" type="text" />
        </div>
        </div>

      </div>
        <div className="pt-[10px] items-center flex w-auto m-auto  justify-end  ">
          <button
            onClick={onClickSave}
            className=" rounded   bg-[#cccccc] w-[129px] h-[59px] text-[20px]"
          >
            Save
          </button>
        </div>
    </main>
  );
};

export default Addemployee;
