import React,{useState} from "react";
import { DepartmentData } from "../../../assets/data/DepartmentData";
import Credentials from "../../credentials/Credentials";
import Addemployee from "./Addemployee";
import Operations from "./Operations";

const Operation = () => {
  const [addEmployee, SetAddEmployee] = useState("");

  return (
    <>
    {addEmployee ? (
     <Addemployee onClickSave={() => SetAddEmployee((prev) => !prev)}/>
      
    ) : (
      <main>

      <div className=" relative  text-[30px] mx-4">
      <h1>Operations</h1>
      <div className="text-[24px] leading-[36px] font-semibold ">
        <Operations
          heading="Name/Staff ID"
          position="Position"
          email="Email"
          status="Status"
          credential="Credential"
        />
      </div>

      <div className="bg-white  py-1 ">
        {DepartmentData.map((operation) => (
          <div className=" bg-[#F7F8F9]  rounded-[10px] flex m-1 py-4 my-2  justify-between items-center w-[auto]  lg:w-[auto] text-[12px] lg:text-[18px] ">
            <div className="flex item-center justify-between">
               <img className="rounded-[50%]" src={operation.profilePicture} alt={operation.name} /> 
              <div className="">{operation.staffId} <br />0134</div>
            </div>
            <div>
              <div className=" ">{operation.position}</div>
            </div>
            <div>
              <div className="">{operation.email}</div>
            </div>
            <div>
              <div className="">{operation.status}</div>
            </div>
            <div className=" flex mr-8">
              <div className="bg-[white]">
                <Credentials/>
              </div>
            </div>
          </div>
        ))}
      </div>
            {/* <div> add employee button</div> */}

      <div className="pt-[10px] flex w-auto m-auto  justify-end  ">

      <button onClick={() => SetAddEmployee((prev) => !prev)} className=" rounded p-5  bg-[#FFFFFF] w-[219px] h-[67px] text-[20px]"> <span >+</span>Add Employee</button>
      </div>
    </div>
      </main>
      
     
    )}
    </>
    
  );
};

export default Operation;

