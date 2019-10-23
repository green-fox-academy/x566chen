import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './reducers/CounterReducer'
import TagReducer from './reducers/TagReducer';
import thunk from 'redux-thunk'



const allReducer = combineReducers({ counter: CounterReducer, tags: TagReducer })
const store = createStore(allReducer,applyMiddleware(thunk))

const subscribe = store.subscribe(() => {
    console.log(store.getState())
})

subscribe()

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));