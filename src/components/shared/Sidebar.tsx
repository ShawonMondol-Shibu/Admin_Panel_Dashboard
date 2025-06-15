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
import React from "react";

interface sidebarDataType {
  name: string;
  icon: React.ElementType;
}
interface pagesType {
  name: string;
  icon: React.ElementType;
}

export default function Sidebar() {
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
    <div className="bg-white py-5 h-dvh w-fit fixed top-0 left-0 mt-6">
      <div className="my-7 px-5">
        {sidebarData.map((sidebar: sidebarDataType, i: number) => (
          <Link
            key={i}
            href={"/"}
            className="flex items-start gap-2 px-6 py-3 w-48 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear"
          >
            <sidebar.icon />
            {sidebar.name}
          </Link>
        ))}
      </div>

      <hr />

      <div className="px-5">
        <p className="px-5 py-2 text-gray-500">Pages</p>
        {pagesData.map((pages: pagesType, i: number) => (
          <Link
            key={i}
            href={"#"}
            className="flex items-start gap-2 px-6 py-3 w-48 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear"
          >
            <pages.icon />
            {pages.name}
          </Link>
        ))}
      </div>

      <hr />

      <div className="px-5 py-2">
        <Link
          href={"#"}
          className="flex items-start gap-2 px-6 py-3 w-48 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear"
        >
          <Settings />
          Settings
        </Link>

        <Link
          href={"#"}
          className="flex items-start gap-2 px-6 py-3 w-48 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-linear"
        >
          <Power />
          Logout
        </Link>
      </div>
    </div>
  );
}
