import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const satisfactionRates = {
  accessMap: 4.5,
  audiom: 4.2,
  walkshed: 4.3,
};

const categories = ['AccessMap', 'Audiom', 'Walkshed'];
const actualValues = [satisfactionRates.accessMap, satisfactionRates.audiom, satisfactionRates.walkshed];
const remainingValues = [5 - satisfactionRates.accessMap, 5 - satisfactionRates.audiom, 5 - satisfactionRates.walkshed];

const data = {
  labels: categories, 
  datasets: [
    {
      label: 'Satisfaction', 
      data: actualValues, 
      backgroundColor: '#3f51b5', 
      barThickness: 40,
    },
    {
      label: '', 
      data: remainingValues, 
      backgroundColor: 'lightgrey', 
      barThickness: 40,
    },
  ],
};

const options = {
  indexAxis: 'y', 
  scales: {
    x: {
      stacked: true, 
      min: 0,
      max: 5,
      grid: {
        display: false, 
      },
    },
    y: {
      stacked: true, 
      ticks: {
        font: {
          size: 14, 
        },
      },
      grid: {
        display: false, 
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false, 
    },
  },
};

export default function SatisfactionChart() {
  return <Bar data={data} options={options} />;
}
