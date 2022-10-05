import React, { useState } from "react";
// import { Formik } from "formik";
import Frame from "../../assets/Frame.svg";
import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const users = [
    { username: "Admin", password: "test" },
    { username: "Midadmin", password: "test" },
    { username: "user", password: "testpassword" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      navigate("/dashboard2");
    }
  };
  return (
    <div className="lg:grid lg:grid-cols-2">
      <img
        className=" hidden md:flex w-[auto] lg:h-[755px]"
        src={Frame}
        alt=""
      />

      <div className=" mt-4 mx-8 lg:mx-[99px]">
        <img src={logo} alt="" />

        <h1 className="text-[40px] lg:my-7">Login</h1>
        <h2 className="text-[20px] lg:my-8">Please login to your account</h2>

        <div className="block">
          <form className="grid grid-cols-1" onSubmit={handleSubmit}>
            <div className="grid">
              <input
              placeholder="username"
                type="text"
                name="Username"
                className="shadow appearance-none border border-[#148B92] rounded w-[auto] my-4  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="password"
                name="Password"
                className="shadow appearance-none border border-[#148B92] rounded w-[auto] my-4  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
