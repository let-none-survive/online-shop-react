import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { saveState} from './localStorage.js'

import App from './containers/App.js';
import './index.css'

import createStore from './store';

const store = createStore();

  store.subscribe(() => {
  saveState(store.getState())
  })
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
