import React,{Component} from 'react'

class ImgButton extends Component{
    handleSubmit = ()=>{
        if(this.props.onSubmit){
            if(this.props.value == '>'){
                this.props.onSubmit(1);
            }
            if(this.props.value == '<'){
                this.props.onSubmit(0)

            }
                
            }
        }
    
    render(){
        return(
            <a href='#'><div id={this.props.id} onClick={this.handleSubmit}>{this.props.value}</div></a>
        )
    }
}

export default ImgButton;