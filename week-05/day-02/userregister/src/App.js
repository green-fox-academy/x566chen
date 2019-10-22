import React from 'react';
import './App.css';

export default class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    username:'',
    emailAddress:'',
    password:'',
    btnState1:false,
    btnState2:false,
    btnState3:false,
  }
}

  onInputName=(e)=>{
      if(e.target.value.length>0){
        this.setState({
          username: e.target.value,
          btnState1: true,
        })
      }else{
        this.setState({
          username: e.target.value,
          btnState1: false,
        })
      }
  }

  onInputEmail=(e)=>{
    if(e.target.value.indexOf('@')){
      this.setState({
        emailAddress: e.target.value,
        btnState2: true,
      })
    }else{
      this.setState({
        emailAddress: e.target.value,
        btnState2: false,
      })

    }

  }

  onInputPassword=(e)=>{
    if(e.target.value.length>8){
      this.setState({
        password:e.target.value,
        btnState3: true,
      })

    }else{
      this.setState({
        password:e.target.value,
        btnState3: false,
      })
    }

  }

  onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    
  }

  
render(){
  return(
    <div>
    <h1>User registration</h1>
    <form onSubmit={this.onSubmit}>
      <input
      type ='text'
      placeholder='Username:'
      value={this.state.username}
      onChange={this.onInputName}/>
      <input
      type ='text'
      placeholder='Email address:'
      value={this.state.emailAddress}
      onChange={this.onInputEmail}/>
      <input
      type ='text'
      placeholder='password:'
      value={this.state.password}
      onChange={this.onInputPassword}/>
      {
        this.state.btnState===false
        ||this.state.btnState2===false 
        ||this.state.btnState3===false ? <input type='submit' disabled value='Submit' />

        :<input type='submit' value='Submit'/>
      }
      
    </form>
  </div>
  )
}




}

