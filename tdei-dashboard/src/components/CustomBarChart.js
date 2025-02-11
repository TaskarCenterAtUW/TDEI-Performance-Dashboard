import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { monthAbbreviations } from '../utils/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomBarChart = ({ data }) => {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentDate = new Date();

  // To get last 6 months including the year label
  const getLastSixMonths = () => {
    let months = [];
    for (let i = 5; i >= 0; i--) {
      const pastDate = new Date(currentDate);
      pastDate.setMonth(currentDate.getMonth() - i);
      const monthName = allMonths[pastDate.getMonth()];
      const year = pastDate.getFullYear();
      months.push(`${monthAbbreviations[monthName]} ${year}`);
    }
    return months;
  };

  const latestMonths = getLastSixMonths();

  // Flattening data
  const flattenedData = {};
  latestMonths.forEach(month => {
    flattenedData[month] = 0;
  });

  /**
    To replace the 0 values in flattenedData with real download counts 
    only if the API provides data for that month
   **/
  Object.entries(data).forEach(([year, months]) => {
    Object.entries(months).forEach(([month, count]) => {
      const formattedMonth = `${monthAbbreviations[month.trim()]} ${year}`;
      if (flattenedData.hasOwnProperty(formattedMonth)) {
        flattenedData[formattedMonth] = count;
      }
    });
  });

  const downloadCounts = latestMonths.map(month => flattenedData[month] || 0);

  const chartData = {
    labels: latestMonths,
    datasets: [
      {
        label: 'Downloads per Month',
        data: downloadCounts,
        backgroundColor: '#873EF2',
        borderColor: '#873EF2',
        borderWidth: 1,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly Downloads',
      },
    },
    scales: {
      x: {
        grid: {
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

  return <Bar data={chartData} options={options} />;
};

export default CustomBarChart;
