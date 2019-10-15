import React from 'react'

export default function property(props) {
    return (
        <ul>
            {props.items.map(item => <li><input type="checkbox" />{item.name}</li>)}
        </ul>
    );
  }