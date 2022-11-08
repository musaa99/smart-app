import React, { useState } from "react";
// import Modal from "../modal/Modal";
// import ConfirmPassword from "../user/logins/ConfirmPassword";

const Credentials = () => {
  const [value, SetValue] = useState(false);

  return (
    <div >
      <div className="w-auto ">
         <fieldset> 
          <div className=" flex justify-between   items-center border border-gray-300 text-gray-800 bg-white shadow-lg">
            <div
              className="appearance-none w-auto mr-5  bg-white"
              name="whatever"
              id="frm-whatever"
            >
              All
            </div>

            <div className="ml-9">
              <svg
                onClick={() => SetValue((prev) => !prev)}
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          
         </fieldset> 
      </div>
       <div className={value ? "absolute right-[25px] " : "hidden"}>
              <div className="block bg-[white] p-[8px] w-[auto] mx-3  justify-between">
                <div className=" flex items-center text-[15px] ">
                  <input type="checkbox" />

                  <h6 className="align-baseline font-bold text-sm ">
                    Fingerprint
                  </h6>
                </div>
                <div className=" flex items-center text-[15px] ">
                  <input type="checkbox" />

                  <h6 className=" align-baseline font-bold text-sm ">
                  RFID Card
                  </h6>
                </div>
                <div className=" flex items-center text-[15px] ">
                  <input type="checkbox" />

                  <h6 className=" align-baseline font-bold text-sm ">
                    Pin
                  </h6>
                </div>
                <div className="flex items-center text-[12px] ">
                  <input type="checkbox" />

                  <h6 className=" font-bold w-[max-content] text-sm">
                  Mobile App
                  </h6>
                </div>
              </div>
          </div> 
    </div>
  );
};

export default Credentials;
