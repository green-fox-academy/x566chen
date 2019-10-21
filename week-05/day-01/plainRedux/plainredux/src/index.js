import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore } from 'redux';
import changeReducer from './reducers/reducer.js';



const store = createStore(changeReducer);
const console1 = store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch({type: 'SET', amount: 6});
// store.dispatch({type: 'INCREASE'});
// store.dispatch({type: 'INCREASE', amount: 2});
// store.dispatch({type: 'RESET'});
// store.dispatch({type: 'INCREASE'});
// store.dispatch({type: 'DECREASE', amount: 4});


store.dispatch({type: 'ADD_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'REMOVE_TAGS'});

console1();
ReactDOM.render(<App />, document.getElementById('root'));