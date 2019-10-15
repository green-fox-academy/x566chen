import React from 'react'

export default function star(props) {
    return (
        <ul>
            {props.items.map(item => <li><input type="checkbox" />{item.name}</li>)}
        </ul>
    );
  }