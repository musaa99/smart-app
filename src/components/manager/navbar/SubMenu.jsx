import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link className='SidebarLink' to={item.path}onClick={() => setSubnav(true)}>
        <div className="flex items-center ml-8 ">
          {item.icon}
          <div className='ml-[16px]'>{item.title}</div>
        </div>
        <div>
          {/* {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : false } */}
        </div>
      </Link>
      <div>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link  to={item.path} key={index} className='DropdownLink'>
              {item.icon}
              <div className='ml-[16px]'>{item.title}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SubMenu;
