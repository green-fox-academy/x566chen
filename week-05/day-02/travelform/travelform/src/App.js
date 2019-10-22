import React, {Component} from 'react';
import './App.css';




export default class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      FirstName:'',
      LastName:'',
      Age:0,
      Gender:'',
      Locations:'',
      Restriction:[],
    }
  }

  handleInputFirstname=(e)=>{
    this.setState({
      FirstName: e.target.value
    })
  }

  handleInputLastname=(e)=>{
    this.setState({
      LastName: e.target.value
    })
  }

  handleInputAge=(e)=>{
    this.setState({
      Age: e.target.value
    })
  }

  onSelectGender=(e)=>{
    this.setState({
      Gender: e.target.value
    })
  }

  onSelectLocation=(e)=>{
    this.setState({
      Locations: e.target.value
    })
  }

  onSelectRes=(e)=>{
    let restriction = this.state.Restriction.slice();

    if(restriction.indexOf(e.target.value)===-1){
      restriction.push(e.target.value);
    }else{
      restriction.splice(restriction.indexOf(e.target.value),1)
    }

    this.setState({
      Restriction: restriction
    })
  }

  onSubmit=(e)=>{
    e.preventDefault();
    alert(`First name: ${this.state.FirstName}
    Last name: ${this.state.LastName}
    Age: ${this.state.Age}
    Gender: ${this.state.Gender}
    Location: ${this.state.Locations}
    Dietary restrictions: ${this.state.Restriction}`
    )
  }



  render(){
    return(
      <div>
        <h1>Travel Form</h1>
        <form onSubmit={this.onSubmit} className='form'>
        
        <label>First Name:<input type = "text" name = "firstName" value = {this.state.FirstName} onChange = {this.handleInputFirstname}/></label>
        <label>Last Name:<input type = "text" name = "lastName" value = {this.state.LastName} onChange = {this.handleInputLastname}/></label>
        <label>Age:<input type = "number" name = "age" value = {this.state.Age} onChange = {this.handleInputAge}/></label>
        <ul>Gender:
        <li><input type="radio" name="gender" value = 'female' onChange={this.onSelectGender}/>Female</li>
        <li><input type="radio" name="gender" value = 'male' onChange={this.onSelectGender}/>Male</li>
        <li><input type="radio" name="gender" value = 'Both or None' onChange={this.onSelectGender}/>Both or None</li>
         </ul>

        <div className='locations'>Location：
         <select value={this.state.Locations} onChange={this.onSelectLocation}>
         <option value='Toronto'>Toronto</option>
         <option value='Waterloo'>Waterloo</option>
         <option value='Montreal'>Montreal</option>
         </select>
       </div> 

       <ul>Restrictions:
         <li><input type='checkbox' name='restrition' value='vegetarian' onChange={this.onSelectRes}/>vegetarian</li>
         <li><input type='checkbox' name='restrition' value='kosher' onChange={this.onSelectRes}/>Kosher</li>
         <li><input type='checkbox' name='restrition' value='lactose free' onChange={this.onSelectRes}/>Lactose Free</li>

       </ul>

       <input type='submit' value='Submit' onChange={this.onSubmit}/>




      </form>



      </div>


    )
  }






}
