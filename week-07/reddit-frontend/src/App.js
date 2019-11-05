import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './article.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="background">
            <div className ="left">
              <Article />
            </div>
            <div className="right">
                <input type="submit" value="SUBMIT A NEW POST"/>
                <div className ="right-buttom"></div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
