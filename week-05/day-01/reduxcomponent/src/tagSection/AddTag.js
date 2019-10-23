import React, { useState } from 'react';
import { connect } from 'react-redux';

const Addtag = (props) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        props.AddTag(value)
        setValue('')
    }
   
    return (
        <div className="AddTag">
            <h1>Add Tag</h1>
            <input type="text" onChange={handleChange} value={value} />
            <button onClick={onClick}>Add</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tags: state.tags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddTag: tag => {
            dispatch({ type: 'ADD_TAG', tag: tag })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtag)