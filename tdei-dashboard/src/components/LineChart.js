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
        borderColor: 'rgba(75, 192, 192, 1)',  
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',  
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
        // grid:{
        //     display: false, 
        // },
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