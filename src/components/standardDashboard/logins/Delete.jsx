import React from 'react'

const Delete = () => {
 

  return (
    <React.Fragment>
      <div className="bg-white border justify-evenly shadow w-[825px] text-center  h-[357px] flex flex-col items-center ">
        <h1 className="font-semibold text-[30px] leading-[45px]">
        Are you sure you want to delete your account?
        </h1>
        <p className="pt-[10px] text-center mx-[80px] ">
        If you delete your account now, you will have the option to recover 
        it ithin 30 days before it is permanently deleted.
        </p>
        <p className="pt-[10px]  text-center">
        When you delete your account you loose all related data 
        and permissions. This cannot be recovered.
        </p>
        <div className="grid grid-cols-2 gap-[37px]">
          <button  className="button w-[300px] h-[60px] rounded-[12px]">
            Cancel
          </button>
          <button  className="bg-[#F55151] w-[300px] h-[60px] rounded-[12px]">
          Deleete Account
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Delete