import React from 'react'

export default function Hotel(props) {
    
    props.items.map(item=>{

        return(
            <h1>{item.name}</h1>,
            <img src={item.imageURL} alt=''/>,
            <p>{item.description}</p>,
            <button>Book Now!</button>
        ) 

    })

  }