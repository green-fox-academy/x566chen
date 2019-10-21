
import {
    ADD_TAG,
    REMOVE_TAG,
    REMOVE_TAGS
  } from '../operation';

  const initState = {
    tags: ['blue', 'bold', 'hipster'],
  };

  function TagReducer(state=initState, action){
    switch (action.type){
        case 'ADD_TAG':
            if(state.tags.indexOf(action.tag)==-1){
                return{
                    ...state,
                    tags: [...state.tags, action.tag]
                }
            }
            return {...state}

        case 'REMOVE_TAG':
            let index = state.tags.indexOf(action.tag);
            let empty=[...state.tags]
            empty.splice(index,1);
            return{
                ...state,
                tags: [...empty]
            }

        case 'REMOVE_TAGS':
            return{
                ...state,
                tags: []
            }
    }
}

  
  export default TagReducer;