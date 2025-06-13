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
import { ChartLine, History, TrendingUp } from "lucide-react";
import { RiBox3Fill } from "react-icons/ri";

interface cardType {
  title: string;
  value: number;
  batch: React.ElementType;
  batchColor: string;
  icon: React.ElementType;
}

export default function Dashboard() {
  const cardData = [
    { title: " Total User", value: 40689, batch: HiMiniUsers, batchColor: '#8280FF', icon:TrendingUp, },
    { title: " Total Order", value: 40689, batch: RiBox3Fill, batchColor: '#FEC53D', icon:TrendingUp, },
    { title: " Total Sales", value: 40689, batch: ChartLine,batchColor:'#4AD991', icon:TrendingUp, },
    { title: " Total Pending", value: 40689, batch: History, batchColor: '#FF0000', icon:TrendingUp, },
  ];
  return (
    <div className="h-dvh w-full">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="mt-10 flex flex-wrap flex-1/2 items-center justify-between ">
        {cardData.map((card: cardType, i: number) => (
          <Card key={i} className="w-72">
            <CardHeader className="relative">
              <CardTitle className="text-lg text-[var(--ring)]">
                {card.title}
              </CardTitle>
              <CardDescription className="bg-[#8280ff4b] w-fit p-4 rounded-3xl absolute top-0 right-5">
                <card.batch color={card.batchColor} size={32} />
              </CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{card.value}</CardContent>
            <CardFooter className="text-lg font-semibold flex items-center gap-1">
              <span className="flex items-center gap-2 text-[#00B69B]">
                <card.icon />
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
