import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

export default function Invoice() {
    
  return (
    <div className="bg-white border rounded-2xl mt-10 p-10">
      <div className="flex items-center justify-around">
        <div className="text-base text-[var(--colorDark)]">
          <p className="font-semibold">Invoice From :</p>
          <div className="mt-3">
            <h3 className="font-bold">Virginia Walker</h3>
            <p className="text-sm font-semibold">9694 Krajcik Locks Suite 635</p>
          </div>
        </div>

        <div className="text-base text-[var(--colorDark)]">
          <p className="font-semibold">Invoice To :</p>
          <div className="mt-3">
            <h3 className="font-bold">Austin Miller</h3>
            <p className="text-sm font-semibold">Brookview</p>
          </div>
        </div>

        <div className="text-base font-semibold">
            <p>Invoice Date : 12 Nov 2019</p>
            <p>Due Date : 25 Dec 2019</p>
        </div>
      </div>

      <Table>
        <TableHeader>
            
            <TableRow className="bg-(--colorWhite) rounded-2xl">
                <TableHead className="text-center">
Serial
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell className="text-center">
1
                </TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>

        <h2 className="text-end text-base font-extrabold">Total = $4680</h2>
        </TableFooter>
      </Table>
    </div>
  );
}
