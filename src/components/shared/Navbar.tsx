import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

interface languageType {
  name: string;
  icon: string;
}
export default function Navbar() {
  const languages = [
    { name: "English", icon: "🇬🇧" },
    { name: "Bangla", icon: "🇧🇩" },
    { name: "Japanese", icon: "🇯🇵" },
    { name: "Koriean", icon: "🇰🇷" },
    { name: "Spanish", icon: "🇪🇸" },
    { name: "Egypt", icon: "🇪🇬" },
  ];
  return (
    <nav className="flex items-center justify-between bg-white w-full">
      <div className="flex items-center border rounded-2xl px-2 w-[50%] bg-[#F5F6FA]">
        <Search color="gray" size={20} />
        <Input
          className="border-none outline-0 shadow-none "
          type="search"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <Image
            src={"/icons/icon.svg"}
            alt="this icon represent notifications"
            width={24}
            height={26}
          />
          <div className="bg-red-500 text-white text-[12px] rounded-full w-[18px] h-[18px] absolute -top-2 -right-1">
            <span className="flex items-center justify-center ">6</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select name="language" id="language">
            {languages.map((language: languageType, i: number) => (
              <option key={i} value="english">
                {language.icon} {language.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="w-[44px] h-[44px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <span className="text-sm">
            Moni Roy <br />
            <small>Admin</small>{" "}
          </span>
          <select
            name=""
            id=""
            className="border border-gray-300 rounded-full "
          ></select>
        </div>
      </div>
    </nav>
  );
}
