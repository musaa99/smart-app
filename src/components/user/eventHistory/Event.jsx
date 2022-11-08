import React,{useState} from "react";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { Eventhistorydata } from "../../../assets/data/Eventhistorydata";
import Country from "../../country/Country";
import EllipsisModal from "./EllipsisModal";
const Event = () => {
  const [edit, SetEdit] = useState("");
  

  return (
    <main className="m-4 flex justify-between mr-[90px] ">
      <div>
        <h1 className="text-[30px] leading[] font-bold">Event History</h1>
        <ul className="mt-[75px]">
          {Eventhistorydata.map((item, index) => {
            return (
              <li key={index}>
                <Link className="" to={item.path}>
                  <div className=" flex items-center justify-between bg-white rounded-[10px] border w-[600px] p-4 my-[20px] ">
                    <div>
                      <div className="font-medium text-[26px] leading-[39px]">
                        {item.Month}
                      </div>
                      <div className="font-normal text-[20px] leading-[30px] text-black/60">
                        {item.log}
                      </div>
                    </div>
                    <Icon onClick={() => SetEdit(true)} icon="eva:arrow-ios-back-fill" rotate={2} />
                    <div className={edit ? "flex" : "hidden"}>
                    <EllipsisModal/>

                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Country />
    </main>
  );
};

export default Event;
