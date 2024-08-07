import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const AnalyticChart = ({ list }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const analyticChartRef = chartRef.current.getContext('2d');

        const labels = list.map((item) => item.name);
        const perData = list.map((item) => item.per);
        const bgColor = list.map((item) => item.color);

        chartInstance.current = new Chart(analyticChartRef, {
            type: 'doughnut',
            data: {
                labels,
                datasets: [
                    {
                        data: perData,
                        backgroundColor: bgColor
                    }
                ]


            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    })
    return (
        <div>
            <canvas ref={chartRef} className='' />
        </div>
    )
}

export default AnalyticChart