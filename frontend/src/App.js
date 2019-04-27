import React from "react";
import { Grommet, Box } from "grommet";
import { Switch, Route } from "react-router-dom";
import LoginOrSignup from "./LoginOrSignup";
import Entrance from "./Entrance";
import WebSocketInstance from "./websocket";

const theme = {
  global: {
    font: {
      family: "Luckiest Guy",
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
        <Box
          justify="center"
          height="100%"
          align="center"
          width="50%"
          margin={{ horizontal: "auto" }}
          elevation="medium"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        >
          <Switch>
            <Route exact path="/" component={Entrance} />
            <Route exact path="/loginorsignup" component={LoginOrSignup} />
          </Switch>
        </Box>
      </Grommet>
    );
  }
}

export default App;
