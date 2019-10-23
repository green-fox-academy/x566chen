import React from 'react';
import { connect } from 'react-redux';

function CounterIncrease (props){
    return(
        <div className='theIncreaser'>
            <h1>The Increaser</h1>
            <h3>{props.counter}</h3>
            <button onClick={props.Increaser}>Increase</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Increaser: () => {
            dispatch({ type: 'INCREASE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterIncrease)