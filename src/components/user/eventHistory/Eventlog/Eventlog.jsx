import React,{useState} from "react";
import Country from "../../../country/Country";
import DataLogs from "./VideoEvent";
import VideoEvent from "./Datalogs";

const Eventlog = () => {
  const [event, SetEvent] = useState(false);

  return (
    <>
    <main className="m-4">
      <header className="">
        <div className="flex justify-between">
        <h1 className="text-[30px] leading[] font-bold">September, 2022</h1>
        <Country/>

        </div>
        <div className=" bg-white py-4 px-3 flex justify-around">
          <div  onClick={() => SetEvent(true)} className=" w-[350px] text-center bg-[#F7F8F9]  w-[390px] py-4">
            <h4 className="bg-[#F7F8F9] border-b-[#37A7AE]  border-b-[2px]">Video Events</h4>
          </div>
         
    

           <div  onClick={() => SetEvent(false)}  className=" w-[350px] text-center bg-[#F7F8F9]  w-[390px] py-4">  
          {/* <div  onClick={() => SetEvent(false)}  {className=" SetEvent(true) ?  w-[350px] text-center bg-[#F7F8F9]  w-[490px] py-4}"> */}
            <h4 className="border-b-[red] border-b-[2px] ">Data Logs</h4>
          </div>
        </div>
      </header>
      
    </main>
    <div >
      {/* {event ? (<VideoEvent/>) : (<DataLogs/>) } */}
       {event ? (<DataLogs/>) : (<VideoEvent/>) } 
      
     </div>
    </>
  );
};

export default Eventlog;
