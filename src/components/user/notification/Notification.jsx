import React, { useState } from "react";
import notification from "../../../assets/Notificationlogo.svg";
import { useSelector } from "react-redux";
const Notification = ({ Notification }) => {
  const {user} = useSelector((state)=> state.auth)
  const [reply, SetReply] = useState("");

  return (
    <div className="m-4 ">
      <h1 className="text-[30px] font-bold leading-[45px]  m-auto ">
        {Notification}
      </h1>
      <div className=" block lg:flex m-4">
        <img src={notification} alt="" />
        <div className=" border-b-4 ml-4 mb-[30px] ">
          <div className=" lg:grid lg:grid-cols-2 lg:mb-[30px]">
            <h1 className="text-[24px]  font-[500px] leading-[36px]">
              LUCHISMART
            </h1>
          </div>
          <div >
            <div className="mt-[10px] mb-4 w-[332px] lg:w-[auto]">
              <p>
                Hi <span>{user.first_name}</span>, welcome onboard! we hope your presence will greatly
                impact the growth and expansion of the company.
              </p>
            </div>
            {reply ? (
              <div>
                <input
                  type="text"
                  className=" w-auto md:w-[600px] p-4 text-gray-500 border rounded-md outline-none bg-white focus:bg-white focus:border-indigo-600"
                />
                <button
                  className=" button bg-slate-400 ml-4 w-[148px]   h-[38px]"
                  onClick={() => SetReply((prev) => !prev)}
                >
                  send
                </button>
              </div>
            ) : (
              <button
                onClick={() => SetReply(true)}
                className=" button w-[85px]  h-[58px]"
              >
                Reply
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
