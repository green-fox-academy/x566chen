import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Haloworld from './haloworld';
import Error1 from './error';
import Nav from './nav';
import Implement from './implement';
import Errorcode from './errorcode';

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Route exact path="/" component={Implement} />
            <Route  path="/ route" component={Haloworld} />
            <Route  path="/error route" component={Error1} />
            <Route  path="/error/:errorcode route" component={Errorcode} />
        </div>
    </Router>,
    document.getElementById("app"))
