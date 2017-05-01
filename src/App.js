import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './containers/Counter';

const App =(props)=>{
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter />
      </div>
    );
  }

export default App;
