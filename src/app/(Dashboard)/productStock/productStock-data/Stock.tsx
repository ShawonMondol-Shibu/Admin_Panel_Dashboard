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
import { Circle, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Stock() {
  return (
    <div>
      <div className="border rounded-2xl bg-white">
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
                  <TableCell className="text-center">
                    <Image
                      src={image}
                      alt={name}
                      width={60}
                      height={60}
                      className="rounded-xl"
                    />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{piece}</TableCell>
                  <TableCell className="flex gap-2 items-center justify-items-center m-auto">
                    {colors.map((color: string, _: number) => (
                      <Circle key={_} color={color} fill={color} size={20} />
                    ))}
                  </TableCell>

                  <TableCell>
                    <span className="flex items-center">
                      <Button variant={"outline"} size={"icon"}>
                        <Edit size={50} />
                      </Button>
                      <Button variant={"outline"} size={"icon"}>
                        <Trash2 size={16} />
                      </Button>
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <Pagination className="bg-white w-fit  border rounded-2xl mt-10 float-end">
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
    </div>
  );
}
