import React from "react";
//logo



import { Icon } from '@iconify/react';

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard2",
      // icon: <Icon icon="akar-icons:dashboard" inline={true} />,
    // icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
     icon: <Icon icon="tabler:layout-dashboard" inline={true} />,
    cName: "nav-text"
  },
  {
    title: "Users",
    path: "/",
    icon: <Icon icon="ph:users-bold" />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/",
    icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: "Places",
    path: "#",
    icon: <Icon icon="carbon:location-company" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: "Event-history",
    path: "#",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
 
  {
    title: "Report",
    path: "#",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
 
  // {
  //   title: "Organization Setup",
  //   path: "#",
  //   icon: <Icon icon="cil:history" hFlip={true} />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Integration",
  //   path: "#",
  //   icon: <Icon icon="cil:history" hFlip={true} />,
  //   cName: "nav-text"
  // },
 
];
