import React from "react";
//logo



import dashboardIcon from '@iconify/icons-akar-icons/dashboard';
import { Icon } from '@iconify/react';

// export const SidebarData = [
//   {
//     title: "Dashboard",
//     path: "/dashboard",
//      icon: <Icon icon={dashboardIcon} />,

//     cName: "nav-text"
//   },
//   {
//     title: "Users",
//     path: "/layout",
//     icon: <Icon icon="ph:users-bold" />,
//     cName: "nav-text"
//   },
//   {
//     title: "Team",
//     path: "/TeamPage",
//     icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
//     cName: "nav-text"
//   },
//   {
//     title: "Places",
//     path: "#",
//     icon: <Icon icon="carbon:location-company" hFlip={true} />,
//     cName: "nav-text"
//   },
//   {
//     title: "Event-history",
//     path: "/EventPage",
//     icon: <Icon icon="cil:history" hFlip={true} />,
//     cName: "nav-text"
//   },
 
//   {
//     title: "Report",
//     path: "#",
//     icon: <Icon icon="cil:history" hFlip={true} />,

//     cName: "nav-text"
//   },
//   {
//     title: "Organization set up",
//     path: "#",
//     icon: <Icon icon="cil:history" hFlip={true} />,
//     cName: "nav-text",
//     iconClosed:<Icon icon="eva:arrow-ios-back-fill" rotate={2} />,
//     iconOpened: <Icon icon="eva:arrow-ios-back-fill" rotate={2} />,
//     subnav: [
//       {
//         title: "Organogram",
//         path: "#",
//         icon: <Icon icon="cil:history" hFlip={true} />,
//         cName: "nav-text"
//       },
//       {
//         title: "Add device",
//         path: "#",
//         icon: <Icon icon="cil:history" hFlip={true} />,
//         cName: "nav-text"
//       }
//     ]
//   },
//   {
//     title: "integration",
//     path: "#",
//     icon: <Icon icon="cil:history" hFlip={true} />,
//     cName: "nav-text"
//   },
 
  
// ];
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon:  <Icon icon={dashboardIcon} />,
    cName: "nav-text"
    
    

   
  },
  {
    title: 'Users',
    path: '/layout',
    icon:  <Icon icon="ph:users-bold" />,
    cName: "nav-text"
   

    
  },
  {
    title: 'Places',
    path: '#',
    icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: 'Team',
    path: '/ManagerTeampage',
    icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
    cName: "nav-text"
  },
  {
    title: "Event-history",
    path: "/EventPage",
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  },
 
  {
    title: 'Organization setup',
    path: '/Organization',
    icon: <Icon icon="fluent:people-team-20-regular" hFlip={true} />,
    cName: "nav-text",
    iconClosed: <Icon icon="eva:arrow-ios-back-fill" rotate={2} />,
    iconOpened: <Icon icon="eva:arrow-ios-back-fill" rotate={3} />,

    subNav: [
      {
        title: 'Credentials',
        path: '/Credential',
        icon:  <Icon icon="ph:users-bold" />
      },
      {
        title: 'Billings',
        path: '/billing',
        icon:  <Icon icon="ph:users-bold" />
      },
      {
        title: 'Add device',
        path: '#',
        icon:  <Icon icon="ph:users-bold" />
      },
      {
        title: 'Permission',
        path: '#',
        icon: <Icon icon="ph:users-bold" />
      },
      {
        title: 'Payment History',
        path: '/History',
        icon: <Icon icon="ph:users-bold" />
      },
      {
        title: 'Organogram',
        path: '#',
        icon: <Icon icon="ph:users-bold" />
      },
      {
        title: 'Setting',
        path: '#',
        icon: <Icon icon="ph:users-bold" />
      }
    ]
  },
  {
    title: 'Integration',
    path: '#',
    icon: <Icon icon="cil:history" hFlip={true} />,
    cName: "nav-text"
  }
];

