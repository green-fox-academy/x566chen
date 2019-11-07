import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav'
import Submitform from './Submitform';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
                <Switch>
                <Route exact path="/" component={Nav} />
                <Route path="/Submitform" component={Submitform} />
                </Switch>
        </Router>
      </header>
    </div>
   
  );
}

export default App;
