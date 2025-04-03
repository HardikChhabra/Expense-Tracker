import React, { useEffect, useState } from "react";
import TransactionTile from "./TransactionTile";
import { transactionsList } from "../data";

const TransactionArea = () => {
  const [transactions, setTransactions] = useState([]);
  const [sortedField, setSortedField] = useState();
  const [isSortedAsc, setIsSortedAsc] = useState(false);

  const fieldAscDescHandler = (field, isAsc) => {
    switch (field) {
      case "date": {
        isAsc
          ? setTransactions(
              transactions.toSorted((a, b) => {
                return a.date > b.date ? 1 : a.date === b.date ? 0 : -1;
              })
            )
          : setTransactions(
              transactions.toSorted((a, b) => {
                return b.date > a.date ? 1 : a.date === b.date ? 0 : -1;
              })
            );
        break;
      }
      case "amount": {
        isAsc
          ? setTransactions(
              transactions.toSorted((a, b) => a.amount - b.amount)
            )
          : setTransactions(
              transactions.toSorted((a, b) => b.amount - a.amount)
            );
        break;
      }
      case "type": {
        isAsc
          ? setTransactions(
              transactions.toSorted((a, b) => {
                return b.type > a.type ? 1 : b.type === a.type ? 0 : -1;
              })
            )
          : setTransactions(
              transactions.toSorted((a, b) => {
                return a.type > b.type ? 1 : a.type === b.type ? 0 : -1;
              })
            );
        break;
      }
      default: {
        setTransactions(transactionsList);
      }
    }
  };

  useEffect(() => {
    fieldAscDescHandler(sortedField, isSortedAsc);
  }, [sortedField, isSortedAsc]);
  return (
    <div className="border rounded-lg">
      {/* header */}
      <div className="inline-flex flex-col p-4">
        <h5 className="text-lg font-bold">Last Transactions</h5>
        <p className="text-sm font-bold text-gray-500">
          Check your last transactions
        </p>
      </div>

      {/* information row with sorting buttons */}
      <div className="border grid grid-cols-12 gap-4 py-2 px-4">
        {/* Description item */}
        <h6 className="col-span-5 text-sm font-bold text-gray-500">
          Description
        </h6>

        {/* Type item */}
        <div className="col-span-2 text-sm font-bold text-gray-500 flex flex-col">
          {/* heading */}
          <h6
            onClick={() => {
              setSortedField("type");
              setIsSortedAsc(!isSortedAsc);
            }}
            className="col-span-2 cursor-pointer text-sm font-bold text-gray-500"
          >
            Type
          </h6>
        </div>

        {/* Date item */}
        <div className="col-span-2 text-sm font-bold text-gray-500 flex flex-col">
          {/* heading */}
          <h6
            onClick={() => {
              setSortedField("date");
              setIsSortedAsc(!isSortedAsc);
            }}
            className="col-span-2 cursor-pointer text-sm font-bold text-gray-500"
          >
            Date
          </h6>
        </div>

        {/* Amount item */}
        <div className="col-span-2 text-sm font-bold text-gray-500 flex flex-col">
          {/* heading */}
          <h6
            onClick={() => {
              setSortedField("amount");
              setIsSortedAsc(!isSortedAsc);
            }}
            className="col-span-2 cursor-pointer text-sm font-bold text-gray-500"
          >
            Amount
          </h6>
        </div>

        {/* Edit and delete icons item */}
        <h6 className="col-span-1 text-sm font-bold text-gray-500">Actions</h6>
      </div>
      <ul>
        {transactions &&
          transactions.map((transaction, index) => (
            <TransactionTile
              key={index}
              desc={transaction.desc}
              type={transaction.type}
              date={transaction.date}
              amount={transaction.amount}
            />
          ))}
      </ul>
    </div>
  );
};

export default TransactionArea;
