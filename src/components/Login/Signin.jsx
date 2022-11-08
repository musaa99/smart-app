import React, { useEffect } from "react";
import { Formik } from "formik";
import Frame from "../../assets/Frame.svg";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
 import { login } from "../../Redux/actions/auth";
import {useDispatch, useSelector} from "react-redux"
//import Register from "./register";


const Signin = () => {
 
  const dispatch = useDispatch()
	const navigate = useNavigate()
	const token = localStorage.getItem("jwt-token");

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/dashboard')
    }
  
  }, [isLoggedIn, navigate])
  

	console.log(token)
	// Redirect authenticated users
	if (token) {
	  navigate("/managerdashboard");
	}
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
        <Formik
          initialValues={{ email: "", password: "" }}
          className=" grid  "
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "please enter your email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "please enter your password";
            }
            return errors;
          }}
          onSubmit={(values) =>{
            // dispatch(login(values,action))
            dispatch(login(values.email, values.password))

          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="grid w-[auto] " onSubmit={handleSubmit}>
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                
                value={values.email}
                className="shadow appearance-none border border-[#148B92] rounded w-[auto] my-4  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-[red]">

              {errors.email && touched.email && errors.email}
              </span>
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                 value={values.password}
                //value={'myPassw@rd1'}
                className="shadow appearance-none border border-[#148B92] rounded w-[auto] my-4  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="text-[red] mt-0">
                {errors.password && touched.password && errors.password}
              </div>
              <div className="flex  my-6 justify-between">
                <p className=" text-[15px] ">
                  <input type="checkbox" />
                  Keep me logged in.
                </p>
                <p className="inline-block align-baseline font-bold text-sm text-[#09969F]">
                  Forgot Password?
                </p>
              </div>
              <button
                className="bg-[#09969F] w-[200px] m-[auto]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                
                {isSubmitting ? "Please wait..." : "LOGIN"}

              </button>
            </form>
          )}
        </Formik>
      </div>
          {/* <Register/> */}
    </div>
  );
};

export default Signin;
