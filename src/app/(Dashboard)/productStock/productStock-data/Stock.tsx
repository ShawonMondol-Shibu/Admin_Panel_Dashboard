import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { headers, product, products } from "./data";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function Stock() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header: string, _: number) => (
              <TableHead key={_}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item: product) => {
            const { id, name, category, price, piece, colors, image } = item;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Image src={image} alt={name} width={60} height={60} className="rounded-xl"/>
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{piece}</TableCell>
                <TableCell className="flex gap-2 items-center justify-items-center m-auto">
                  {colors.map((color: string, _: number) => (
                    <Circle key={_} color={color} fill={color} size={20}/>
                  ))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
