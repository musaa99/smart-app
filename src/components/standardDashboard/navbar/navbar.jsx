import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-white h-[full] lg:w-[290px] ">
      <div className=" mt-[20px]  ">
        <div>
          <img className=" ml-[40px]" src={logo} alt="" />
        </div>
        <ul className=" justify-center pt-[60px]">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <div className=" flex items-center lg:ml-[40px]">
                    <div className="">
                    <div className="">{item.icon}</div>
                    </div>
                    <div>
                    <div className="ml-[15px]">{item.title}</div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-[60px] pt-[114px]">
        <p>Standard User</p>
        <button className=" text-[red]">logout</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
