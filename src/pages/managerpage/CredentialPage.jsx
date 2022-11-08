import React from "react";
import Navbar2 from "../../components/manager/navbar/navbar";
import MSearchbar from "../../components/manager/navbar/searchbar";
import Credential from "../../components/OrganizationSetup/OrganizationLayout/Credential";

 const CredentialsPage = () => {
  return (
    <div className="lg:flex ">
      <div className="hidden  lg:flex">
        <Navbar2 />
      </div>
      <div className=" bg-[#F5F5F5] w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <Credential/>
        </div>
      </div>
    </div>
  );
};

export default CredentialsPage