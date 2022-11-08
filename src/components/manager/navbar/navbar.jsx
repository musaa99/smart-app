import React from "react";
import logo from "../../../assets/logo.svg";
import { useSelector } from "react-redux";
// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";
import SubMenu from "./SubMenu";



const Navbar2 = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <nav className=" h-[auto] bg-white hidden border   h-[full] lg:w-[290px]  lg:flex">
        <div className=" none   ">
          <img className=" pt-[20px] ml-10" src={logo} alt="" />
          <div className="flex items-center">
          <div className="w[100%] ">
            
            {SidebarData.map((item, index) => {
              
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>
          <div className="ml-[60px] pt-[]">
            <p className="pt-[200px]">{user.user_type}</p>
            <button className=" text-[red]">logout</button>
          </div>
        </div>
    </nav>
  );
};
export default Navbar2;
