"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";

interface productType {
  name: string;
  image: string;
  totalAmount: string;
  status: string;
  location: string;
  piece: number;
  date_time: string;
}

export function Details() {
  const [products, setData] = useState([]);

  useEffect(() => {
    fetch("/fake.json")
      .then((Response) => Response.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <Table>
      <TableHeader className="text-base bg-[#F1F4F9] p-5 rounded-2xl">
        <TableRow >
          <TableHead >Product Name</TableHead>
          <TableHead className="text-center">Location</TableHead>
          <TableHead className="text-center">Date - Time</TableHead>
          <TableHead className="text-center">Piece</TableHead>
          <TableHead className="text-center">Amount</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: productType, i: number) => {
          const {
            name,
            image,
            location,
            status,
            date_time,
            totalAmount,
            piece,
          } = product;
          return (
            <TableRow key={i} className="text-base">
              <TableCell className="font-medium  text-center"><Image src={image} alt={name} width={36} height={36} />{name}</TableCell>
              <TableCell className="text-center">{location}</TableCell>
              <TableCell className="text-center">{date_time}</TableCell>
              <TableCell className="text-center">{piece}</TableCell>
              <TableCell className="text-center">{totalAmount}</TableCell>
              <TableCell className="text-center" > <span className={`text-center text-white py-2 px-5 w-[100px] font-semibold ${status=='Delivered'?'bg-green-500': status == "Pending"?'bg-amber-400': 'bg-red-500'} w-fit rounded-2xl`}>{status}</span> </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
