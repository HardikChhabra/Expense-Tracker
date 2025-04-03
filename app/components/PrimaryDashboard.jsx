"use client";
import React, { useContext, useEffect, useState } from "react";
import { username } from "../context/context";
import TimePeriodList from "./TimePeriodList";
import CreditCard from "./CreditCard";
import DashboardTile from "./DashboardTile";
import ActionButtons from "./ActionButtons";
import TransactionArea from "./TransactionArea";
import AnalyticsContainer from "./AnalyticsContainer";
import AddTransactionForm from "./AddTransactionForm";

const PrimaryDashboard = () => {
  const usernameRef = useContext(username);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleTransactionForm = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setBalance(5000);
    setExpense(1000);
    setIncome(6000);
  });
  return (
    <>
      <div className="flex flex-row mt-8 justify-between px-32">
        <div className="text-3xl font-medium text-grey-900">
          Hello, {usernameRef}!
        </div>
        <TimePeriodList />
      </div>
      <div className="my-16 flex flex-row mx-32">
        <CreditCard
          username={usernameRef}
          balance={balance}
          income={income}
          expense={expense}
        />
        <div className="flex flex-col">
          <div>
            <DashboardTile
              text={"Balance"}
              value={5000}
              percentage={20.5}
              primaryColor={"rgb(96 165 250)"}
              secondaryColor={"rgb(219 234 254)"}
            />
            <DashboardTile
              text={"Expense"}
              value={1000}
              percentage={2.5}
              primaryColor={"rgb(248 113 113)"}
              secondaryColor={"rgb(254 226 226)"}
            />
            <DashboardTile
              text={"Income"}
              value={6000}
              percentage={50.0}
              primaryColor={"rgb(74 222 128)"}
              secondaryColor={"rgb(220 252 231)"}
            />
          </div>
          <div
            className="flex flex-row"
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
          >
            <ActionButtons
              primaryText={"Add Income"}
              descText={"Add an income manually"}
              symbol={"/add.gif"}
            />
            <ActionButtons
              primaryText={"Add Expense"}
              descText={"Add an expense"}
              symbol={"/minus.gif"}
            />
            <ActionButtons
              primaryText={"Coming Soon"}
              descText={"Add a transfer"}
              symbol={"/transfer.gif"}
            />
          </div>
        </div>
      </div>
      <div className="mx-32 mb-32 flex flex-row justify-center">
        <div className="mx-4">
          <AnalyticsContainer />
        </div>
        <div className="mx-4">
          <TransactionArea />
        </div>
      </div>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <AddTransactionForm
          handleSubmit={() => {}}
          username={usernameRef}
          balance={balance}
          income={income}
        />
      </div>
    </>
  );
};

export default PrimaryDashboard;
