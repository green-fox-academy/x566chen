import React from 'react';
import './App.css'

// 73e0a905efdb4303939f186e4605c94c
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73e0a905efdb4303939f186e4605c94c

const new_url = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=73e0a905efdb4303939f186e4605c94c'
const slow_url = `http://slowwly.robertomurray.co.uk/delay/3000/url/${new_url}`
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      articles:[],
      loaded: false
    }
  }

  async componentDidMount(){
    let response = await fetch(slow_url)
     .then(response =>response.json())
     await this.setState({
        articles : [...response.articles],
        loaded: true
      
     })
     console.log(JSON.stringify(response.articles[0]))



  

  }


  render(){

    if (this.state.loaded==true){
      return (
        <div className='App'>
         <ul>
              {this.state.articles.map(article => (
              <p key = {article.author}>{article.title}</p>))}
         </ul>
        </div>
      )
}else{
  return(<div className="lds-heart">1<div></div></div>)
  
}

  }
  


}

export default App;
