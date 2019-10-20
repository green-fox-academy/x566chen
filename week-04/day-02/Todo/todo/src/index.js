import App1 from './App1.js';
import App2 from './App2.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Nav />
        <Switch>
            <Route exact path="/app1" component={App1} />
            <Route exact path="/app2" component={App2} />
        </Switch>
    </Router>,
    document.getElementById("root"))