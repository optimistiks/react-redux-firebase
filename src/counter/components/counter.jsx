import { connect } from 'react-redux';
import CounterValue from './countervalue';

const getCounterValue = state => state.counter.value;

const mapStateToProps = state => ({
  counterValue: getCounterValue(state),
});

const Counter = connect(
  mapStateToProps,
)(CounterValue);

export default Counter;
