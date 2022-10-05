import React,{useState} from "react";
import profilepic from "../../../assets/profilepic.svg";
import Modal from "../../modal/Modal";
import ConfirmPassword from "../logins/ConfirmPassword";

const EditProfile = () => {
  const [changePassword, ChangePassword] = useState(false);
  const [twoFactor, TwoFactor] = useState(false);

  

  return (
    <>
      <main className="m-4 border-b-4  ">
        <h1 className="text-[30px] font-bold leading-[45px] w-[100px] m-auto lg:w-full ">Profile</h1>
        <div className="lg:grid lg:grid-cols-2 pt-[45px]">
          <div className="block lg:flex mb-[30px] ">
            <img className="w-[150px] h-[150px] m-auto lg:m-0 " src={profilepic} alt="" />
            <div className=" text-center lg:text-start  ">
              <h1 className="text-[24px]  font-[500px] leading-[36px]">
                Profile Photo
              </h1>
              <p className="mt-[10px]">This helps users recognize you </p>
            </div>
          </div>
          <div className="w-[170px] lg:w-auto m-auto lg:ml-[150px]">
            <button onClick={() => ChangePassword((prev) => !prev)} className=' button w-[180px] lg:w-[230px] h-[58px]'>Change Password</button>
            
          </div>
        </div>
      </main>
      {/* <div className="flex justify-between items-center md:grid md:grid-cols-2  md:p-0  border-b-4 mb-[30px] "> */}
      <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
        <div className=" mb-[30px] items-center  lg:ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">Name</h1>
          <p className="mt-[10px]">Sarah Edem </p>
        </div>
        <div className=" md:ml-auto lg:ml-[220px]">
          <button onClick={() => TwoFactor((prev) => !prev)} className=" button w-[85px]   h-[58px]">Edit</button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
      <div className=" mb-[30px] items-center  lg:ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">
            Email Address
          </h1>
          <p className="mt-[10px] text-sm md:text-lg">Sarahedem@Chevrontech.com </p>
        </div>
        <div className=" md:ml-auto lg:ml-[220px]">
          <button className=" button w-[85px]  rounded shadow  h-[58px]">
            Edit
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
      <div className=" mb-[30px] items-center  lg:ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">
            Department
          </h1>
          <p className="mt-[10px]">Opreations</p>
        </div>
        <div className="  md:ml-auto lg:ml-[220px]">
          <button className=" button w-[85px]  rounded shadow  h-[58px]">
            Edit
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b-4 p-4 lg:grid lg:grid-cols-2 ">
      <div className=" mb-[30px] items-center  lg:ml-[40px]">
          <h1 className="text-[24px]  font-[500px] leading-[36px]">Position</h1>
          <p className="mt-[10px]">N/A </p>
        </div>
        <div className=" md:ml-auto lg:ml-[220px]">
          <button className=" button w-[85px]  rounded shadow  h-[58px]">
            Edit
          </button>
        </div>
      </div>
      <div  className={changePassword ? "flex" : "hidden"}    > 
      <ConfirmPassword onClickClose={() => ChangePassword((prev) => !prev)} />
      

      {/* <Modal>
              <>
                            <div className="token-modal">
                                <h3>Public Sale iii has not started, but will start really soon!</h3>
                                <small>Check back in</small>
                            </div>
                            <div className="w-[170px] lg:w-auto m-auto lg:ml-[150px]">
            <button onClick={() => ChangePassword((prev) => !prev)} className=' button w-[180px] lg:w-[230px] h-[58px]'>Change Password</button>
            
          </div>
                        </>
              </Modal> */}
            
          </div>
      <div  className={twoFactor ? "flex" : "hidden"}    > 
      <Modal>
              <>
                            <div className="token-modal">
                                <h3>Public Sale iii has not started, but will start really soon!</h3>
                                <small>Check back in</small>
                            </div>
                            <div className="w-[170px] lg:w-auto m-auto lg:ml-[150px]">
            <button onClick={() => TwoFactor((prev) => !prev)} className=' button w-[180px] lg:w-[230px] h-[58px]'>Change Password</button>
            
          </div>
                        </>
              </Modal>
              
            
          </div>
      
              {/* <Modal>
              <>
                            <div className="token-modal">
                                <h3>Public Sale iii has not started, but will start really soon!</h3>
                                <small>Check back in</small>
                            </div>
                        </>
              </Modal> */}
          
    </>
  );
};

export default EditProfile;