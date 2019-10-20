import React, { Component } from 'react';
import ListItem2 from './listitem2';
import Dialog from './dialog';
import './App2.css';



class App2 extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            list: [],
            finished: 0
        };
    }
    addTask (newitem) {
      var allTask = this.state.list;
      allTask.push(newitem);
      this.setState({
          list: allTask
      });
  }
  updateFinished (todoItem) {
      var sum = 0;
      this.state.list.forEach( (item) => {
          if (item.id === todoItem.id) {
              item.status = todoItem.status;
          }
          if (item.status === 1) {
              sum++;
          }
      });
      this.setState({
          finished: sum
      });
  }

  updateTotal (todoItem) {
    var obj = [], sum = 0;
    this.state.list.forEach((item) => {
        if (item.id !== todoItem.id) {
            obj.push(item);
            if (item.status === 1 ) {
                sum++;
            }
        }
    });
    this.setState({
        list: obj,
        finished: sum
    });
}


render () {
  return (
      <div className="container">
          <h1>TODOS</h1>
          <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
          <ul>
              { this.state.list.map ((item, index) =>
                  <ListItem2 
                      item={item}  
                      finishedChange={this.updateFinished.bind(this)} 
                      totalChange={this.updateTotal.bind(this)}
                      key={index}
                  />
              )}
          </ul>
      </div>
  );
}
}

export default App2;