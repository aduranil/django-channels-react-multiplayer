import React from "react";
import ReactDOM from "react-dom";
import Chat from "./Chat";
import WebSocketInstance from "./websocket";
import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Crafty Girls",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends React.Component {
  componentDidMount() {
    WebSocketInstance.connect();
  }
  render() {
    return (
      <Grommet theme={theme}>
        <div> hi</div>
      </Grommet>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
