import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./../reducers";
import wsMiddleware from "./../middleware/WebSockets";


let store = createStore(
  reducers,
  compose(applyMiddleware(wsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
