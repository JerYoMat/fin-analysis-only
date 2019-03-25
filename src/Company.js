import React from 'react';
const Company = ({ company, onAddToComparison }) => (
  <div className='card'>
    <div className='card-body'>
      <h5 className='card-title'>{company.companyname}</h5>
      <p className='card-text'>Ticker: {company.primarysymbol}</p>
      <p className='card-text'>Primary Exchange: {company.primaryexchange}</p>
      <button type='button' className='btn btn-secondary' onClick={onAddToComparison}>Add to Compare</button>
    </div>
  </div>
)
export default Company;
