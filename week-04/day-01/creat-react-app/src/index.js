import React from 'react'
import ReactDOM from 'react-dom'

import SecondComponent from './second-component'

let element = <SecondComponent title="My nice title" />;

ReactDOM.render(element, document.getElementById('react-container'));