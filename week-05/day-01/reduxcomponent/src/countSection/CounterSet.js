import React, { useState } from 'react';
import { connect } from 'react-redux';

const CounterSetter = (props) => {
    const [value, setValue] = useState('')

    const handleChange =(e) => {
        setValue(e.target.value)
    }

    const onSubmit = () => {
        props.Setter(parseInt(value))
        setValue('')
    }
    console.log(props)
    return (
        <div className="Setter">
            <h1>The Setter</h1>
            <input type="number" onChange={handleChange} value={value}></input>
            <button onClick={onSubmit}>Set</button>
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
        Setter: (number) => {
            dispatch({ type: 'SET', amount: number })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSetter)