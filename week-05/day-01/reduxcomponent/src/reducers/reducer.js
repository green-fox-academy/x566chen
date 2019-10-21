import { combineReducers } from 'redux';
import CountReducer from '../countSection/reducer';
import TagReducer from '../tagSection/reducer';


export default combineReducers({
  CountSection: CountReducer,
  TagSection: TagReducer,
});

