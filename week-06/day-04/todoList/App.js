import React, { Component } from 'react';
import ListItem from './listitem';
import Dialog from './dialog';
import './App.css';



class App extends Component {
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

// getData(){
//     fetch(`http://localhost:8080/`,{
//         method:'GET'
//     }).then(res=>res.)
// }


render () {
  return (
      <div className="container1">
          <h1>TODOS</h1>
          <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
          <ul>
              { this.state.list.map ((item, index) =>
                  <ListItem
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

export default App;
