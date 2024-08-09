import React, { useEffect, useState } from 'react'
import TransactionTile from './TransactionTile';
import { transactionsList } from '../data';

const TransactionArea = () => {
  const [transactions, setTransactions] = useState([]);

  const sortWithDateDesc = () => {
    setTransactions(transactions.toSorted((a, b) => { return (b.date > a.date ? 1 : (a.date === b.date ? 0 : -1)) }));
  }
  const sortWithDateAsc = () => {
    setTransactions(transactions.toSorted((a, b) => { return (a.date > b.date ? 1 : (a.date === b.date ? 0 : -1)) }));
  }

  const sortWithAmountDesc = () => {
    setTransactions(transactions.toSorted((a, b) => b.amount - a.amount));
  }
  const sortWithAmountAsc = () => {
    setTransactions(transactions.toSorted((a, b) => a.amount - b.amount));
  }

  const sortWithTypeExpensesFirst = () => {
    setTransactions(transactions.toSorted((a, b) => { return (a.type > b.type ? 1 : (a.type === b.type ? 0 : -1)) }))
  }
  const sortWithTypeIncomeFirst = () => {
    setTransactions(transactions.toSorted((a, b) => { return (b.type > a.type ? 1 : (b.type === a.type ? 0 : -1)) }))
  }

  useEffect(() => {
    setTransactions(transactionsList);
  }, [])
  return (
    <div className='border rounded-lg'>
      {/* header */}
      <div className='inline-flex flex-col p-4'>
        <h5 className='text-lg font-bold'>Last Transactions</h5>
        <p className='text-sm font-bold text-gray-500'>Check your last transactions</p>
      </div>

      {/* information row with sorting buttons */}
      <div className='border grid grid-cols-12 gap-4 py-2 px-4'>

        {/* Description item */}
        <h6 className='col-span-5 text-sm font-bold text-gray-500'>Description</h6>

        {/* Type item */}
        <div className='col-span-2 text-sm font-bold text-gray-500 flex flex-col'>

          {/* heading */}
          <h6 className='col-span-2 text-sm font-bold text-gray-500'>Type</h6>

          {/* icons */}
          <span className='flex flex-row'>
            <img src="/arrow_up.png" alt="asc" className='h-4' onClick={sortWithTypeExpensesFirst} />
            <img src="/arrow_down.png" alt="desc" className='h-4' onClick={sortWithTypeIncomeFirst}/>
          </span>
        </div>

        {/* Date item */}
        <div className='col-span-2 text-sm font-bold text-gray-500 flex flex-col'>

          {/* heading */}
          <h6 className='col-span-2 text-sm font-bold text-gray-500'>Date</h6>

          {/* icons */}
          <span className='flex flex-row'>
            <img src="/arrow_up.png" alt="asc" className='h-4' onClick={sortWithDateDesc}/>
            <img src="/arrow_down.png" alt="desc" className='h-4' onClick={sortWithDateAsc}/>
          </span>
        </div>

        {/* Amount item */}
        <div className='col-span-2 text-sm font-bold text-gray-500 flex flex-col'>

          {/* heading */}
          <h6 className='col-span-2 text-sm font-bold text-gray-500'>Amount</h6>

          {/* icons */}
          <span className='flex flex-row'>
            <img src="/arrow_up.png" alt="asc" className='h-4' onClick={sortWithAmountDesc} />
            <img src="/arrow_down.png" alt="desc" className='h-4' onClick={sortWithAmountAsc} />
          </span>
        </div>

        {/* Edit and delete icons item */}
        <h6 className='col-span-1 text-sm font-bold text-gray-500'>Actions</h6>
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