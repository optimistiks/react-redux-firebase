import React, { PropTypes } from 'react';


const CounterValue = props => (<div><b>{props.counterValue}</b></div>);

CounterValue.propTypes = {
  counterValue: PropTypes.number.isRequired,
};

export default CounterValue;
