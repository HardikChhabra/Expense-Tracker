'use client'
import React, { useContext, useEffect, useState } from 'react'
import { username } from '../context/context'
import TimePeriodList from './TimePeriodList';
import CreditCard from './CreditCard';
import DashboardTile from './DashboardTile';
import ActionButtons from './ActionButtons';
import TransactionArea from './TransactionArea';
import AnalyticsContainer from './AnalyticsContainer';

const PrimaryDashboard = () => {
    const usernameRef = useContext(username);
    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    useEffect(() => {
        setBalance(5000);
        setExpense(1000);
        setIncome(6000);
    })
    return (
        <>
            <div className='flex flex-row pt-8 justify-between px-32'>
                <div className='text-3xl font-medium text-grey-900'>
                    Hello, {usernameRef}!
                </div>
                <TimePeriodList />
            </div>
            <div className='my-16 flex flex-row mx-32'>
                <CreditCard username={usernameRef} balance={balance} income={income} expense={expense} />
                <div className='flex flex-col'>
                    <div>
                        <DashboardTile text={'Balance'} value={5000} percentage={20.5} color={"blue"} />
                        <DashboardTile text={'Expense'} value={1000} percentage={2.5} color={"red"} />
                        <DashboardTile text={'Income'} value={6000} percentage={50.0} color={"green"} />
                    </div>
                    <div className='flex flex-row'>
                        <ActionButtons primaryText={"Add Income"} descText={"Add an income manually"} symbol={'/add.gif'} />
                        <ActionButtons primaryText={"Add Expense"} descText={"Add an expense"} symbol={'/minus.gif'} />
                        <ActionButtons primaryText={"Transfer"} descText={"Add a transfer"} symbol={'/transfer.gif'} />
                    </div>
                </div>
            </div>
            <div className='mx-32 mb-32 flex flex-row justify-center'>
                <div className='mx-2'><AnalyticsContainer/></div>
                <div className='mx-2'><TransactionArea /></div>
            </div>
        </>
    )
}

export default PrimaryDashboard