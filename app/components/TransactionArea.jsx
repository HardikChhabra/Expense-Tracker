import React, { useEffect, useState } from 'react'
import TransactionTile from './TransactionTile';

const TransactionArea = () => {
  const [transactions, setTransactions] = useState([]);

  const transactionsList = [
    {
      desc: "Snack",
      type: "Expense",
      date: "03 Aug 2024",
      amount: -100,
      id: 1
    },
    {
      desc: "Travel",
      type: "Expense",
      date: "31 Jul 2024",
      amount: -10,
      id:2
    },
    {
      desc: "Entertainment",
      type: "Expense",
      date: "31 Jul 2024",
      amount: -600,
      id:3
    },
    {
      desc: "Snack",
      type: "Expense",
      date: "24 Jul 2024",
      amount: -40,
      id:4
    },
    {
      desc: "Pocket Money",
      type: "Income",
      date: "02 Jul 2024",
      amount: 3000,
      id:5
    },
  ]
  useEffect (()=> {
    setTransactions(transactionsList);
  }, [])
  return (
    <div className='border rounded-lg'>
        <div className='inline-flex flex-col p-4'>
            <h5 className='text-lg font-bold'>Last Transactions</h5>
            <p className='text-sm font-bold text-gray-500'>Check your last transactions</p>
        </div>
        <div className='border grid grid-cols-12 gap-4 py-2 px-4'>
            <h6 className='col-span-5 text-sm font-bold text-gray-500'>Description</h6>
            <h6 className='col-span-2 text-sm font-bold text-gray-500'>Type</h6>
            <h6 className='col-span-2 text-sm font-bold text-gray-500'>Date</h6>
            <h6 className='col-span-2 text-sm font-bold text-gray-500'>Amount</h6>
            <h6 className='col-span-1 text-sm font-bold text-gray-500'>Icons</h6>
        </div>
        <ul>
          {
            transactions && transactions.map((transaction) => (<TransactionTile key={transaction.id} desc={transaction.desc} type={transaction.type} date={transaction.date} amount={transaction.amount} />))
          }
        </ul>
    </div>
  )
}

export default TransactionArea