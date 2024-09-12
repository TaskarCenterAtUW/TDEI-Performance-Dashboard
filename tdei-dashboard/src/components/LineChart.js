import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomLineChart = ({ data }) => {
  const months = Object.keys(data); 
  const downloadCounts = Object.values(data);  
  const chartData = {
    labels: months,  
    datasets: [
      {
        label: 'Downloads per Month',
        data: downloadCounts,  
        borderColor: '#873EF2',  
        backgroundColor: '#873EF2', 
        borderWidth: 2,
        pointBackgroundColor: '#873EF2',  
        tension: 0.4,  
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display : false
      },
      title: {
        display: true,
        text: 'Monthly Downloads',
      },
    },
    scales: {
      x: {
        grid:{
            display: false, 
        },
        title: {
          display: true,
          text: 'Months',
        },
        
      },
      y: {
        title: {
          display: true,
          text: 'Downloads',
        },
        beginAtZero: true, 
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
export default CustomLineChart;