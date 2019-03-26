import React from 'react';

const ScoreTable = ({ companyData }) => (
  <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Mark</td>
      <td>Otto</td>
  
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
    <tr>
      <th scope="row">E</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
  </table>
)

export default ScoreTable;