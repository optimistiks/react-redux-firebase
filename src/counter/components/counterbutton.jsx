import { connect } from 'react-redux';
import Button from '../../core/components/button';
import { incrementCounter } from '../actions';


const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(incrementCounter());
  },
});

const ActionButton = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ActionButton;
