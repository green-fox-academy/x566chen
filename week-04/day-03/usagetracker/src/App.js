import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  return (
    <table className="App" border='1 solid'>
      <tr>
        <th>Component</th>
        <th>Time</th>
      </tr>
      <Router>
        <Switch>
        <Route path='/1'>
        <Component1 />
        </Route>
        <Route path='/2'>
        <Component2 />
        </Route>
        </Switch>
      </Router>
      


      

    </table>
  );
}

export default App;
