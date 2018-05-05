import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {loadState} from './localStorage'

import rootReducers from './reducers';
const persistedState = loadState();

export default () => {
  const store = createStore(rootReducers, persistedState, applyMiddleware(logger))
  return store;
}
