import React,{Component} from 'react'
import image1 from './pic/1.jpg'
import image2 from './pic/2.jpg'
import image3 from './pic/3.jpg'
import image4 from './pic/4.jpg'

class PlayImg extends Component{
    render(){
        let images = [image1,image2,image3,image4]
        // const src = 'img/'+this.props.num+'.jpg';
        return(
    
                <img className='pic' src={images[this.props.num]} alt=''/>
         
        )
    }
}
export default PlayImg;
