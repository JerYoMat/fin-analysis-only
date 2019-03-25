import React, { Component } from 'react';
import Nav from './general/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }
  
  renderContent() {
    switch(this.state.activeTab) {
      default:
      case 0: return <span>Companies</span>
      case 1: return <span>Comparison</span>
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
