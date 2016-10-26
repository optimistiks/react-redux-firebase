import { combineReducers } from 'redux';
import counter from '../../counter/reducers';

const appReducer = combineReducers({
  counter,
});

export default appReducer;
