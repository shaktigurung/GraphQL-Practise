import React, { Component } from 'react';
import './App.css';
import ExchangeRates from './components/ExchangeRates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> GraphQL Practise </h1>
        <ExchangeRates />
      </div>
    );
  }
}

export default App;
