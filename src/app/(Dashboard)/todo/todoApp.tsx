import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleX, Star } from "lucide-react";
import React from "react";

export default function TodoApp() {
  const texts: string[] = [
    "Meeting With CEO",
    "Pick up kids from school",
    "Shopping with Brother",
    "Review with HR",
    "Going to Dia’s School",
    "Check design files",
    "Update File",
  ];
  return (
    <div className="mt-10">
    
      {texts.map((text, _) => (
        <div
          key={_}
          className="flex items-center justify-between  bg-white hover:bg-(--colorSkyBlue) transition-all duration-300 ease-linear p-8 border rounded-xl group mb-8"
        >
          <span className="flex items-center gap-5 group-hover:text-white">
            <Checkbox className="border-2 size-8 group-checked:text-white rounded-md" />
            <p className="text-base font-semibold">{text}</p>
          </span>
          <span className="flex items-center gap-5 group-hover:text-white">
            <Button variant={"ghost"} size={"icon"}>
              <Star className="size-8" />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <CircleX className="size-8" />
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
}
