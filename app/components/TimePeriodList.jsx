'use client'
import React, {useState} from 'react';
import { time } from '../context/context';

const TimePeriodList = () => {
    const [selected, setSelected] = useState(0);


    const listVals = ["This Week", "This Month", "Last Month", "This Year", "Last 12 Months"];
    
    return (
        <ul className="flex-wrap items-center justify-center text-gray-900 border inline-flex rounded-lg">
            <li>
                <button className="px-2 hover:text-blue-500 border">This Week</button>
            </li>
            <li>
                <button className="px-2 hover:text-blue-500 border">This Month</button>
            </li>
            <li>
                <button className="px-2 hover:text-blue-500 border">Last Month</button>
            </li>
            <li>
                <button className="px-2 hover:text-blue-500 border">This Year</button>
            </li>
            <li>
                <button className="px-2 hover:text-blue-500 border">Last 12 Months</button>
            </li>
        </ul>
    )
}

export default TimePeriodList