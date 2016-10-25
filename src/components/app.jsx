import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = props => (
  <div className="App">
    <Link to="/">Home</Link>
    <Link to="/about">Abouts</Link>

    { props.children }
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
