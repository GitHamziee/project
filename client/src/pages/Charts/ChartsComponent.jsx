import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto'; // for Chart.js v3 or later

// Example datasets for different types of charts
const dataBar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [{
    label: 'Vulnerabilities per Month',
    data: [12, 19, 3, 17],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const dataDoughnut = {
  labels: ['Critical', 'High', 'Medium', 'Low'],
  datasets: [{
    label: 'Severity Levels',
    data: [10, 15, 7, 2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  }]
};

const dataLine = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Scan Frequency',
    data: [3, 2, 2, 4],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  maintainAspectRatio: false // This allows the charts to resize based on the container size
};

function Charts() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
        <div style={{ width: '300px', height: '300px' }}>
        <h3>Bar Chart - Vulnerabilities</h3>
        <Bar data={dataBar} options={options} />
      </div>
        </div>

        {/* <div  className='col-4 '>
        <h3>Doughnut Chart - Severity Levels</h3>
        <Doughnut data={dataDoughnut} />
      </div> */}
      </div>
      
     
      
      {/* <div style={{ width: '300px', height: '300px' }}>
        <h3>Line Chart - Scan Frequency</h3>
        <Line data={dataLine} options={options} />
      </div> */}
    </div>
    
    
  );
}

export default Charts;
