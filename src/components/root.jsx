import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Routes from './routes';
import appReducer from '../reducers';
import appSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(...[
  sagaMiddleware,
]);

const composeEnhancers = (process.env.NODE_ENV !== 'production'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line

const store = createStore(appReducer, composeEnhancers(middleware));

sagaMiddleware.run(appSaga);

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
