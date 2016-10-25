import { connect } from 'react-redux';
import Button from './button';
import { exampleAction } from '../actions';


const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(exampleAction());
  },
});

const ActionButton = connect(
  null,
  mapDispatchToProps,
)(Button);

export default ActionButton;
