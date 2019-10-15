import React, { Component } from 'react';

class ListItem extends Component {
    constructor (props) {
        super(props);

        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    } 

    handleFinished () {
        var status = this.props.item.status;

        status = (status === 0 ? 1 : 0);

        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }
        
        this.props.finishedChange(obj); 
    }

    handleDelete () {
        this.props.totalChange(this.props.item); 
    }

    render () {
        const item = this.props.item;

        const unfinish = {
            color: 'black',
        };

        const finish = {
            backgroundColor: '#FFFA9D',
            color: '#FF9A3C',
            textDecoration: 'line-through'
        }



        var itemStyle = item.status === 0 ? unfinish : finish;
        
        return (
            <li key={item.id} style={itemStyle}>
                <span 
                    onClick={this.handleFinished} 
                    id={item.id}
                    className="check-btn"
                    style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
                ></span>
                <span>{ item.name }</span>
                <button onClick={this.handleDelete} className="delete-btn">   delete</button>
            </li>
        );
    }
}

export default ListItem;