import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import createStore from '../store';


export default () => (
  <Provider store={createStore()}>
    <Routes />
  </Provider>
);
