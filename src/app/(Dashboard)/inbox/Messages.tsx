import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdMoveToInbox } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import React from "react";
import { Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function Messages() {
  const sectionIcons = [MdMoveToInbox, RiErrorWarningFill, IoMdTrash];
  return (
    <div>
      {/* Messages Header Section */}
      <div className="flex justify-between items-center p-6">
        <span className="flex items-center w-fit bg-[var(--colorWhite)] px-4 border rounded-2xl">
          <Search size={16} />
          <Input
            type="search"
            placeholder="Search mail"
            className="outline-none border-none shadow-none focus-within:outline-0 focus:outline-0"
          />
        </span>

        <span className="flex items-center w-fit  border rounded-xl">
          {sectionIcons.map((Icon, _) => (
            <Button
              key={_}
              variant={"secondary"}
              size={"icon"}
              className=""
              asChild
            >
              <Icon size={16} className="" />
            </Button>
          ))}
        </span>
      </div>

      {/* Messages Display Section */}
      <div className=" overflow-hidden">
        {Array.from({length: 10}).map((item, i: number) => (
          <div
            key={i}
            className="flex items-center justify-center gap-10 w-full p-5 border-b "
          >
            <div className="flex items-center gap-5">
              <Checkbox />
              <Star size={20} />
            </div>
            <span className="text-sm font-bold">Jullu Jalal</span>
            <span className="flex flex-1/2 items-center gap-4 text-sm font-semibold">
              <Badge className="text-xs font-semibold text-[var(--badgePrimary)] bg-[var(--badgePrimary-500)]">Primary</Badge>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span> 

            <span>8:38AM</span>
          </div>
        ))}
      </div>
    </div>
  );
}
