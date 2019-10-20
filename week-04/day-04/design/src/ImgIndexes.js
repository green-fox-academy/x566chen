import React, {Component} from 'react';
import ImgIndex from './ImgIndex';
import image1 from './pic/1.jpg'
import image2 from './pic/2.jpg'
import image3 from './pic/3.jpg'
import image4 from './pic/4.jpg'
import './App.css';

const imgs = [image1, image2, image3, image4]



class ImgIndexes extends Component {
    createLi = ()=>{

        let array = [];

        for(let i = 0;i < 4;i++){
            if(i == this.props.num){
                array.push(<ImgIndex  key={i} className='point' id={i} onPoint={this.props.onPoint} start={this.props.start}/>);
            }else{
                array.push(<ImgIndex  key={i} className='point' id={i} onPoint={this.props.onPoint} start={this.props.start}/>);
            }
        }
        return array;
    }

    render(){
        return(
            <div className='points' >
                {this.createLi()}
            </div>
        )
    }
}

export default ImgIndexes;