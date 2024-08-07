import React from 'react'

const TransactionTile = ({desc, type, date, amount, deleteFn, editFn}) => {
  return (
    <li className='border grid grid-cols-12 gap-4 py-2 px-4'>
        <div className='col-span-5 text-sm font-bold text-gray-900 text-wrap'>{desc}</div>
        <div className='col-span-2 text-xs font-semibold text-gray-600'>{type}</div>
        <div className='col-span-2 text-xs font-semibold text-gray-600'>{date}</div>
        {amount<0? (<div className='col-span-2 text-sm font-semibold text-red-500'>-${-amount}</div>):(<div className='col-span-2 text-sm font-semibold text-green-500'>${amount}</div>) }
        <div className='col-span-1'>
            <div className='grid grid-cols-2'>
            <img src="/edit.png" alt="edit" width={16} className='col-span-1' />
            <img src="/delete.png" alt="delete" width={16} className='col-span-1' />
            </div>
        </div>
    </li>
  )
}

export default TransactionTile