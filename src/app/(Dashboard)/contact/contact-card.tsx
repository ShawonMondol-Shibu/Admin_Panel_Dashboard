import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ContactCard() {
  return (
    <Card className="w-96">
      <Image
        src={"/images/jasonPrice.png"}
        width={360}
        height={278}
        alt="jasonPrice"
      />
      <CardHeader></CardHeader>
      <CardContent>
        <h2>Jason Price</h2>
        <p>kuhlman.jermey@yahoo.com</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} size={"lg"}>
          <Mail />
          <span>Message</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
