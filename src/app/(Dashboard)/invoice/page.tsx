import PageTitle from "@/components/ui/page-title";
import React from "react";
import Invoice from "./invoice";
import InvoiceTable from "./invoiceTable";
import { Button } from "@/components/ui/button";
import { Printer, Send } from "lucide-react";

export default function Page() {
  return (
    <div>
      <PageTitle> Invoice</PageTitle>
      <main className="bg-white border rounded-2xl mt-10 p-10">
        <Invoice />
        <div className="mt-16">

        <InvoiceTable />
        </div>

        <div className="flex gap-5 items-center justify-end mt-20">
          <Button variant={"outline"} size={"lg"}>
            <Printer />
          </Button>
          <Button variant={"default"} size={"lg"} className="bg-(--colorSkyBlue)">
            Send
            <Send/>
          </Button>
        </div>
      </main>
    </div>
  );
}
