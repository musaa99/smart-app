import React from "react";
import Navbar2 from "../../components/manager/navbar/navbar";

 import Team from "../../components/Team/Team";
import MSearchbar from "../../components/manager/navbar/searchbar.jsx";


const Index = () => {
  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
      <Navbar2 />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <MSearchbar />
        <Team/>
      </div>
    </div>
  </div>
  )
}

export default Index