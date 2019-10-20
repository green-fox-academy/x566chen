import React,{Component} from 'react';
import './App.css';
import PlayImg from './playImg.js';
import ImgButton from './button.js';
import ImgIndexes from './ImgIndexes.js';



class App extends Component{

  constructor(){
    super();
    this.state ={
      currIndex:0,
      start: false,
      playTime:2000,
    }
  }
  changeIndex(){
    if(this.state.currIndex === 3){
      this.setState({currIndex:0})
    }else{
      this.setState({currIndex:this.state.currIndex+1})
      }
    }

  componentDidMount(){
    this.change = setInterval(()=>this.changeIndex(),this.state.playTime);
  }

  handleSubmit = (flag)=>{
    clearInterval(this.change);
    if(flag === 1) {
        if (this.state.currIndex === 3) { 
            this.setState({currIndex: 0,start:false,})
        } else {
          this.setState({
            currIndex: this.state.currIndex + 1,
            start:false,
        }) }
    }
    if(flag === 0){
      if (this.state.currIndex === 0) {
        this.setState({currIndex: 3,start:false})
    } else {
      this.setState({
      currIndex: this.state.currIndex - 1,
      start:false
    })
    }
    }


this.change = setInterval(()=>this.changeIndex(),this.state.playTime);

}

  handleStart(){
    if(this.state.start){
      this.change = setInterval(()=>this.changeIndex(),this.state.playTime)
    }else{
      clearInterval(this.change);
    }
    this.setState({start: !this.state.start})
  }

  handlePoint = (id)=>{
    clearInterval(this.change);
    this.setState({
        currIndex:id,
        start:false,
    })
}

handlePointStart = ()=>{
 this.change = setInterval(()=>this.changeIndex(),this.state.playTime);
}

componentWillUnmount(){
  clearInterval(this.change);
}

reviseTime = (time) =>{
  clearInterval(this.change);
  this.setState({
    playTime:this.state.playTime+time,
  })
  this.change = setInterval(()=>this.changeIndex(), this.state.playTime+time)
}



  render(){
    return (
      <div className="App">
        <div className='background' >
          
            <ImgButton  id='leftB'  value='<' onSubmit={this.handleSubmit}/>
            <PlayImg num={this.state.currIndex} />
            <ImgButton  id='rightB'  value='>' onSubmit={this.handleSubmit}/>
          
        </div>
        <ImgIndexes  num={this.state.currIndex} onPoint={this.handlePoint} start={this.handlePointStart}/>

      </div>
    )
  }


  }
export default App;
