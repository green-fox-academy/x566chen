import {
    ADD_TAG,
    REMOVE_TAG,
    REMOVE_TAGS
  } from '../operation';
  
  export const addTag = (tag) => ({
    type: ADD_TAG,
    tag,
  });
  
  export const removeTags = () => ({ type: REMOVE_TAGS });
  
  export const removeTag = (tag) => ({
    type:  REMOVE_TAG,
    tag,
  });