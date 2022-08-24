import React from "react";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import dash from '../../assets/dashboard.svg'
import frame from '../../assets/Frame.svg'
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    img: {dash},
    cName: "nav-text"
  },
  {
    title: "Users",
    path: "/Users",
    // icon: <IoIcons.IoIosPaper />,
    img: {frame},

    cName: "nav-text"
  },
  {
    title: "Places",
    path: "#",
    // icon: <FaIcons.FaCartPlus />,
    img: {dash},

    cName: "nav-text"
  },
  {
    title: "History",
    path: "/team",
    // icon: <IoIcons.IoMdPeople />,
    img: {dash},

    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "#",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    img: {dash},

    cName: "nav-text"
  },
  {
    title: "Organization",
    path: "#",
    // icon: <IoIcons.IoMdHelpCircle />,
    img: {dash},

    cName: "nav-text"
  }
];
