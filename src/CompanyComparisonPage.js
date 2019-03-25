import React from 'react';

const CompanyComparisonPage = ({ companies }) => (
  <ul className='CompanyListPage-companies'>
  {companies.map(company => 
    <li key={company.id} className='CompanyListPage-company'>
      {company.companyname}
    </li>
  )}
</ul>
)
export default CompanyComparisonPage;