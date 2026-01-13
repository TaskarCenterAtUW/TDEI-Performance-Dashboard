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

  const originalValues = [
    satisfactionRates?.accessMap ?? null,
    satisfactionRates?.audiom ?? null,
    satisfactionRates?.walkshed ?? null,
  ];

  const actualValues = originalValues.map(val => val ?? 0);
  const remainingValues = originalValues.map(val => (val == null ? 5 : 5 - val));

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
        label: 'Remaining',
        data: remainingValues,
        backgroundColor: 'lightgrey',
        barThickness: 40,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 5,
        grid: { display: false },
      },
      y: {
        stacked: true,
        ticks: { font: { size: 14 } },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const category = categories[index];
            const originalValue = originalValues[index];

            if (datasetIndex === 0) {
              if (originalValue == null) {
                return `${category}: Satisfaction data is pending`;
              }
              return `${category}: ${originalValue.toFixed(2)}`;
            }

            if (datasetIndex === 1) {
              if (remainingValues[index] === 5) {
                return `${category}: Satisfaction data is pending`;
              }
              return '';
            }

            return '';
          },
        },
      },
    },
  };

  return (
    <>
      <div aria-hidden="true" style={{ height: '100%', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
      <table
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        <caption>Satisfaction Rates</caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Satisfaction</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                {originalValues[index] != null
                  ? Number(originalValues[index]).toFixed(2)
                  : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
