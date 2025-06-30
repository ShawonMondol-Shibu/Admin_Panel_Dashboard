import React from "react";

export default function Invoice() {
  return (
    <>
      <div className="flex gap-5 items-center justify-around overflow-x-auto">
        <div className="text-base text-[var(--colorDark)]">
          <p className="font-semibold">Invoice From :</p>
          <div className="mt-3">
            <h3 className="font-bold">Virginia Walker</h3>
            <p className="text-sm font-semibold">
              9694 Krajcik Locks Suite 635
            </p>
          </div>
        </div>

        <div className="text-base text-[var(--colorDark)]">
          <p className="font-semibold">Invoice To :</p>
          <div className="mt-3">
            <h3 className="font-bold">Austin Miller</h3>
            <p className="text-sm font-semibold">Brookview</p>
          </div>
        </div>

        <div className="text-base font-semibold">
          <p>Invoice Date : 12 Nov 2019</p>
          <p>Due Date : 25 Dec 2019</p>
        </div>
      </div>
    </>
  );
}
