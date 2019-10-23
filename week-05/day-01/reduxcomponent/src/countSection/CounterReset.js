import React from 'react';
import { connect } from 'react-redux';

const CounterReset = (props) => {
    console.log(props)
    return (
        <div className="Reset">
            <h1>The Resetter</h1>
            <button onClick={props.Resetter}>Reset</button>
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
        Resetter: () => {
            dispatch({ type: 'RESET' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterReset)