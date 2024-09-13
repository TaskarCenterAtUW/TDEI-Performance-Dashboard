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

export default function SatisfactionChart({ satisfactionRates }) {
  const categories = ['AccessMap', 'Audiom', 'Walkshed'];
  const actualValues = [
    satisfactionRates?.accessMap || 0, 
    satisfactionRates?.audiom || 0, 
    satisfactionRates?.walkshed || 0
  ];
  const remainingValues = [
    5 - (satisfactionRates?.accessMap || 0), 
    5 - (satisfactionRates?.audiom || 0), 
    5 - (satisfactionRates?.walkshed || 0)
  ];

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

  return <Bar data={data} options={options} />;
}
