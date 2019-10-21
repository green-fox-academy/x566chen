// import React, {PropTypes} from 'react';
// import { connect } from 'react-redux';

// class Operation extends React.Component {
//     render(){
//         const {increaseClick, decreaseClick, setClick, resetClick} = this.props,
//         btnStyle={
//             width :'100px',
//             height: '30px',
//             cursor: 'pointer'
//         }

//         return(
//             <div>
//                 <div>
//                 <h1>The Increaser</h1>
//                 {this.state.counter}
//                 <button style={btnStyle} type="button" onClick={increaseClick}>Increase</button>
//                 </div>

//                 <div>
//                 <h1>The Decreaser</h1>
//                 {this.state.counter}
//                 <button style={btnStyle} type="button" onClick={decreaseClick}>Decrease</button>
//                 </div>

//                 <div>
//                 <h1>The Resetter</h1>
//                 {this.state.counter}
//                 <button style={btnStyle} type="button" onClick={resetClick}>Reset</button>
//                 </div>
//                  

//                 <div>
//                 <h1>The Setter</h1>
//                 {this.state.counter}
//                 <input />
//                 <button style={btnStyle} type="button" onClick={setClick}>Set</button>
//                 </div>



//             </div>
//         )
//     }
// }

// Operation.protoTypes = {
//     increaseClick: PropTypes.func.isRequired,
//     decreaseClick: PropTypes.func.isRequired,
//     resetClick: PropTypes.func.isRequired,
//     setClick: PropTypes.func.isRequired
// }
// export default Operation;


export const COUNTER_DECREASE = 'COUNTER_DECREASE';
export const COUNTER_INCREASE = 'COUNTER_INCREASE';
export const COUNTER_RESET = 'COUNTER_RESET';
export const COUNTER_SET = 'COUNTER_SET';
export const REMOVE_TAG = 'REMOVE_TAG';
export const REMOVE_TAGS = 'REMOVE_TAGS'; 
export const ADD_TAG = 'ADD_TAG';