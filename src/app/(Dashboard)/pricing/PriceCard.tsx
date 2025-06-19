import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function PriceCard() {
  return (
    <>
      <Card className="px-5 py-10 w-fit max-w-sm">
        <CardHeader className="border-b text-center">
          <CardTitle className="text-2xl">Basic</CardTitle>
          <CardDescription className="text-base">
            Monthly Charge
            <p className="text-5xl font-extrabold text-[var(--colorSkyBlue)] mt-4">
              $14.99
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="border-b text-center text-lg grid gap-5 pb-8">
          <p>Free Setup</p>
          <p>Bandwidth Limit 10GB</p>
          <p>20 User Connection</p>
          <p>Analytics Report</p>
          <p>Public API Access</p>
          <p>Plugins Intregation</p>
          <p>Custom Content Management</p>
        </CardContent>
        <CardFooter className="grid gap-5 mt-2 items-center justify-items-center">
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-full w-fit text-[var(--colorSkyBlue)] border-[var(--colorSkyBlue)] hover:bg-[var(--colorSkyBlue)] hover:text-white"
          >
            Get Started
          </Button>
          <Link href={""}>Start Your 30 Days Free Trail</Link>
        </CardFooter>
      </Card>
    </>
  );
}
