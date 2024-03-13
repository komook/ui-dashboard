/** @format */

import { IoMdPerson } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { FaCreditCard, FaFile, FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";

type SidebarItem = {
  title?: string;
  path?: string;
  defaultIcon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  nestedItems?: SidebarItem[];
  sectionTitle?: string;
};

export const ytSidebarDataset: SidebarItem[] = [
  {
    title: "Dashboard",
    path: "/",
    defaultIcon: <GoHomeFill />,
    activeIcon: <GoHomeFill />
  },
  {
    title: "Tables",
    path: "/tables",
    defaultIcon: <FaChartSimple />,
    activeIcon: <FaChartSimple />
  },
  {
    title: "Biling",
    path: "/biling",
    defaultIcon: <FaCreditCard />,
    activeIcon: <FaCreditCard />
  },
  {
    sectionTitle: "ACCOUNT PAGES",
  },
  {
    title: "Profile",
    path: "/profile",
    defaultIcon: <IoMdPerson />,
    activeIcon: <IoMdPerson />
  },
  {
    title: "Sign in",
    path: "/signin",
    defaultIcon: <FaFile />,
    activeIcon: <FaFile />
  },
  {
    title: "Sign Up",
    path: "/signup",
    defaultIcon: <IoRocketSharp />,
    activeIcon: <IoRocketSharp />
  },
];