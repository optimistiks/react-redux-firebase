import { combineReducers } from 'redux';
import { EXAMPLE_ACTION } from '../actions';

function exampleReducer(state = false, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return true;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  exampleReducer,
});

export default appReducer;
