"use client";
import React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const random = Math.floor(Math.random()*1000)

const productSales = [
  { name: '5k', product1: random+50 },
  { name: "10k", product1: random-50 },
  { name: "15k", product1: random+50 },
  { name: "20k", product1: random-20},
  { name: "25k", product1: random+50},
  { name: "30k", product1: random-20 },
  { name: "35k", product1: random+30},
  { name: "40k", product1: random-50},
  { name: "45k", product1: random+90},
  { name: "50k", product1: random-40},
  { name: "55k", product1: random+20},
  { name: "60k", product1: random},
  
]
export default function Chart() {
  return (
    <ResponsiveContainer width={'100%'} height={444}>
      <LineChart width={600} height={500} data={productSales} margin={{right:30}}>
        <XAxis dataKey={'name'}/>
        <YAxis />
        <CartesianGrid/>
        <Line dataKey={"product1"}  stroke="#4379EE" fill="#4379Ed50"/>
      <Tooltip/>
      <Legend/>
      </LineChart>
    </ResponsiveContainer>
  );
}
