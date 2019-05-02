import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './src/modules/reducers';
import App from './src/App';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
const Root = ({ store }) => (
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>
);

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
