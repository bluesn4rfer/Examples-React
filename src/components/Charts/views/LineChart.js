import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ data: chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.label,
        data: chartData.values,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1, // This makes the line curved. Set to 0 for straight lines.
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
