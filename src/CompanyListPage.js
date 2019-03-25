import React from 'react';
import './CompanyListPage.css'


function CompanyListPage({ companies }) {
  return (
    <ul className='CompanyListPage-companies'>
      {companies.map(company => 
        <li key={company.id} className='CompanyListPage-company'>
          {company.companyname}
        </li>
      )}
    </ul>
  )
}

export default CompanyListPage;