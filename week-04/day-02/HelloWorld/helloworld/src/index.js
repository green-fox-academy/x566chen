import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Haloworld from './haloworld';
import Mistake from './error';
import Implement from './implement';
import ErrorCode from './errorcode';



ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Haloworld} />
            <Route  exact path="/error" component={Mistake} />
            <Route path='/error/:id' component={ErrorCode}></Route>
            <Route  component={Implement} />
        </Switch>
    </Router>,
    document.getElementById("app"))
