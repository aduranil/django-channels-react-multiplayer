import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import WebSocketContainer from "./components/containers/WebSocketConnection";

class App extends Component {
  render() {
    return <div>Test... </div>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <WebSocketContainer host="ws://localhost:8000/tracking" autoconnect={true}>
      <App />
    </WebSocketContainer>
  </Provider>,
  document.getElementById("root")
);
