import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiMiniUsers } from "react-icons/hi2";
import React from "react";
import { TrendingUp } from "lucide-react";

export default function Dashboard() {
  const cardData = [{},{},{},{},];
  return (
    <div className="h-dvh w-full">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="mt-10 flex items-center justify-between">
        {cardData.map((card, i)=>(
 <Card key={i}  className="w-72">
          <CardHeader className="relative">
            <CardTitle className="text-lg text-[var(--ring)]">
              Total User
            </CardTitle>
            <CardDescription className="bg-[#8280ff4b] w-fit p-4 rounded-3xl absolute top-0 right-5">
              <HiMiniUsers color="#8280FF" size={32} />
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">40,689</CardContent>
          <CardFooter className="text-lg font-semibold flex items-center gap-1">
            <span className="flex items-center gap-2 text-[#00B69B]">
              <TrendingUp />
              8.5%
            </span>{" "}
            Up from yesterday
          </CardFooter>
        </Card>
        ))}
       
      </div>
    </div>
  );
}
