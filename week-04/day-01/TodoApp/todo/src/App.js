import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2
        },
        {
          text: 'Buy milk',
          prio: 1
        }
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2
        },
        {
          text: 'Mentoring others',
          prio: 1
        }
      ]
    }
    this.doneTodo = this.doneTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  doneTodo(todo,flag){
    this.state.todo.splice(flag,1);
    this.state.doneTodo.push(todo);
    return this.setState({
      todo: this.state.todo,
      doneTodo: this.state.doneTodo
    })
  }

  deleteTodo(flag){
    this.state.doneTodo.splice(flag, 1);
    return this.setState({ doneTodo: this.state.doneTodo })
  }

  setPrior(arr=[]){
    const res=[];
    if(arr[0].prio>arr[1].prio){
      res.push(arr[1]);
      res.push(arr[0]);
    }else{
      res.push(arr[0]);
      res.push(arr[1]);
    }
    return res;
  }

  renderone(data,func, btnName) {
 
      return data.sort((a, b) => a.prio - b.prio).map((item, i) => (
        <li >
          {item.text}
          <button onClick={() => { func(item, i) }}>
          {btnName}</button>
        </li>
      ));
  }


  render(){
    const {
      todo,
      doneTodo,
    } = this.state;
    
    return(
        <div>
        <h3>TODOS:</h3>
        <ul>{this.renderone(todo, this.doneTodo, 'done')}</ul>
        <h3>DONE TODOS:</h3>
        <ul>{this.renderone(doneTodo, this.deleteTodo)}</ul>
        </div>
    );


  }







}

export default App;
