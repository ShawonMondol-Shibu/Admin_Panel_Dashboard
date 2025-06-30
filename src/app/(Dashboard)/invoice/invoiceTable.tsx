import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface dataType {
  id: number;
  description: string;
  quantity: number;
  baseCost: string;
  totalCost: string;
}

export default function InvoiceTable() {
  const heads: string[] = [
    "Serial",
    "Description",
    "quantity",
    "Base Cost",
    "Total Cost",
  ];
  const data: dataType[] = [
    {
      id: 1,
      description: "Children Toy",
      quantity: 2,
      baseCost: "$20",
      totalCost: "$80",
    },
    {
      id: 2,
      description: "Mackup",
      quantity: 2,
      baseCost: "$50",
      totalCost: "$100",
    },
    {
      id: 3,
      description: "Asus Laptop",
      quantity: 5,
      baseCost: "$100",
      totalCost: "$500",
    },
    {
      id: 4,
      description: "Iphone X",
      quantity: 4,
      baseCost: "$1000",
      totalCost: "$4000",
    },
  ];
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-(--colorWhite) rounded-2xl">
            {heads.map((head: string, _: number) => (
              <TableHead key={_} className="text-center">
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: dataType) => (
            <TableRow key={item.id} className="py-10">
              <TableCell className="text-center py-5 w-[100px]">{item.id}</TableCell>
              <TableCell className="text-center">{item.description}</TableCell>
              <TableCell className="text-center">{item.quantity}</TableCell>
              <TableCell className="text-center">{item.baseCost}</TableCell>
              <TableCell className="text-center">{item.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2 className="float-right text-base font-extrabold">Total = $4680</h2>
    </>
  );
}
