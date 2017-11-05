import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import React from 'react';
import {render} from 'react-dom';
import blueprint from 'blueprint';
import reducers from 'reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Ideas = blueprint.ideas;

render(
  (
    <MuiThemeProvider>
      <Provider store={store}>
        <Ideas />
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('app')
);