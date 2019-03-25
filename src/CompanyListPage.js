import React from 'react';
import './CompanyListPage.css'
import Company from './Company';


function CompanyListPage({ companies, onAddToComparison }) {
  return (
    <ul className='CompanyListPage-companies'>
      {companies.map(company => 
        <li key={company.id} className='CompanyListPage-company'>
          <Company
            company={company}
            onAddToComparison={() => onAddToComparison(company)} 
        />
        </li>
      )}
    </ul>
  )
}

export default CompanyListPage;