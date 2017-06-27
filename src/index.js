import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TableReducer from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const store = createStore(
  TableReducer,
  window.devToolsExtension && window.devToolsExtension()
);

registerServiceWorker();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
