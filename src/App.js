import React, { Component } from 'react';
import Nav from './general/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    activeTab: 0
  };
  
  renderContent() {
    return (
      <span>Empty</span>
    )
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <main className='App-content'>
          {this.renderContent()}
        </main>
      </div>
    );
  }
}
export default App;
