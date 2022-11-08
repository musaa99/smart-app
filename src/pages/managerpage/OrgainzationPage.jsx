import React from "react";
import Navbar2 from "../../components/manager/navbar/navbar";
import MSearchbar from "../../components/manager/navbar/searchbar";
import Setup from "../../components/OrganizationSetup/OrganizationLayout/Setup";

 const OrgainzationPage = () => {
  return (
    <div className="lg:flex ">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <Setup/>
        </div>
      </div>
    </div>
  );
};

export default OrgainzationPage