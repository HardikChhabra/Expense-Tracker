'use client'
import React, { useEffect, useState } from 'react'
import AnalyticTile from './AnalyticTile';
import AnalyticChart from './AnalyticChart';
import {listVal} from '../data';

const AnalyticsContainer = () => {
    const [objs, setObjs] = useState([]);

    useEffect(() => {
        setObjs(listVal);
    },[])
    return (
        <div className='inline-flex flex-col border p-4 rounded-lg min-w-[24vw] min-h-[32vh] justify-between'>
            <div className='justify-center items-center'>
                <div>
                    <h6 className='text-sm font-bold text-gray-600'>Expenses by Category</h6>
                    <AnalyticChart list={objs}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <ul className='flex flex-col'>
                    {objs ? objs.map((obj) => ( <><AnalyticTile name={obj.name} per={obj.per} key={obj.id} /><hr key={obj.id} className="w-48 h-[2px] ml-5 mb-1 bg-gray-200 border-0 rounded" /></> )) : "No Analytics to show"}
                </ul>
            </div>
        </div>
    )
}

export default AnalyticsContainer