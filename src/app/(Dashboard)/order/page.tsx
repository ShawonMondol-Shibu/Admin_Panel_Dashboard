"use client";
import { Funnel } from "lucide-react";
import React from "react";
import OrderType from "./OrderType";
import OrderStatus from "./OrderStatus";
import ResetFilter from "./ResetFilter";
import { OrderList } from "./order-data/List";
import { columns } from "./order-data/columns";
import { users } from "./order-data/data";
import { DatePicker } from "@/components/shared/DatePicker";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PageTitle from "@/components/ui/page-title";

export default function Page() {
  return (
    <>
      <PageTitle> Order List</PageTitle>
      <div className="bg-white w-fit px-4 py-2 mt-10 flex gap-5 items-center text-sm font-bold rounded-2xl  border">
        <span className="flex gap-5 items-center text-sm font-bold">
          <Funnel size={16} />
          Filter By
        </span>
        <DatePicker />
        <OrderType />
        <OrderStatus />
        <ResetFilter />
      </div>

      <OrderList columns={columns} data={users} />

      <Pagination className="w-fit bg-white rounded-2xl mt-10 float-right">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
