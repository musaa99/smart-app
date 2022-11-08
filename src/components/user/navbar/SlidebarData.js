import React from "react";
//logo



import { Icon } from '@iconify/react';
import dashboardIcon from '@iconify/icons-akar-icons/dashboard';

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
      // icon: <Icon icon="akar-icons:dashboard" inline={true} />,
    // icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
     icon: <Icon icon={dashboardIcon} />,
    cName: "nav-text"
  },
  {
    title: "Users",
    path: "/Users",
    icon: <Icon icon="ph:users-bold" />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/Teampage",
    icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: "Places",
    path: "#",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: "Event-history",
    path: "/EventPage",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
 
  {
    title: "Report",
    path: "#",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
 
  
];
