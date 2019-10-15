import React from 'react';



class App extends React.Component {
    constructor(props){
        super(props);
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrease=this.handleDecrease.bind(this);
        this.state = {
            number: 0
        };
    }

    handleIncrement(){
        this.setState({number: this.state.number+1})
    }

    handleDecrease(){
        if(this.state.number>0){
            this.setState({number: this.state.number-1})

        }
        
    }

    render(){

        let btn1;
        let btn2;
        const number = this.state.number;

        btn1 = <button onClick={this.handleIncrement}>Buy one</button>
        btn2 = <button onClick={this.handleDecrease}>Eat one</button>


        
        return(

            <div>
                {btn1}
                <div>{number}</div>
                {btn2}
 
            </div>

        )
    }
}

// function buyoneButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Buy one
//         </button>
//     )
// }

// function eatoneButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Eat one
//         </button>
//     )
// }





export default App;