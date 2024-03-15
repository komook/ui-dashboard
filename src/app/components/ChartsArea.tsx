import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


type Props = {}


export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [30, 33, 22, 32, 32, 21, 32, 21, 21, 14, 24, 12],
      borderColor: '#08bfbf',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
    },
    {
      fill: true,
      label: '',
      data: [60, 32, 21, 21, 14, 33, 22, 32, 32, 21, 32, 24],
      borderColor: '#08bfbf',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
    }
  ],
};
export default function Charts({ }: Props) {
  return (
    <div>
      <Line width={883} height={300} options={options} data={data} />
    </div>
  )
}