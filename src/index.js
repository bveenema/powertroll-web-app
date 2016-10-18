// Libs
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Router
import routes from './router';

// CSS
import '../node_modules/purecss/build/pure.css';
import '../node_modules/purecss/build/grids-responsive-min.css';
import './index.css';

// Reducer
import reducer from './reducers';

//const store = createStore(reducer);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
