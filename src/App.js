import React, { Component } from 'react';
import Nav from './general/Nav';
import './App.css';
import companies from './general/static-data';
import CompanyListPage from './CompanyListPage';
import CompanyComparisonPage from './CompanyComparisonPage';
class App extends Component {
  state = {
    activeTab: 0,
    companiesToCompare: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }
//Need to add check for duplicate and limit selection to max 2
  handleAddToComparison = (company) => {
    this.setState({
      companiesToCompare: [...this.state.companiesToCompare, company]
    });
  }
  
  renderContent() {
    switch(this.state.activeTab) {
      default:
      case 0: return (
        <CompanyListPage
          companies={companies}
          onAddToComparison={this.handleAddToComparison}
        />
      )
      case 1: return <CompanyComparisonPage
        companies={this.state.companiesToCompare}
      />
    }
  }

  render() {
    let {activeTab} = this.state;
    return (
      <div className='App'>
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <main className='App-content'>
          {this.renderContent()}
        </main>
      </div>
    );
  }
}
export default App;
