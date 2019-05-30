import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './src/modules/reducers';
import wsMiddleware from './src/modules/middleware';
import App from './src/App';
import WebSocketConnection from './src/WebSocketConnection';

const middleware = [reduxThunk, wsMiddleware];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
const Root = ({ store }) => (
  <Router>
    <Provider store={store}>
      <WebSocketConnection
        host={`ws://127.0.0.1:8000/ws/game/1?token=${localStorage.getItem('token')}`}
        autoconnect
      >
        <Route path="/" component={App} />
      </WebSocketConnection>
    </Provider>
  </Router>
);

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
