import React from 'react';

// 73e0a905efdb4303939f186e4605c94c
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73e0a905efdb4303939f186e4605c94c

const new_url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73e0a905efdb4303939f186e4605c94c'
const slow_url = `https://lofty-partner.glitch.me/delay/3000/url/${new_url}`
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      articles:[],
      //loaded: false
    }
  }

  async componentDidMount(){
    let response = await fetch(slow_url)
     .then(response =>response.json())
     await this.setState({
        articles : [...response.articles]
       //loaded: true
      
     })
     console.log(JSON.stringify(response.articles[0]))



  

  }


  render(){
    return (
      <div className='App'>
       <ul>
       {this.state.articles.map(article => (
            <p key = {article.author}>{article.title}</p>))}
       </ul>
      </div>
    )
  }
  


}

export default App;
