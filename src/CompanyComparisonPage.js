import React, { useState } from 'react';
import ScoreBarChart from './ScoreBarChart';
import ScoreTable from './ScoreTable';


const CompanyComparisonPage = ({ companies }) => {
  return (
    <div>
    <div className='row'>
      <div className='col-md-8'>
        <ScoreBarChart  />
      </div>
      <div className='col-md-4'>
        <ScoreTable  />
      </div>
    </div>
    <div className='formula'>Formula: (Ax3.107)+(Bx0.988)+(C+0.420)+(Dx0.717)+(Ex0.847)</div>
    </div>
  )
}
export default CompanyComparisonPage;


/*const [chartOptions, setChartOptions] = useState('placeholder');
  const updateChartOptions = (prevChartOptions, updates) => {
    const newChartOptions = 'placeholder'
    return newChartOptions;
  }; */
