import React from 'react';
import logo from './logo.svg';
import './App.css';

const value = 'i am here';
const num = 28;
const sum = 1000000 + 1;
const isTrue = true;
const youHot = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'lightskyblue'
        }}> Hello, world!
        </p>
        <p>
        {value}
        </p>
        <p>
        {num}
        </p>
        <p>
        {sum}
        </p>
        <p>
        {isTrue && 'it is true'}
        </p>
        <p>
        {youHot ? 'you are hot' : 'you are not hot'}
        {undefined}
        {null}
        {false}
        {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
