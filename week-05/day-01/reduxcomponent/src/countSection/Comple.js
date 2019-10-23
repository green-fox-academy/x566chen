import React from 'react';
import { connect } from 'react-redux';

const Complex= (props) => {
    return (
        <div className="Complex">
            <h1>Complex Counter</h1>
            <p>{props.counter + props.tags.length}</p>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Complex)