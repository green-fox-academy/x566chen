import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import allReducer from './reducers/reducer'


ReactDOM.render(
<Provider store={createStore(allReducer)}>
<App />
</Provider>
, document.getElementById('root'));


