import React from 'react';
import './App.css';



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstname:'',
      FirstName:[],
      lastname:'',
      LastName:[],
      email:'',
      Email:[],
    }};
  

  handleInput1=(e)=>{
    this.setState({
      firstname: e.target.value
    })
  }

  handleInput2=(e)=>{
    this.setState({
      lastname: e.target.value
    })
  }

  handleInput3=(e)=>{
    this.setState({
      email: e.target.value
    })
  }


  handleSubmit = (event) =>{
    event.preventDefault();
    //console.log(this.state);
    
    const firstname =this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const FirstName =[...this.state.FirstName, firstname]
    const LastName = [...this.state.LastName, lastname]
    const Email=[...this.state.Email, email]
    
    
    this.setState({
      FirstName: [...FirstName],
      LastName: [...LastName],
      Email:[...Email],
    })
    
    this.setState({
      firstname:'',
      lastname:'',
      email:'',
    })
    
    
  }
  


  render(){
    return(

      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type ='text'
          placeholder='First Name:'
          value={this.state.firstname}
          onChange={this.handleInput1}/>
          <input
          type ='text'
          placeholder='Last Name:'
          value={this.state.lastname}
          onChange={this.handleInput2}/>
          <input
          type ='text'
          placeholder='E-mail:'
          value={this.state.email}
          onChange={this.handleInput3}/>
          <input type='submit' value='BTN'></input>
        </form>
        <div>First Name:</div>
        <ul>
          {
            this.state.FirstName.map((firstname, index)=>{
              return <li key={index.toString()}>{firstname}</li>
            })
          }
        </ul>
        <div>Last Name:</div>
        <ul>
          {
            this.state.LastName.map((lastname, index)=>{
              return <li key={index.toString()}>{lastname}</li>
            })
          }
        </ul>
        <div>E-mail:</div>
        <ul>
          {
            this.state.Email.map((email, index)=>{
              return <li key={index.toString()}>{email}</li>
            })
          }
        </ul>
      </div>
    )
  }





}