import React,{Component} from 'react'
import './App.css';
import image1 from './pic/1.jpg'
import image2 from './pic/2.jpg'
import image3 from './pic/3.jpg'
import image4 from './pic/4.jpg'


class ImgIndex extends Component{
    handlePoint = ()=>{
        if(this.props.onPoint){
            this.props.onPoint(this.props.id);
        }
    }
    reStart = ()=>{
        if(this.props.start){
            this.props.start();
        }

}
render(){
    //../public/pic/1.jpg
    let images = [image1,image2,image3,image4]
    return(
        <img src={images[this.props.id]} id={this.props.id} className='point'  onMouseOver={this.handlePoint} onMouseOut={this.reStart} />

    )

}

}

export default ImgIndex;