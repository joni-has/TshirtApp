import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard'; 
import Project from './components/project/Projects'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Project />
      </div>
    );
  }
}

export default App;
