import React from "react";
import { PayHistory } from "../../assets/data/PayHistory";

const PaymentHistory = () => {
  return (
    <div className="m-6">
      <h1 className="font-bold text-[30px] mb-20">Payment History</h1>
      <div className="bg-[white] rounded-[10px] p-4 ">
        <div
          className={` text-[12px]  text-[26px] font-normal grid  grid-cols-5  gap-[80px] m-1   w-[auto]  lg:w-[auto]`}
        >
          <h4>Date</h4>
          <h4 className="w-[max-content]">Payment</h4>
          <h4 className="w-[max-content] ml-8">Mode</h4>
          <h4 className=" w-[max-content]">Amount</h4>
          <h4 className="">Status</h4>
        </div>
        <div className="mt-[35px]">
          {PayHistory.map((item, id) => {
            return (
              <div className=" bg-[#F7F8F9] rounded-[20px]" key={id}>
                <div
                  className={` text-[24px] font-small grid  grid-cols-5  gap-[80px] m-1 py-4 my-2  w-[max-content]  lg:w-[auto]`}
                >
                  <h4 className="w-[max-content]">{item.date}</h4>
                  <h4 className="w-[max-content]">{item.payment}</h4>
                  <h4 className="w-[max-content] ml-8">{item.mode}</h4>
                  <h4 className=" w-[max-content]">{item.amount}</h4>
                  <h4 className="">{item.status}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
