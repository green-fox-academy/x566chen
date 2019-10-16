import React, { Component } from 'react';
class component2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'component1',
            date:(new Date()).getTime()
        }
    }
    

    componentDidMount() {
        this.setState({
            date: (performance.now()/1000)
          });

      }
     


    render(){
        return(
            <tr>
            <th>{this.state.name}</th>
            <th>{this.state.date}s</th>
            </tr>
        )
    }

}

export default component2