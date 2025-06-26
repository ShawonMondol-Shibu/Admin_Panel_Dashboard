import CalendarFilter from "@/components/ui/CalendarFilter";
import { ChevronDown, Funnel } from "lucide-react";
import React from "react";
import OrderType from "./OrderType";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import OrderStatus from "./OrderStatus";
import ResetFilter from "./ResetFilter";

export default function Page() {
  return (
    <>
    <div className="bg-white w-fit px-4 py-2 flex gap-5 items-center text-sm font-bold rounded-2xl  border">
      <span className="flex gap-5 items-center text-sm font-bold">
        <Funnel size={16} />
        Filter By
      </span>
      <Popover>
        <PopoverTrigger className="flex gap-5 items-center">Date <ChevronDown/> </PopoverTrigger>
        <PopoverContent>
          <CalendarFilter />
        </PopoverContent>
      </Popover>
      <OrderType />
      <OrderStatus/>
      <ResetFilter/>
    </div>


    </>
  );
}
