import React from 'react';
import './App.css';




export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      Base: '',
      Toppings:[],
      Cutornot:'',
      Txt:''
    }
  }

  handleBase=(e)=>{
    this.setState({Base:e.target.value})
  }

  handleToppings=(e)=>{

    let toppings = this.state.Toppings.slice();
    if(toppings.indexOf(e.target.value)===-1){
      toppings.push(e.target.value);
    }else{
      toppings.splice(toppings.indexOf(e.target.value),1)
    }
    this.setState({
      Toppings: toppings
    })

  }

  handleCut=(e)=>{
    this.setState({
      Cutornot:e.target.value
    })
  }

  handleTxt=(e)=>{
    this.setState({
      Txt: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({ Base:this.state.Base, 
                    Toppings:this.state.Toppings, 
                    Cutornot: this.state.Cutornot, 
                    Txt:this.state.Txt
                });
    console.log(this.state);
  }



  render(){
    return(
        <div>
          <h2>Pizza Picker</h2>
          <form onSubmit={this.handleSubmit}>

            <div className='base'>Bese:

            <select value={this.state.base} onChange={this.handleBase}>
              <option value='rice'>Rice</option>
              <option value='grain'>Grain</option>
              <option value='wheat'>Wheat</option>
            </select>
            </div>

            <div className='toppings'>Toppings:
            <li><input type='checkbox' value='apple' onChange={this.handleToppings}/>Apple</li>
            <li><input type='checkbox' value='fish' onChange={this.handleToppings}/>Fish</li>
            <li><input type='checkbox' value='pork' onChange={this.handleToppings}/>Pork</li>
            </div>

            <div className='Cut'>
            <li><input type='radio' name='Cut or not' value ={true} onChange={this.handleCut} /> Y </li>
            <li><input type='radio' name='Cut or not' value ={false} onChange={this.handleCut} /> N </li>
            </div>

            <div className='txt'>
              <label>Write a comment:
                <input type='text' onChange={this.handleTxt} value={this.state.handleTxt} />
              </label>
            </div>

            <div className='submitBTN'>
              <input type='submit' value='Submit'></input>

            </div>




          </form>


        </div>

    )
  }

}
