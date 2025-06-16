"use client";
import {
  Banknote,
  CalendarDays,
  ChartNoAxesColumn,
  Clipboard,
  Contact,
  Gauge,
  Gift,
  Grid2X2,
  Grid3x3,
  Heart,
  ListChecks,
  MessagesSquare,
  Power,
  Rows3,
  Settings,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import Navbar from "./Navbar";

interface sidebarDataType {
  name: string;
  icon: React.ElementType;
}
interface pagesType {
  name: string;
  icon: React.ElementType;
}

export default function Sidebar() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  const sidebarData = [
    { name: "Dashboard", icon: Gauge },
    { name: "Products", icon: Grid2X2 },
    { name: "Favorites", icon: Heart },
    { name: "Inbox", icon: MessagesSquare },
    { name: "Order Lists", icon: ListChecks },
    { name: "Product Stock", icon: Rows3 },
  ];

  const pagesData = [
    { name: "Pricing", icon: Gift },
    { name: "Calender", icon: CalendarDays },
    { name: "To-Do", icon: Clipboard },
    { name: "Contact", icon: Contact },
    { name: "Invoice", icon: Banknote },
    { name: "Ui Elements", icon: ChartNoAxesColumn },
    { name: "Team", icon: UserRound },
    { name: "Table", icon: Grid3x3 },
  ];
  return (
    <>
      <Navbar pl={isOpen ? "pl-0" : "pl-80"} />
      <div
        className={`bg-white py-5 ${
          isOpen ? "px-0" : "px-5"
        } h-dvh w-fit fixed top-0 left-0`}
      >
        <h2 className="text-xl font-extrabold text-center text-[var(--colorSkyBlue)] m-auto w-full flex items-center justify-center gap-10">
          <span style={{ display: isOpen ? "none" : "block" }}>
            Dash
            <span className="text-black">Stack</span>
          </span>
          <RiMenu4Fill size={30} color="#000000" onClick={toggle} />
        </h2>
        <div className="my-7">
          {sidebarData.map((sidebar: sidebarDataType, i: number) => (
            <Link
              key={i}
              href={"/"}
              className={`flex items-start gap-4 px-6 py-3 ${
                isOpen ? "w-fit" : "w-48"
              } rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear`}
            >
              <sidebar.icon />
              <span style={{ display: isOpen ? "none" : "block" }}>
                {sidebar.name}
              </span>
            </Link>
          ))}
        </div>

        <hr />

        <div className="">
          <p className="px-5 py-2 text-gray-500">Pages</p>
          {pagesData.map((pages: pagesType, i: number) => (
            <Link
              key={i}
              href={"#"}
              className={`flex items-start gap-2 px-6 py-3 ${
                isOpen ? "w-fit" : "w-48"
              } rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear`}
            >
              <pages.icon />
              <span style={{ display: isOpen ? "none" : "inline" }}>
                {pages.name}
              </span>
            </Link>
          ))}
        </div>

        <hr />

        <div className=" py-2 m-auto">
          <Link
            href={"#"}
            className={`flex items-start gap-2 px-6 py-3 ${
              isOpen ? "w-fit" : "w-48"
            } rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear`}
          >
            <Settings />
            <span style={{ display: isOpen ? "none" : "inline" }}>
              Settings
            </span>
          </Link>

          <Link
            href={"#"}
            className={`flex items-start gap-2 px-6 py-3 ${
              isOpen ? "w-fit" : "w-48"
            } rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear`}
          >
            <Power />
            <span style={{ display: isOpen ? "none" : "inline" }}>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
}
