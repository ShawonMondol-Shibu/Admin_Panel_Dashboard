"use client"

import * as React from "react"
import { format } from "date-fns"
import { ChevronDown } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger className="data-[empty=true]:text-muted-foreground w-fit flex gap-2 justify-start text-left font-bold">
        {/* <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-fit justify-start text-left font-normal"
        > */}
          <span>Date</span>
          {date ? format(date, "PPP") : <span> <ChevronDown/> </span>}
        {/* </Button> */}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}