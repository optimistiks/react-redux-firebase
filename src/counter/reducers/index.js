import { INCREMENT_COUNTER } from '../actions';

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    default:
      return state;
  }
}

export default counter;
