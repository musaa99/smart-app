import React from "react";
import Teams from "./Teams";
import styles from "./Team.module.css";
import profilepic from "../../assets/profilepic.svg";
import { useNavigate } from "react-router-dom";
import Country from "../country/Country";
import Index from "../addDepartment/Index";

import Teamlead from "../teamLead/Teamlead";

const Team = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Operations");
  };

  return (
    <div className="flex">
      <div className="ml-4 lg:w-[850px]">
        <div className="flex justify-between ">
          <div className=" lg:w-[639px] h-[178px] mx-5 p-[45px] mt-5 items-center text-center  bg-white rounded border-2 flex justify-between">
            <div className={styles.department}>
              <h1>04</h1>
              <h6>Teams</h6>
            </div>
            <div className={styles.department}>
              <h1>04</h1>
              <h6>Teams</h6>
            </div>
            <div className={styles.department}>
              <h1>80</h1>
              <h6>Teams</h6>
            </div>
            <div className={styles.department}>
              <h1>04</h1>
              <h6>Teams</h6>
            </div>
          </div>
          <div className="pt-5"></div>
        </div>
        <section className="">
          <div onClick={handleSubmit}>
            <Teams
              header="Operations"
              text={
                <div>
                  <h4>
                    4 lead <span> 27 employees</span>
                  </h4>
                </div>
              }
              img={profilepic}
              button={onclick}
            />
          </div>
        </section>
        <Teams
          header="Human Resources"
          text="3 lead, 27 employees"
          img={profilepic}
        />
        <Teams
          header="Marketting"
          text="3 lead, 27 employees"
          img={profilepic}
        />
        <Teams
          header="Technology"
          text="3 lead, 27 employees"
          img={profilepic}
        />
      </div>
      <section className="pt-4 w-[auto] p-2">
        <div className="mb-[75px]">
          <Country />
        </div>
        <div className="pt-4">
          <Index />
        </div>
        <div className="pt-[98px]">
          <Teamlead />
        </div>
      </section>
    </div>
  );
};

export default Team;
