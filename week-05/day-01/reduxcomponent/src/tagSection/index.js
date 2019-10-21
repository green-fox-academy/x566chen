import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    addTag,
    removeTags,
    removeTag,
  } from './action';

  const mapDispatchToProps = (dispatch) => ({
    onaddTag: (tag) => dispatch(addTag(tag)),
    onremoveTags: () => dispatch(removeTags()),
    onremoveTag: (tag) => dispatch(removeTag(tag)),
  });

function TagSection(props) {
    const [inputTag, setInputTag] = useState('');
  
    const {
      onaddTag,
      onremoveTag,
      onremoveTags,
      tags,
    } = props;

  
    const tagsSection = () => tags.map(tag => (
      <div
        key={tag}
        onClick={() => onremoveTag(tag)}>
        {tag}
      </div>
    ));
  
    return (
      <div>
  
        <div>
          {tagsSection()}
        </div>
  
        <div>
          <h1>Add Tag</h1>
          <input
            onChange={(event) => setInputTag(event.target.value)}
            value={inputTag}
          />
          <button onClick={() => onaddTag(inputTag)}>Add</button>
        </div>
  
        <div>
          <h1>Remove All Tags</h1>
          <button onClick={() => onremoveTags()}>Remove All Tags</button>
        </div>
  
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    tags: state.TagSection.tags,
  });

  export default connect(mapStateToProps, mapDispatchToProps)(TagSection);