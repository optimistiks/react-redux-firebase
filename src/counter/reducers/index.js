import Immutable from 'immutable';
import { INCREMENT_COUNTER } from '../actions';

const CounterState = new Immutable.Record({
  value: 0,
});

function counter(state = new CounterState(), action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.set('value', state.get('value') + 1);
    default:
      return state;
  }
}

export default counter;
