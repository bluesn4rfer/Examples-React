import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ data: chartData }) => {
  // Setting options for responsiveness
  const options = {
    maintainAspectRatio: false, // This will allow the chart to fill the parent div size
    responsive: true,
  };

  // Preparing the data structure for Chart.js
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
