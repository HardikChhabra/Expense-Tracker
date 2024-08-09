import React from 'react'
import CreditCard from './CreditCard'


const AddTransactionForm = ({ handleSubmit, username, balance, expense, income }) => {
    return (
        <div className='relative p-4 w-full max-w-md max-h-full'>
            <div className='relative bg-white rounded-lg shadow'>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <CreditCard username={username} balance={balance} expense={expense} income={income} />
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Create New Transaction
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    )
}

export default AddTransactionForm