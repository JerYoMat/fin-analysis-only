import React from 'react';
import {Bar} from 'react-chartjs-2';

const ScoreBarChart = ({ companyData }) => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Company A',
        backgroundColor: 'rgba(66,134,244,0.2)',
        borderColor: 'rgba(66,134,244,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(66,134,244,0.4)',
        hoverBorderColor: 'rgba(66,134,244,1)',
        data: [-2,3,4,5,6]
      },
      {
        label: 'Company B',
        backgroundColor: 'rgba(211, 211, 211,0.2)',
        borderColor: 'rgba(211, 211, 211,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(211, 211, 211,0.4)',
        hoverBorderColor: 'rgba(211, 211, 211,1)',
        data: [1,2,4,6,8]
      }
    ]
  };
  


  return (
    <div className='card'>
      <Bar
        data={data}
      
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>
  );

}

export default ScoreBarChart