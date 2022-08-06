import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const Portfolio = () => {
  return (
    <div className="bg-slate-50">
      <div>
        <h3>Portfolio</h3>
        <h4>Total Value</h4>
        <span>$1000</span>
      </div>
      <div>
        <Pie data={{
  labels: ['Tether', 'Luna', 'Ethereum'],
  datasets: [
    {
      label: 'PortFolio',
      data: [250, 400, 350],
      backgroundColor: [
        '#14C38E',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',      
      ],
      borderColor: [
        '#14C38E',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
    },
  ],
}} plugins={[ChartDataLabels]}  options={{plugins: {
  legend: {
    display: true,
    labels: {
      usePointStyle: true,
      pointStyle: "circle"
      // boxWidth: 5
    }
  },
  
  datalabels: {
    display: true,
    color: "white",
    align: "center",
    padding: {
      right: 2
    },
    labels: {
      title: {
        font: {
          weight: "bold",
          size:18
        }
      },
    },}
}}}/>
      </div>
    </div>
  )
}

export default Portfolio