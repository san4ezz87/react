import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';

import Main from './components/main/Main'

import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
