import React from 'react';

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab===0 && 'selected'}`}><a onClick={() => onTabChange(0)}>Company List</a>
      </li>
      <li className={`App-nav-item ${activeTab===1 && 'selected'}`}><a onClick={() => onTabChange(1)}>Comparison</a>
      </li>
    </ul>
  </nav>
)

export default Nav