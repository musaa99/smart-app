import React from "react";

const Profile = (props) => {
  const { header, text, button } = props;
//   const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="m-6 border-b-4  lg:w-[full]">
      <h1 className="text-[24px]  font-[500px]  leading-[36px]">{header}</h1>
      <div className=" grid grid-cols-2 gap-8 justify-between items-center  mb-[30px] ">
        <input
          value={text}
          type="text"
          className=" lg:w-[auto]  p-4 text-gray-500 border rounded-md outline-none bg-white focus:bg-white focus:border-indigo-600"
        />
        <div className="">{button}</div>
      </div>
    </div>
  );
};

export default Profile;
