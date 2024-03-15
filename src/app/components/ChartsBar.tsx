import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    
    elements: {
        bar: {
            borderRadius: 11,
            borderWidth: 0.6,
        },
        
    },
    
    scales: {

        y: {
            grid: {
                display: false,
            },
            beginAtZero: true,
            ticks: {
                color: '#ffffff',
            }
        }
    },

    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },

    },

};

const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [300, 500, 200, 100, 300, 200, 100, 100, 300, 200, 500, 200, 100, 200],
            backgroundColor: '#ffffff',
            xAlign: '15',
            borderColor: '#ffffff',
            usePointStyle: false,
            showShadow: true,
        },
    ],
};
type Props = {}

export default function ChartsBar({ }: Props) {
    return (
        <div className='pt-4  pr-6 pl-6 rounded-[15px] w-[620px] h-[222px] text-black bg-gradient-to-r from-[#19003f] to-[#040009]'>
            <Bar options={options} data={data} />
        </div>
    )
}