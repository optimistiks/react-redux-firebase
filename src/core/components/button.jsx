import React, { PropTypes } from 'react';


const Button = props => (<button onClick={props.onClick}>Press me</button>);

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
