import * as React from 'react';
import Dashboard from "./views/dashboard/Dashboard";
import { FaGripHorizontal, FaUserAstronaut, FaTable, FaNewspaper, FaFonticonsFi, FaBell, FaRocket } from 'react-icons/fa';
import Example from './components/Charts/Example';

const sidebarRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaGripHorizontal size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: <FaUserAstronaut size="25px"/>,
    component: Example,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: <FaTable size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: <FaNewspaper size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: <FaFonticonsFi size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: <FaBell size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: <FaRocket size="25px"/>,
    component: Dashboard,
    layout: "/admin"
  }
];

export default sidebarRoutes;
