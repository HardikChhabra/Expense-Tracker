"use client";
import React from "react";
import TimePeriodList from "../components/TimePeriodList";
import TransactionArea from "../components/TransactionArea";

const page = () => {
  return (
    <>
      <div className="flex flex-row mt-8 justify-between px-32">
        <div className="text-3xl font-medium text-grey-900">Transactions</div>
        <TimePeriodList />
      </div>
      <div className="my-16 mx-32">
        <TransactionArea />
      </div>
    </>
  );
};

export default page;
