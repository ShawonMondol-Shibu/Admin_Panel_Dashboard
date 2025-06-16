"use client";
import React from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const random = Math.floor(Math.random() * 1000);

const productSales = [
  { name: "5k", product1: random + 50 },
  { name: "10k", product1: random - 50 },
  { name: "15k", product1: random + 50 },
  { name: "20k", product1: random - 20 },
  { name: "25k", product1: random + 50 },
  { name: "30k", product1: random - 20 },
  { name: "35k", product1: random + 30 },
  { name: "40k", product1: random - 50 },
  { name: "45k", product1: random + 90 },
  { name: "50k", product1: random - 40 },
  { name: "55k", product1: random + 20 },
  { name: "60k", product1: random },
];
export default function Chart() {
  return (
    <ResponsiveContainer width={"100%"} height={444}>
      <AreaChart
        width={600}
        height={500}
        data={productSales}
        margin={{ right: 30 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Area
          dataKey={"product1"}
          type={"monotone"}
          stroke="#4379EE"
          fill="#4379Ed50"
          // stackId={1}
        />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
}
