import React from 'react';
import { connect } from 'react-redux';

const RemoveAll = (props) => {
    return (
        <div className="removeAll">
            <h1>Remove All Tags</h1>
            <button onClick={() => props.removeAll()}>Remove All Tags</button>
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
        removeAllTag: () => {
            dispatch({ type: 'REMOVE_TAGS' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoveAll)