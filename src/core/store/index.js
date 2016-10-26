import { createStore } from 'redux';
import appReducer from '../reducers';
import appSaga from '../sagas';
import compose from './compose';
import middleware, { sagaMiddleware } from './middleware';


export default () => {
  const store = createStore(appReducer, compose(middleware));
  sagaMiddleware.run(appSaga);
  return store;
};
