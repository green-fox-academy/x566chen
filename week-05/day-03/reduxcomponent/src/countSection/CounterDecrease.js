  import React from 'react';
import { connect } from 'react-redux';

const CounterDecrease = (props) => {
    console.log(props)
    return (
        <div className="decreaser">
            <h1>The Decreaser</h1>
            <h3>{props.counter}</h3>
            <button onClick={props.Decreaser}>Decrease</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Decreaser: () => {
            dispatch({ type: 'DECREASE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDecrease)